const express=require('express');
const connectDatabase = require('./config/database');
const port=5000;
const cors=require('cors');


const app=express();
app.use(cors());

connectDatabase();
app.use(express.json());
app.get('/',(req,res)=>
{
    res.send("yeah , the backend setup correctly")
})
app.use('/api',require('./routes/displayData'));
app.use('/api',require('./routes/createUser'));
app.listen(port,()=>{
    console.log(`server is listening at port${port}`)
})

module.exports=app;