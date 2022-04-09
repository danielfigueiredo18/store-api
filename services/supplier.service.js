import SupplierRepository from "../repositories/supplier.repository.js";

async function createSupplier(supplier){
    return await SupplierRepository.insertSupplier(supplier);
}

async function getSuppliers(){
    return await SupplierRepository.getSuppliers();
}

async function getSupplier(supplier_id){
    return await SupplierRepository.getSupplier(supplier_id);
}

async function updateSupplier(supplier){
    return await SupplierRepository.updateSupplier(supplier);
}

async function deleteSupplier(supplier_id){
    await SupplierRepository.deleteSupplier(supplier_id);
}


export default {
    createSupplier,
    getSuppliers,
    getSupplier,
    updateSupplier,
    deleteSupplier
}