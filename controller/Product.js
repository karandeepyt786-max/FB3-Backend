const ProductModule=require("../modules/Products.js")

exports.ProductCreate = async (req, res) => {
const fin=await ProductModule.findOne({ProductName:req.body.ProductName})
if(fin){
    console.log("find")
}
else{
   try{
    const Product=await ProductModule.create({
        ProductName:req.body.ProductName,
ProductPrice:req.body.ProductPrice,
ProductRating:req.body.ProductRating,
ProductDiscount:req.body.ProductDiscount,
Category:req.body.Category,
Productfile:req.file.filename
    })
    console.log("created product is ",Product)
    // console.log("body is ",req.body)
}
catch(err){
    console.log("error is ",err)
}   
}



console.log("body is ",req.body)
console.log("file is ",req.file)
};
