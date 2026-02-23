const express=require("express")
const app=express()

const cors=require("cors")
const cookiepar=require("cookie-parser")

app.use(cors({ origin: "https://fb-3-1-ozfy.vercel.app/", credentials: true }))
app.use(express.json())
app.use(express.urlencoded({extended:true,sameSite: "none", secure: true}))
app.use(cookiepar())

app.use("/HomeNavImages",express.static("./public/images/HomeNavImages/images/iconpics"))
app.use("/uploads",express.static("./public/images/uploads"))
app.use("/Profileuploads",express.static("./public/images/ProfileImages"))


app.use("/",require("./Routes/Home").Routers)
app.use("/FrontendData",require("./Routes/FrontendData").Routers)
app.use("/Product",require("./Routes/Product").Routers)
app.use("/ProductOperations",require("./Routes/ProductOperations").Routers)
app.use("/UserProductOpeartion",require("./Routes/UserProductOpeartion").Routers)

app.use("/User",require("./Routes/User").Routers)
app.use("/Delete",require("./Routes/deleteItems").Routers)
app.use("/ProductsByCategory",require("./Routes/ProductsByCategory").Routers)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
