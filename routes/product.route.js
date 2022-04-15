import express from "express";
import ProductController from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", ProductController.createProduct)

router.get("/", ProductController.getProducts)

router.get("/:productId", ProductController.getProduct)

router.put("/", ProductController.updateProduct)

router.delete("/:productId", ProductController.deleteProduct)

export default router;