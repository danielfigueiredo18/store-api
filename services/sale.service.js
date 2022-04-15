import SaleRepository from "../repositories/sale.repository.js";
import ClientRepository from "../repositories/client.repository.js";
import ProductRepository from "../repositories/product.repository.js";

async function createSale(sale){
    let error = "";
    let product = await ProductRepository.getProduct(sale.productId);
    if(!await ClientRepository.getClient(sale.clientId)){
        error = "O clientId informado não existe.";
    }
    if(!product){
        error += "O productId informado não existe.";
    }
    if(error){
        throw new Error(error);
    }
    if(product.stock > 0){
        sale = await SaleRepository.insertSale(sale);
        product.stock--;
        await ProductRepository.updateProduct(product);
        return sale;
    }else{
        throw new Error("O produto informado não possui estoque.");
    }
}

async function getSales(productId, supplierId){
    if(productId){
        return await SaleRepository.getSalesByProductId(productId);
    }
    if(supplierId){
        return await SaleRepository.getSalesBySupplierId(supplierId);
    }
    return await SaleRepository.getSales();
}

async function getSale(saleId){
    return await SaleRepository.getSale(saleId);
}

async function updateSale(sale){
    let error = "";
    let product = await ProductRepository.getProduct(sale.productId);
    if(!await ClientRepository.getClient(sale.clientId)){
        error = "O clientId informado não existe.";
    }
    if(!product){
        error += "O productId informado não existe.";
    }
    if(error){
        throw new Error(error);
    }
    return await SaleRepository.updateSale(sale);
}

async function deleteSale(saleId){
    const sale = await SaleRepository.getSale(saleId);
    if(sale){
        let product = await ProductRepository.getProduct(sale.productId);
        await SaleRepository.deleteSale(saleId);
        product.stock++;
        await ProductRepository.updateProduct(product);
    }else{
        throw new Error("O saleId informado não existe.")
    }
}


export default {
    createSale,
    getSales,
    getSale,
    updateSale,
    deleteSale
}