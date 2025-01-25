const { default: mongoose } = require("mongoose")
const moongoose=require("mongoose")

const Schema=mongoose.Schema()

const blogSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true

    },
    body:{
        type:String,
        required:true

    }
},{timestamps:true})

const Blog=mongoose.Model('Blog',blogSchema)

module.exports=Blog;