let mongoose= require("mongoose");
let taskschema = mongoose.Schema({
  taskname: {
    type:String,
    required:true
  },
  taskdesc: {
    type:String,
    required:true
  },
  assignedto: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"users",
    required:true
  },
  assignedby: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"users",
    required:true
  },
  duedate: {
    type:Date,
    required:true
  },
  status: {
    type:String,
    enum:["Pending", "In Progress", "Completed"],
    default:"Pending"   
  }
},{
    timestamps:true
})
const task=mongoose.model('tasks',taskschema);
module.exports={task}