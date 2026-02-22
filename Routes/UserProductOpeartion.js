const Routers=require("express").Router()
const controller=require("../controller/UserProductOpeartion")

Routers.post("/",controller.Addtocart)
Routers.post("/Addtocarts",controller.Addtocarts)



exports.Routers=Routers