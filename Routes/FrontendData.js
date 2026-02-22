const Routers=require("express").Router()
const controller=require("../controller/FrontendData")

Routers.get("/NavNames",controller.SendNavNames)
Routers.get("/SendHomeNavImages",controller.SendHomeNavImages)




exports.Routers=Routers