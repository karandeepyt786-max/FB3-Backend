
const Routers=require("express").Router()
const controller=require("../controller/ProductOperations")





Routers.get("/",controller.readAllProduct)



exports.Routers=Routers