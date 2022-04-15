import SaleService from "../services/sale.service.js";

async function createSale(req,res,next){
    try{
        let sale = req.body;
        if(!sale.value || !sale.date || !sale.clientId || !sale.productId){
            throw new Error("Value, Date, ClientId e ProductId são obrigatórios.")
        }
        res.send(await SaleService.createSale(sale));
        logger.info(`POST /sale - ${JSON.stringify(sale)}`)
    }catch(err){
        next(err);
    }
}

async function getSales(req,res,next){
    try{
        res.send(await SaleService.getSales(req.query.productId, req.query.supplierId));
        logger.info("GET /sale");
    }catch(err){
        next(err);
    }
}

async function getSale(req,res,next){
    try{
        res.send(await SaleService.getSale(req.params.saleId));
        logger.info("GET /sale");
    }catch(err){
        next(err);
    }
}

async function updateSale(req,res,next){
    try{
        let sale = req.body;
        if(!sale.saleId || !sale.value || !sale.date || !sale.clientId || !sale.productId){
            throw new Error("saleId, Value, Date, clientId e productId são obrigatórios.")
        }
        res.send(await SaleService.updateSale(sale));
        logger.info(`PUT /sale - ${JSON.stringify(sale)}`)
    }catch(err){
        next(err);
    }
}

async function deleteSale(req,res,next){
    try{
        await SaleService.deleteSale(req.params.saleId);
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