import express from "express";
import SaleController from "../controllers/sale.controller.js";

const router = express.Router();

router.post("/", SaleController.createSale)

router.get("/", SaleController.getSales)

router.get("/:sale_id", SaleController.getSale)

router.put("/", SaleController.updateSale)

router.delete("/:sale_id", SaleController.deleteSale)

export default router;