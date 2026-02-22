const mongoose=require("mongoose")

try{
    const coonection=mongoose.connect("mongodb://localhost:27017/RealProject")
    console.log("DB connection success")
}

catch(err){
    console.log("DB connection error is ",err)
}

const ProductSchema=new mongoose.Schema({
ProductName:{type:String,required:true},
ProductPrice:{type:Number,required:true},
ProductRating:{type:Number,default:0},
ProductDiscount:{type:Number},
ProductTime:{type:Date,default:Date.now()},
Productfile:{type:String},
Productqty:{type:Number,default:1},
Category:{type:String}

})

module.exports=mongoose.model("Product",ProductSchema)