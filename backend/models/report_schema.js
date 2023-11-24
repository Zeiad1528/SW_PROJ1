const mongoose = require('mongoose');
//Import the Ticket model
const Ticket = require('./tickets'); 
const user = require('./userSchema'); 
const agent = require('./agent_schema'); 

//Import the Automated model model
//const Automated = require('./Automated'); 
const Schema = mongoose.Schema


const ReportSchema = new Schema({


    ResolutionTime: 
    {
        type: Date,

    },


  Ticketstatus: 
    {
        type: String,

            type: mongoose.Schema.Types.ObjectId(),
                ref: "Ticket",
                required: true,
                default : open,
                select: 'Status',
            
        required: true,

    },





   AgentPerformance: 

    {
        
        type: Number,

            type: mongoose.Schema.Types.ObjectId(),
            ref: "Agent", 
            required: true,
            select: 'Performance', 

        required: true,
        
    },




   UserRatings:

    {

          type: Number,

            type: mongoose.Schema.Types.ObjectId(),
            ref: "Agent",  
            required: true,
            select: 'Rating', 

        required: true,

    },




})

    module.exports = mongoose.model('Report', ReportSchema);
    module.exports.Schema = ReportSchema;   