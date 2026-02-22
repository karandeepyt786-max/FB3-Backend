const Routers=require("express").Router()
const controller=require("../controller/Product")

const path=require("path")

const multer = require('multer')
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,"../public/images/uploads"))
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+""+file.originalname)
    }
})

const upload=multer({storage})




Routers.post("/ProductCreate",upload.single("image"),controller.ProductCreate)



exports.Routers=Routers