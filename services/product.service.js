import ProductRepository from "../repositories/product.repository.js";
import SupplierRepository from "../repositories/supplier.repository.js";
import SaleRepository from "../repositories/sale.repository.js";

async function createProduct(product){
    if(await SupplierRepository.getSupplier(product.supplierId)){
        return await ProductRepository.insertProduct(product);
    }
    throw new Error("O supplierId informado não existe.")
}

async function getProducts(){
    return await ProductRepository.getProducts();
}

async function getProduct(productId){
    return await ProductRepository.getProduct(productId);
}

async function updateProduct(product){
    if(await SupplierRepository.getSupplier(product.supplierId)){
        return await ProductRepository.updateProduct(product);
    }
    throw new Error("O supplier_id informado não existe.")
}

async function deleteProduct(productId){
    const sales = await SaleRepository.getSalesByProductId(productId);
    if(sales.length > 0){
        throw new Error("Não é possíuvel excluir o produto pois ele possui vendas.")
    }
    await ProductRepository.deleteProduct(productId);
}


export default {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}