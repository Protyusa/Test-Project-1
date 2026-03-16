const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

let emails = []

app.post("/add-email", (req,res)=>{
    const email = req.body.email

    if(!email){
        return res.status(400).json({message:"Email required"})
    }

    emails.push(email)

    res.json({
        message:"Email added",
        emails:emails
    })
})

app.get("/emails",(req,res)=>{
    res.json(emails)
})

app.listen(5000,()=>{
    console.log("Backend running on port 5000")
})
