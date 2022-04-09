import {connect} from "./db.js";

async function insertSupplier(supplier){
    const conn = await connect();
    try{
        const sql = "INSERT INTO suppliers(name, cnpj, phone, email, address) VALUES ($1, $2, $3, $4, $5) RETURNING *";
        const values = [supplier.name, supplier.cnpj, supplier.phone, supplier.email, supplier.address];

        const res = await conn.query(sql, values);

        return res.rows[0];
    } catch(err){
        throw err;
    } finally{
        conn.release();
    }   
}

async function getSuppliers(){
    const conn = await connect();
    try{
        const res = await conn.query("select * from suppliers");
        return res.rows
    } catch(err){
        throw err;
    } finally{
        conn.release();
    }   
}

async function getSupplier(supplier_id){
    const conn = await connect();
    try{
        const res = await conn.query("select * from suppliers where supplier_id = $1", [supplier_id]);
        return res.rows[0]
    } catch(err){
        throw err;
    } finally{
        conn.release();
    }   
}

async function updateSupplier(supplier){
    const conn = await connect();
    try{
        const sql = "update suppliers set name = $1, cnpj = $2, phone = $3, email = $4, address = $5 where supplier_id = $6 RETURNING *";
        const values = [supplier.name, supplier.cnpj, supplier.phone, supplier.email, supplier.address, supplier.supplier_id];

        const res = await conn.query(sql, values);

        return res.rows[0];
    } catch(err){
        throw err;
    } finally{
        conn.release();
    }   
}

async function deleteSupplier(supplier_id){
    const conn = await connect();
    try{
        const res = await conn.query("delete from suppliers where supplier_id = $1", [supplier_id]);
    } catch(err){
        throw err;
    } finally{
        conn.release();
    }   
}

export default {
    insertSupplier,
    getSupplier,
    getSuppliers,
    updateSupplier,
    deleteSupplier
}