const Routers=require("express").Router()
const controller=require("../controller/Home")

Routers.get("/",controller.Home)

exports.Routers=Routers