


const Routers=require("express").Router()
const controller=require("../controller/User")

const path=require("path")
const multer=require("multer")

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,"../public/images/ProfileImages"))
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname)
    }
})

const uploads=multer({storage})


Routers.post("/",uploads.single("pimage"),controller.CreateUser)
Routers.post("/NewProfile",uploads.single("pimage"),controller.NewProfile)
Routers.post("/LoginUser",controller.LoginUser)
Routers.post("/IsAuth",controller.isAuhtnticated)
Routers.post("/findAllUsers",controller.findAllUsers)
Routers.post("/findOneUser",controller.findOneUser)





exports.Routers=Routers