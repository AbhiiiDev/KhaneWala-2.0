const { MongoServerClosedError } = require('mongodb');
const mongoose=require('mongoose');
require('dotenv').config();
const MONGO_URI="mongodb+srv://vermaabhii387:abhishek123@cluster0.ddjgelb.mongodb.net/KhaneWala";

const connectDatabase=async()=>
{  
mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(
    async()=>{
        console.log(`mongodb connected succesfully`);

       const db=mongoose.connection.db;
       const fetcheData=await db.collection("foodItems").find({}).toArray();
    global.foodItem=fetcheData;
    
    const foodCategory=await db.collection("food_Category").find({}).toArray();
    global.foodCategory=foodCategory;
    // console.log(global.foodItem,foodCategory);
    }





).catch(
    error=>{
        console.log(`database connection error`,error);
    }
)    
}
module.exports=connectDatabase;