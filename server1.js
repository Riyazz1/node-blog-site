let express=require("express")
const mongoose =require("mongoose")

let app=express()

const dburi="mongodb+srv://Riyazz1:Riyazz@123@cluster0.yrtw5.mongodb.net/node-blog?retryWrites=true&w=majority"
const dburi1='mongodb://host1:27017,host2:27017,host3:27017/<dbname>?replicaSet=<replicaSetName>&authSource=admin&retryWrites=true&w=majority'
mongoose.connect(dburi1)

mongoose.connect(dburi1)
  .then(() => app.listen(3000))
  .catch(err => console.error('MongoDB connection error:', err));

mongoose.set('debug', true);

app.set("view engine","ejs")

app.use(express.static("views"));

app.get("/blog",(req,res)=>{
    const blogs=[
        {title:"my bloog" , snippet:"this is the snippet", body:"bodyyyyyyy for my blog"},
        {title:"my bloog2" , snippet:"this is the snippet2", body:"bodyyyyyyy for my blog2"},
        {title:"my bloog3" , snippet:"this is the snippet3", body:"bodyyyyyyy for my blog3"},
        {title:"my bloog4" , snippet:"this is the snippet4", body:"bodyyyyyyy for my blog4"}
    ]
        
    res.render("blog",{title:"home",blogs})
})

app.get("/new_blog",(req,res)=>{

    
    res.render("new_blog" )
})
app.use((req,res)=>{
    res.render("404")
})