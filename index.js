console.log("okk")
const express=require('express');
const app=express();
app.get('/a',(req,res)=>{
    console.log(req.query)
    console.log(req.query.std1)
    res.json({
        'std1': req.query.std1
    })
})

require('dotenv').config();

const PORT=process.env.PORT;
app.listen(PORT,function(){
    console.log(`this is server running on port ${PORT}`);
});