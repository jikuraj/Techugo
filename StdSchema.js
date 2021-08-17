const mongoose=require('mongoose');

let studentSchema=new mongoose.Schema({
    StdName:{type:String},
    StdAdd:{type:String},
    Stdemail:{type:String}
});

module.exports=mongoose.model("StdDetails",studentSchema);