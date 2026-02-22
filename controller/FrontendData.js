const fs=require("fs")
const path=require("path")



exports.SendNavNames=(req,res)=>{
    let NavNames={"NavNames":[
       {name:"Home",path:"/"} ,
       {name:"About",path:"About"},
       {name:"Services",path:"Services"},
       {name:"Contact",path:"Contact"},
       {name:"Menu",path:"Menu"},
       {name:"Order",path:"Order"},
       {name:"Cart",path:"Cart"},
       {name:"CreateProducts",path:"CreateProducts"},
       {name:"Products",path:"Products"},
       {name:"CreateUser",path:"CreateUser"},
       {name:"Signing",path:"Signing"},
    ],
        "Logo":"logoname"
    }
    res.send(NavNames)
}
 
exports.SendHomeNavImages=(req,res)=>{
  const Namearr=["Grocery","Mobiles","Toys","Laptops","Clothes","Shoes","Cars"]
  const HomeNavImagespath=path.join(__dirname,"../public/images/HomeNavImages/images/iconpics")
fs.readdir(HomeNavImagespath,"utf-8",(err,data)=>{
  if(err){console.log("error is ",err)}
  res.send({images:data,Names:Namearr})
})

}

