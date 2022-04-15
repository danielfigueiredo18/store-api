import Supplier from "../models/supplier.model.js";

async function insertSupplier(supplier){
    try{
        return await Supplier.create(supplier)
    }catch(err){
        throw err;
    }
}

async function getSuppliers(){
    try{
        return await Supplier.findAll();
    }catch(err){
        throw err;
    }
}

async function getSupplier(supplier_id){
    try{
        return await Supplier.findByPk(supplier_id);
    }catch(err){
        throw err;
    }
}

async function updateSupplier(supplier){
    try{
        await Supplier.update(supplier, {
            where: {
                supplierId: supplier.supplierId
            }
        });
        return await getSupplier(supplier.supplierId);
    }catch(err){
        throw err;
    }
}

async function deleteSupplier(supplier_id){
    try{
        await Supplier.destroy({
            where: {
                supplierId: supplier_id
            }
        });
    }catch(err){
        throw err;
    }
}

export default {
    insertSupplier,
    getSupplier,
    getSuppliers,
    updateSupplier,
    deleteSupplier
}