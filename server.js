const express = require('express')



const app=express()


 app.use(express.json())
 app.use(express.urlencoded({extended:true}))


 app.get('/',(req,res)=>{
     res.send('Hello World')
 })


const PORT=3000
app.listen(PORT,()=>{
    console.log(`{server running on port ${3000}`);
    
})