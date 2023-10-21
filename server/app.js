import express from "express"


export const app = express()

// Middlerwares

app.use(express.json())
app.get("/", (req, res)=>{
    res.status(200).json({
        success:true,
        message:"Server is working"
    })
})