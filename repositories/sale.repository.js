import Sale from "../models/sale.model.js";
import Product from "../models/product.model.js";
import Client from "../models/client.model.js";

async function insertSale(sale){
    try{
        return await Sale.create(sale);
    } catch(err){
        throw err;
    }   
}

async function getSales(){
    try{
        return await Sale.findAll({
            include: [{
                model: Product
            },{
                model: Client
            }]            
        });
    } catch(err){
        throw err;
    } 
}

async function getSalesByProductId(productId){
    try{
        return await Sale.findAll({
            where: {
                productId
            },
            include: [{
                model: Product
            },{
                model: Client
            }]   
        });
    } catch(err){
        throw err;
    }   
}

async function getSalesBySupplierId(supplierId){
    try{
        return await Sale.findAll({
            include: [{
                model: Product,
                where:{
                    supplierId
                }
            },{
                model: Client
            }]   
        });
    } catch(err){
        throw err;
    }   
}

async function getSale(sale_id){
    try{
        return await Sale.findByPk(sale_id);
    } catch(err){
        throw err;
    } 
}

async function updateSale(sale){
    try{
        await Sale.update(
            {
                value: sale.value,
                date: sale.date,
                clientId: sale.clientId
            }, {
                where: {
                    saleId: sale.saleId
                }
            }
        );
        return await getSale(sale.saleId);
    } catch(err){
        throw err;
    }   
}

async function deleteSale(saleId){
    try{
        await Sale.destroy({
            where:{
                saleId
            }
        });
    } catch(err){
        throw err;
    } 
}

export default {
    insertSale,
    getSale,
    getSales,
    updateSale,
    deleteSale,
    getSalesByProductId,
    getSalesBySupplierId
}