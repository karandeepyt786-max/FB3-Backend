
const Routers=require("express").Router()
const controller=require("../controller/ProductsByCategory")





Routers.get("/Getdata/:id",controller.Grocery)




exports.Routers=Routers
