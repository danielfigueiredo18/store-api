import ClientRepository from "../repositories/client.repository.js";

async function createClient(client){
    return await ClientRepository.insertClient(client);
}

async function getClients(){
    return await ClientRepository.getClients();
}

async function getClient(client_id){
    return await ClientRepository.getClient(client_id);
}

async function updateClient(client){
    return await ClientRepository.updateClient(client);
}

async function deleteClient(client_id){
    await ClientRepository.deleteClient(client_id);
}


export default {
    createClient,
    getClients,
    getClient,
    updateClient,
    deleteClient
}