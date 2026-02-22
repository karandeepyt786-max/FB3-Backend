const ProductModule=require("../modules/Products")
const UserModule=require("../modules/users")

exports.deleteProduct=async(req,res)=>{
    console.log(req.params.id)
try{
   const de= await ProductModule.deleteOne({ProductName:req.params.id}) 
   console.log("deleted")
}
catch(err){
    console.log("delete err",err)
}
}

exports.deleteCart=async(req,res)=>{
    console.log(req.params.id)
    console.log(req.body)
const pn=req.params.id

try{
     const result=await UserModule.updateOne(
        {Email:req.body.user},
        {$pull:{Carts:{ProductName:req.params.id}}}
    )

console.log("delted")
    }
    catch(err){
        console.log(err)
    }
}

exports.deleteOrders=async(req,res)=>{
console.log(req.body)
console.log(req.params)

try{
const chnag=await UserModule.updateOne({Email:req.body.user},{$pull:{Cart:{ProductName:req.params.id}}})
console.log("deleted")
}
catch(err){
    console.log("error",err)
}
}