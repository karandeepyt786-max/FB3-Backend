const ProductModule=require("../modules/Products")


exports.Grocery=async(req,res)=>{
console.log(req.params)
    try{
        const pro=await ProductModule.find({Category:req.params.id})
        res.send(pro)
    }
    catch(err){
        console.log(err)
    }
}
