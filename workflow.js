const mongoose = require('mongoose');
const Schema = mongoose.Schema

const workflowSchemas = new Schema({
   
    userid: {
        type:Number,
        required: true
      },
      issue: {
        type: String,
        issueType: {
          type: mongoose.Schema.Types.ObjectId(),
          ref: "sub_issues",
          required: true,
          select: 'issueType'
         },
      issueSol: {
        sub_issues: {
          type: [String],
          validate: {
            validator: function() {
              switch (this.issueType) {
                case 'Desktops':
                  return '';
                case 'Laptops':
                  return '';
                case 'Printers':
                  return '';
                case 'Servers':
                  return '';
                case 'Networking equipment':
                  return '';
                case 'Operating system':
                  return '';
                case 'Application software':
                  return '';
                case 'Custom software':
                  return '';
                case 'Integration issues':
                  return '';
                case 'Email issues':
                  return '';
                case 'Internet connection problems':
                  return '';
                case 'Website errors':
                  return '';
                default:
                  return true; // Other issue types are allowed to have any sub-issues
              }
            }
          }
      }
      },
      priority: {
        type: Number,
        required: true
      },
      agentId: {
        type: Number,
        required: true
      },
        mainIssue:{
          type: mongoose.Schema.Types.ObjectId(),
          ref: "ticketSchema",
          required: true,
          select: 'mainIssue'
         },
      
      availability: {
      type: [String],
          validate: {
            validator: function() {
              switch (this.mainIssue) {
                case 'hardware':
                  return ('Agent2');
                case 'software':
                  return ('Agent1');
                case 'network':
                  return ('Agent3');
  
          }}}}},
      routing: {
        type: String,
        required: true
        
      },
      
})
const Workflow = mongoose.model('Workflow', workflowSchemas);
module.exports = Workflow;
