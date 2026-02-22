const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const UserModel=require("../modules/users")


exports.CreateUser = async (req, res) => {
 
const fin=await UserModel.findOne({ Email:req.body.Email})
if(fin ){
res.send("already exist")
// console.log("alreay exist")
}
else{
  // console.log("not exist")
  const token=await jwt.sign({email:req.body.Email},"p")
  // console.log("token is ",token)
  try{
    await bcrypt.genSalt(10,function(err,salt){
     return bcrypt.hash(req.body.Password,salt,async function(err,hash){
       const User=await UserModel.create({
         Email:req.body.Email,
    Password:hash,
    ProfileImage:req.file?req.file.filename:"defaultprofile.jpg",
  
    token:token
  }
  
)

res.cookie("token", token, { httpOnly: true})           //,maxAge:10000 for timing login
// console.log("user cookie is ",req.cookies)
res.status(201).send(User)
})
})


}
catch(err){
  res.status(404).send("not Created")
}
}
};


exports.LoginUser=async(req,res)=>{
// console.log(req.body)
const fin=await UserModel.findOne({ Email:req.body.Email})
 let token1=await fin.token
if(fin){
//  console.log("find Email")
const findp=await bcrypt.compare(req.body.Password,fin.Password)
if(findp){
  // console.log("pass find")
try{
 
  res.cookie("token",token1,{httpOnly:true})
  res.send("login success")
  // console.log("cookie set login")
}
catch(err){
  // console.log(("cookir not login ",err))
}
}
else{
  // console.log("pass not find")
}
}
else{
  // console.log("not find")
}

}

exports.isAuhtnticated=async(req,res)=>{

if(req.body.op=="op"){

  res.cookie("token","")
}
let token=req.cookies.token

  if(token){
    let results=jwt.verify(token,"p")
  
    // console.log("email of result",results.Email)
    const data=await  UserModel.findOne({token:token})
res.send({data:data.ProfileImage,result:"Authenticated",Email:data.Email})
    // console.log("user with token",data)
  }
else{
  res.send("Not Authenticated")
}

}


exports.findAllUsers=async(req,res)=>{
const user=await UserModel.findOne({Email:req.body.data.Email})
res.send(user)
console.log("rb ",req.body)
// console.log("req.body is ",req.body.data.Email)
// console.log("new users is ",user)
}

exports.findOneUser=async(req,res)=>{

console.log("rb ",req.body.Email)

const Users=await UserModel.findOne({Email:req.body.Email})
const Carts=Users.Carts
res.send(Carts)
// console.log(Carts)
// console.log(Users)
}


exports.NewProfile=async(req,res)=>{
  
  // const userinfo=await user.updateOne( {Password:{$gt:90}} , {$set:{Password:444}} )
  try{
  const userre=await UserModel.findOneAndUpdate({Email:req.body.islogged},{$set:{ProfileImage:req.file.filename}},{new:true})
    // console.log("chnaged user",userinfo)
    console.log("real user",userre)
  }
  catch(err){
    console.log("chnaged error ",err)
  }

 console.log("in newprofile",req.body)
 console.log("in newprofile file",req.file)

}



















// console.log("body is ",req.body)
// console.log("file is ",req.file)

// const token1="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhsbyIsImlhdCI6MTc2ODEwMTc5MH0.yu4fqpaA1gYUpWc7WrsQHg_-fZM_FWuJ_t7SLQ_WCio"
// const resul=jwt.verify(token1,"p") -->if after this the line sends the email in output then login
// console.log("resi is ",resul)

// const ress=await bcrypt.compare("pass","$2b$10$k7QL8ix/VvM3QxtfhSwRMO.hNpcC1OPOkJIT89LsKxCgC43x0xR4i")  
// console.log(ress)

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhsbyIsImlhdCI6MTc2ODEwMTc5MH0.yu4fqpaA1gYUpWc7WrsQHg_-fZM_FWuJ_t7SLQ_WCio
  

// const fin=await UserModel.findOne({ Email:req.body.Email})
// if(fin){
//  console.log("find Email")
// const findp=await bcrypt.compare(req.body.Password,fin.Password)
// if(findp){
//   console.log("pass find")
// }
// else{
//   console.log("pass not find")
// }
// }
// else{
//   console.log("not find")
// }