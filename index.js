import express from "express"
const app = express()


app.get("/", (req, res) => {
    res.status(200)
    res.end("<div><p>Hello Sachin Welcome to Devops !<p></div>");
})

//Starting server at 4000
app.listen(4000, ()=>{
    console.log("Server has started.")

})
