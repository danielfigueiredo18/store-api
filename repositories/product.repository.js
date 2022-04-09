import {connect} from "./db.js";

async function insertProduct(product){
    const conn = await connect();
    try{
        const sql = "INSERT INTO products(name, description, value, stock, supplier_id) VALUES ($1, $2, $3, $4, $5) RETURNING *";
        const values = [product.name, product.description, product.value, product.stock, product.supplier_id];

        const res = await conn.query(sql, values);

        return res.rows[0];
    } catch(err){
        throw err;
    } finally{
        conn.release();
    }   
}

async function getProducts(){
    const conn = await connect();
    try{
        const res = await conn.query("select * from products");
        return res.rows
    } catch(err){
        throw err;
    } finally{
        conn.release();
    }   
}

async function getProduct(product_id){
    const conn = await connect();
    try{
        const res = await conn.query("select * from products where product_id = $1", [product_id]);
        return res.rows[0]
    } catch(err){
        throw err;
    } finally{
        conn.release();
    }   
}

async function updateProduct(product){
    const conn = await connect();
    try{
        const sql = "update products set name = $1, description = $2, value = $3, stock = $4, supplier_id = $5 where product_id = $6 RETURNING *";
        const values = [product.name, product.description, product.value, product.stock, product.supplier_id, product.product_id];

        const res = await conn.query(sql, values);

        return res.rows[0];
    } catch(err){
        throw err;
    } finally{
        conn.release();
    }   
}

async function deleteProduct(product_id){
    const conn = await connect();
    try{
        const res = await conn.query("delete from products where product_id = $1", [product_id]);
    } catch(err){
        throw err;
    } finally{
        conn.release();
    }   
}

export default {
    insertProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
}