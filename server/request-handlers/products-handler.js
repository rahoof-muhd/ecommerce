import cartSchema from "../models/cart.schema.js";
import productsModel from "../models/products.schema.js";

export async function addProduct(req, res) {
    try {
        let { itemname, price, description, category, products } = req.body;
        console.log(req.body);
        let { userId, username } = req.user;
        // let { products } = req.files;
        // thumbnail = thumbnail[0].filename;
        // products = products?.map(item => item.filename);
        await productsModel.create({
            sellerId: userId,
            sellerName: username,
            itemname,
            price,
            description,
            products,
            category,
        })
        return res.status(201).json({
            msg: "Product Added"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error occured!"
        })
    }
}

export async  function getProducts(req,res) {
    try {
        let result = await productsModel.find();
        res.json(result)
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error occured!"
        })
    }
}

export async function addCart(req, res) {
    try{
        let{count,id } =req.body;
        console.log(req.body);
        let{username}= req.user;
        await cartSchema.create({
            username,
            Pid:id,
            count
        })
        return res.status(201).json({
            msg: "Product Added"
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            msg: "Error occured!"
        })
    }
    }



export async function getCart(req, res) {
    let cart = await cartSchema.find();
    let pId = cart.map(item => item.Pid);
    let count = cart.map(item => item.count)
    let products = await productsModel.find({ _id: { $in: pId}});
    res.json({products,count});
    console.log(products,count);
}