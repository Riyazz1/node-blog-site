let express=require("express")
const mongoose =require("mongoose")
const Blog=require("./models/blog_data")
let app=express()

const dburi2 = "mongodb://127.0.0.1:27017/node-blog";

mongoose.connect(dburi2)
    .then((result) => app.listen(3000))
    .catch((err) => console.error('MongoDB connection error:', err));
  

mongoose.set('debug', true);

app.set("view engine","ejs")

app.use(express.static("views"));
// app.use(express.urlencoded())



app.get("/blog",(req,res)=>{
    // const blogs=[
    //     {title:"my bloog" , snippet:"this is the snippet", body:"bodyyyyyyy for my blog"},
    // ]
    Blog.find()
        .then((result)=>{
            res.render("blog",{blogs:result})
        })
        
    // res.render("blog",{title:"home",blogs})
})

app.post("/blog",(req,res)=>{
    const blog=new Blog(req.body)
    blog.save()
        .then((result)=>{
            res.redirect("/blog")
        })
    

})

app.get("/new_blog",(req,res)=>{

    
    res.render("new_blog" )
})
app.use((req,res)=>{
    res.render("404")
})