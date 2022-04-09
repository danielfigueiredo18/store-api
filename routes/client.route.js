import express from "express";
import ClientController from "../controllers/client.controller.js";

const router = express.Router();

router.post("/", ClientController.createClient)

router.get("/", ClientController.getClients)

router.get("/:client_id", ClientController.getClient)

router.put("/", ClientController.updateClient)

router.delete("/:client_id", ClientController.deleteClient)

export default router;