import SaleRepository from "../repositories/sale.repository.js";
import ClientRepository from "../repositories/client.repository.js";
import ProductRepository from "../repositories/product.repository.js";

async function createSale(sale){
    let error = "";
    let product = await ProductRepository.getProduct(sale.product_id);
    if(!await ClientRepository.getClient(sale.client_id)){
        error = "O client_id informado não existe.";
    }
    if(!product){
        error += "O product_id informado não existe.";
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

async function getSales(product_id){
    if(product_id){
        return await SaleRepository.getSalesByProductId(product_id);
    }
    return await SaleRepository.getSales();
}

async function getSale(sale_id){
    return await SaleRepository.getSale(sale_id);
}

async function updateSale(sale){
    let error = "";
    let product = await ProductRepository.getProduct(sale.product_id);
    if(!await ClientRepository.getClient(sale.client_id)){
        error = "O client_id informado não existe.";
    }
    if(!product){
        error += "O product_id informado não existe.";
    }
    if(error){
        throw new Error(error);
    }
    return await SaleRepository.updateSale(sale);
}

async function deleteSale(sale_id){
    const sale = await SaleRepository.getSale(sale_id);
    if(sale){
        let product = await ProductRepository.getProduct(sale.product_id);
        await SaleRepository.deleteSale(sale_id);
        product.stock++;
        await ProductRepository.updateProduct(product);
    }else{
        throw new Error("O sale_id informado não existe.")
    }
}


export default {
    createSale,
    getSales,
    getSale,
    updateSale,
    deleteSale
}