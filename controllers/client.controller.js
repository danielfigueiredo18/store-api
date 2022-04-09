import ClientService from "../services/client.service.js";

async function createClient(req,res,next){
    try{
        let client = req.body;
        if(!client.name || !client.cpf || !client.phone || !client.email || !client.address){
            throw new Error("Name, CPF, Phone, Email e Address são obrigatórios.")
        }
        res.send(await ClientService.createClient(client));
        logger.info(`POST /client - ${JSON.stringify(client)}`)
    }catch(err){
        next(err);
    }
}

async function getClients(req,res,next){
    try{
        res.send(await ClientService.getClients());
        logger.info("GET /client");
    }catch(err){
        next(err);
    }
}

async function getClient(req,res,next){
    try{
        res.send(await ClientService.getClient(req.params.client_id));
        logger.info("GET /client");
    }catch(err){
        next(err);
    }
}

async function updateClient(req,res,next){
    try{
        let client = req.body;
        if(!client.client_id || !client.name || !client.cpf || !client.phone || !client.email || !client.address){
            throw new Error("Client_id, Name, CPF, Phone, Email e Address são obrigatórios.")
        }
        res.send(await ClientService.updateClient(client));
        logger.info(`PUT /client - ${JSON.stringify(client)}`)
    }catch(err){
        next(err);
    }
}

async function deleteClient(req,res,next){
    try{
        await ClientService.deleteClient(req.params.client_id);
        res.end();
        logger.info("DELETE /client");
    }catch(err){
        next(err);
    }
}

export default {
    createClient,
    getClients,
    getClient,
    updateClient,
    deleteClient
}