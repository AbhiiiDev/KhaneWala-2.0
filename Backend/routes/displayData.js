const express=require('express');
const router=express.Router();

router.post("/foodData",(req,res)=>
{ 
    try {
        res.send([global.foodItem,global.foodCategory]);
    } catch (error) {
        console.error(error.message);
        res.send('server error');
    }
})
module.exports=router;