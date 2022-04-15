import Client from "../models/client.model.js";

async function insertClient(client){
    try{
        return await Client.create(client)
    }catch(err){
        throw err;
    }
}

async function getClients(){
    try{
        return await Client.findAll();
    }catch(err){
        throw err;
    }
}

async function getClient(client_id){
    try{
        return await Client.findByPk(client_id)
    }catch(err){
        throw err;
    }
}

async function updateClient(client){
    try{
        await Client.update(client, {
            where: {
                clientId: client.clientId
            }
        });
        return await getClient(client.clientId);
    }catch(err){
        throw err;
    }
}

async function deleteClient(client_id){
    try{
        await Client.destroy({
            where: {
                clientId: client_id
            }
        });
    }catch(err){
        throw err;
    }
}

export default {
    insertClient,
    getClient,
    getClients,
    updateClient,
    deleteClient
}