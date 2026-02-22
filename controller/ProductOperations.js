const ProductModule=require("../modules/Products")

exports.readAllProduct = async (req, res) => {
const Product=await ProductModule.find().sort({ProductPrice:-1})
res.send(Product)
};
