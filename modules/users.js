const mongoose=require("mongoose")

try{
    const coonection=mongoose.connect("mongodb://localhost:27017/RealProject")
    console.log("DB connection success")
}

catch(err){
    console.log("DB connection error is ",err)
}

const UserSchema=new mongoose.Schema({
    Email:{type:String,required:true,unique:true},
    Password:{type:String,required:true},
    ProfileImage:{type:String},
    token:{type:String},
    Cart:[
        {    productid:{type:mongoose.Schema.Types.ObjectId,ref:"Product"},
             ProductName:{type:String,required:true},
             ProductPrice:{type:Number,required:true},
             ProductRating:{type:Number,default:0},
             ProductDiscount:{type:Number},
             ProductTime:{type:Date,default:Date.now()},
             Productfile:{type:String},
             Productqty:{type:Number},
             Category:{type:String}
}
        
    ],
    Carts:[
        {    productid:{type:mongoose.Schema.Types.ObjectId,ref:"Product"},
             ProductName:{type:String,required:true},
             ProductPrice:{type:Number,required:true},
             ProductRating:{type:Number,default:0},
             ProductDiscount:{type:Number},
             ProductTime:{type:Date,default:Date.now()},
             Productfile:{type:String},
             Productqty:{type:Number},
             Category:{type:String}
}
        
    ]

})

module.exports=mongoose.model("User",UserSchema)