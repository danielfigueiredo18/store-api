import {connect} from "./db.js";

async function insertSale(sale){
    const conn = await connect();
    try{
        const sql = "INSERT INTO sales(value,date, client_id, product_id) VALUES ($1, $2, $3, $4) RETURNING *";
        const values = [sale.value, sale.date, sale.client_id, sale.product_id];

        const res = await conn.query(sql, values);

        return res.rows[0];
    } catch(err){
        throw err;
    } finally{
        conn.release();
    }   
}

async function getSales(){
    const conn = await connect();
    try{
        const res = await conn.query("select * from sales");
        return res.rows
    } catch(err){
        throw err;
    } finally{
        conn.release();
    }   
}

async function getSalesByProductId(product_id){
    const conn = await connect();
    try{
        const res = await conn.query("select * from sales where product_id = $1", [product_id]);
        return res.rows
    } catch(err){
        throw err;
    } finally{
        conn.release();
    }   
}

async function getSale(sale_id){
    const conn = await connect();
    try{
        const res = await conn.query("select * from sales where sale_id = $1", [sale_id]);
        return res.rows[0]
    } catch(err){
        throw err;
    } finally{
        conn.release();
    }   
}

async function updateSale(sale){
    const conn = await connect();
    try{
        const sql = "update sales set value = $1, date = $2, client_id = $3 where sale_id = $4 RETURNING *";
        const values = [sale.value, sale.date, sale.client_id, sale.sale_id];

        const res = await conn.query(sql, values);

        return res.rows[0];
    } catch(err){
        throw err;
    } finally{
        conn.release();
    }   
}

async function deleteSale(sale_id){
    const conn = await connect();
    try{
        const res = await conn.query("delete from sales where sale_id = $1", [sale_id]);
    } catch(err){
        throw err;
    } finally{
        conn.release();
    }   
}

export default {
    insertSale,
    getSale,
    getSales,
    updateSale,
    deleteSale,
    getSalesByProductId
}