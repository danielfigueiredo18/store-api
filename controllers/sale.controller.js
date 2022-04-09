import SaleService from "../services/sale.service.js";

async function createSale(req,res,next){
    try{
        let sale = req.body;
        if(!sale.value || !sale.date || !sale.client_id || !sale.product_id){
            throw new Error("Value, Date, Client_id e Product_id são obrigatórios.")
        }
        res.send(await SaleService.createSale(sale));
        logger.info(`POST /sale - ${JSON.stringify(sale)}`)
    }catch(err){
        next(err);
    }
}

async function getSales(req,res,next){
    try{
        res.send(await SaleService.getSales(req.query.product_id));
        logger.info("GET /sale");
    }catch(err){
        next(err);
    }
}

async function getSale(req,res,next){
    try{
        res.send(await SaleService.getSale(req.params.sale_id));
        logger.info("GET /sale");
    }catch(err){
        next(err);
    }
}

async function updateSale(req,res,next){
    try{
        let sale = req.body;
        if(!sale.sale_id || !sale.value || !sale.date || !sale.client_id || !sale.product_id){
            throw new Error("Sale_id, Value, Date, Client_id e Product_id são obrigatórios.")
        }
        res.send(await SaleService.updateSale(sale));
        logger.info(`PUT /sale - ${JSON.stringify(sale)}`)
    }catch(err){
        next(err);
    }
}

async function deleteSale(req,res,next){
    try{
        await SaleService.deleteSale(req.params.sale_id);
        res.end();
        logger.info("DELETE /sale");
    }catch(err){
        next(err);
    }
}

export default {
    createSale,
    getSales,
    getSale,
    updateSale,
    deleteSale
}