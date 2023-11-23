const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const Schema = mongoose.Schema;
const backup = require('mongoose-backup');
const CryptoJS = require('crypto-js');

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String, required: true },
});

// security measures
function encrypt(text) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(process.env.ENCRYPTION_KEY), iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(text) {
    const textParts = text.split(':');
    const iv = Buffer.from(textParts.shift(), 'hex');
    const encryptedText = Buffer.from(textParts.join(':'), 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(process.env.ENCRYPTION_KEY), iv);
    const decrypted = Buffer.concat([decipher.update(encryptedText), decipher.final()]);
    return decrypted.toString();
}

userSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

//temporarily store the unencrypted password
//setter will encrypt the password
userSchema.virtual('tempPassword').set(function(password) {
    this._password = password;
//getter will decrypt it
    this.password = this._password ? encrypt(this._password) : null;
}).get(function() {
    return this._password;
});

const Security = mongoose.model('Security', userSchema);

//sensitive data protection
function encryptMessage(message, secret) {
    return CryptoJS.AES.encrypt(message, secret).toString();
}

function decryptMessage(encryptedMessage, secret) {
    const bytes = CryptoJS.AES.decrypt(encryptedMessage, secret);
    return bytes.toString(CryptoJS.enc.Utf8);
}

//data backup and recovery procedures
mongoose.connection.db.backup(function(err, res) {
    if (err) {
        console.error('Error while backing up the database:', err);
    } else {
        console.log('Backup successfully created:', res);
    }
});

module.exports = Security;


//mongo atlas online 
//extension vscode