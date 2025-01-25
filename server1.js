let express=require("express")

let app=express()

app.listen(3000)

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