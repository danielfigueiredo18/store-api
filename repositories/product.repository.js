import Product from "../models/product.model.js";

async function insertProduct(product){
    try{
        return await Product.create(product)
    }catch(err){
        throw err;
    }
}

async function getProducts(){
    try{
        return await Product.findAll();
    }catch(err){
        throw err;
    }
}

async function getProduct(product_id){
    try{
        return await Product.findByPk(product_id)
    }catch(err){
        throw err;
    }
}

async function updateProduct(product){
    try{
        await Product.update(product, {
            where: {
                productId: product.productId
            }
        });
        return await getProduct(product.productId);
    }catch(err){
        throw err;
    }
}

async function deleteProduct(product_id){
    try{
        await Product.destroy({
            where: {
                productId: product_id
            }
        });
    }catch(err){
        throw err;
    }
}

export default {
    insertProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
}