import express from "express";
import SupplierController from "../controllers/supplier.controller.js";

const router = express.Router();

router.post("/", SupplierController.createSupplier)

router.get("/", SupplierController.getSuppliers)

router.get("/:supplierId", SupplierController.getSupplier)

router.put("/", SupplierController.updateSupplier)

router.delete("/:supplierId", SupplierController.deleteSupplier)

export default router;