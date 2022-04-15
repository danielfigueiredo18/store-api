import express from "express";
import SaleController from "../controllers/sale.controller.js";

const router = express.Router();

router.post("/", SaleController.createSale)

router.get("/", SaleController.getSales)

router.get("/:saleId", SaleController.getSale)

router.put("/", SaleController.updateSale)

router.delete("/:saleId", SaleController.deleteSale)

export default router;