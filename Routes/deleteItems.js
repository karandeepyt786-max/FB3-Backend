const Routers=require("express").Router()
const controller=require("../controller/deleteItems")

Routers.post("/Product/:id",controller.deleteProduct)
Routers.post("/Cart/:id",controller.deleteCart)
Routers.post("/Order/:id",controller.deleteOrders)




exports.Routers=Routers