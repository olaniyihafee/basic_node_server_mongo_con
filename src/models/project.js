const mongoose =  require("mongoose");

const Schema = mongoose.Schema;

const testingSchema = new Schema({
    projectname: String,
    startdate: String,
    enddate: String,
    tastks: [ [Object], [Object] ]
})

const Testing = mongoose.model('testing', testingSchema);

module.exports = Testing;  


/* const subtaskSchema = new Schema({
    subtastks: {
        subtaskname: String,
        startdate: String,
        enddate: String,
        days: { type: [String], },
        times: { type: [String], },
    }, 
})

const taskSchema = new Schema({
    tastks: {
        taskname: String,
        startdate: String,
        enddate: String,
        days: { type: [String], },
        times: { type: [String], },
        
        subtastks: subtaskSchema
    },
})

const projectSchema = new Schema({
    projectname: String,
    startdate: String,
    enddate: String,

    tastks: taskSchema 
})

const project = mongoose.model('User', projectSchema);

module.exports = project;  */


