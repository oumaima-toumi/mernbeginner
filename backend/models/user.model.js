const mongoose = require ('mongoose')
userSchema = new mongoose.Schema( {
    name:{type:String, required:true},
    number:{type:String, required:true}
},{timestamps:true})

module.exports =mongoose.model('contacts',userSchema)