const UserModel=require("../modules/users")

exports.Addtocart=async(req,res)=>{

    let productid=req.body.product._id
    const {ProductName,ProductPrice,ProductRating,ProductDiscount,Productfile,Productqty,Category}=req.body.product
const user=await UserModel.findOne({Email:req.body.AddtocartEmail}) 
console.log("Email is ",user)

try{

const findp=await user.Cart.find((item)=>(item.productid==productid))

if(findp){
    console.log("findp success not add")

 
}

else{
       await user.Cart.push({productid:productid,
        ProductName:ProductName,
        ProductPrice:ProductPrice,
        ProductRating:ProductRating,
        ProductDiscount:ProductDiscount,
        Productfile:Productfile,
        Productqty:Productqty,
        Category:Category
       })

      
user.save()
console.log("addtocart success")
console.log("findp failed but added")
}
res.send(user)

}
catch(err){
    console.log("addtocart err ",err)
}
console.log(req.body)
console.log(productid)
}








exports.Addtocarts=async(req,res)=>{
console.log("from carts",req.body)

    let productid=req.body.product._id
    const {ProductName,ProductPrice,ProductRating,ProductDiscount,Productfile,Productqty,Category}=req.body.product
const user=await UserModel.findOne({Email:req.body.AddtocartEmail}) 
console.log("Email is ",user)

try{

const findp=await user.Carts.find((item)=>(item.productid==productid))

if(findp){
    console.log("findp success not add")

 
}

else{
       await user.Carts.push({productid:productid,
        ProductName:ProductName,
        ProductPrice:ProductPrice,
        ProductRating:ProductRating,
        ProductDiscount:ProductDiscount,
        Productfile:Productfile,
        Productqty:Productqty,
        Category:Category
       })

      
user.save()
console.log("addtocart success")
console.log("findp failed but added")
}
res.send(user)

}
catch(err){
    console.log("addtocart err ",err)
}
console.log(productid)
}