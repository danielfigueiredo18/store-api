import ProductRepository from "../repositories/product.repository.js";
import SupplierRepository from "../repositories/supplier.repository.js";

async function createProduct(product){
    if(await SupplierRepository.getSupplier(product.supplier_id)){
        return await ProductRepository.insertProduct(product);
    }
    throw new Error("O supplier_id informado não existe.")
}

async function getProducts(){
    return await ProductRepository.getProducts();
}

async function getProduct(product_id){
    return await ProductRepository.getProduct(product_id);
}

async function updateProduct(product){
    if(await SupplierRepository.getSupplier(product.supplier_id)){
        return await ProductRepository.updateProduct(product);
    }
    throw new Error("O supplier_id informado não existe.")
}

async function deleteProduct(product_id){
    await ProductRepository.deleteProduct(product_id);
}


export default {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}