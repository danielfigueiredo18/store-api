import {connect} from "./db.js";

async function insertClient(client){
    const conn = await connect();
    try{
        const sql = "INSERT INTO clients(name, cpf, phone, email, address) VALUES ($1, $2, $3, $4, $5) RETURNING *";
        const values = [client.name, client.cpf, client.phone, client.email, client.address];

        const res = await conn.query(sql, values);

        return res.rows[0];
    } catch(err){
        throw err;
    } finally{
        conn.release();
    }   
}

async function getClients(){
    const conn = await connect();
    try{
        const res = await conn.query("select * from clients");
        return res.rows
    } catch(err){
        throw err;
    } finally{
        conn.release();
    }   
}

async function getClient(client_id){
    const conn = await connect();
    try{
        const res = await conn.query("select * from clients where client_id = $1", [client_id]);
        return res.rows[0]
    } catch(err){
        throw err;
    } finally{
        conn.release();
    }   
}

async function updateClient(client){
    const conn = await connect();
    try{
        const sql = "update clients set name = $1, cpf = $2, phone = $3, email = $4, address = $5 where client_id = $6 RETURNING *";
        const values = [client.name, client.cpf, client.phone, client.email, client.address, client.client_id];

        const res = await conn.query(sql, values);

        return res.rows[0];
    } catch(err){
        throw err;
    } finally{
        conn.release();
    }   
}

async function deleteClient(client_id){
    const conn = await connect();
    try{
        const res = await conn.query("delete from clients where client_id = $1", [client_id]);
    } catch(err){
        throw err;
    } finally{
        conn.release();
    }   
}

export default {
    insertClient,
    getClient,
    getClients,
    updateClient,
    deleteClient
}