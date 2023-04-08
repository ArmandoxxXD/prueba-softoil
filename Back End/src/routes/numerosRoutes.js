import { Router } from "express";
import { postNumeros,getNumeros } from "../controllers/numerosController.js";

const router= Router();

router.post("/numeros", postNumeros);
router.get("/numeros", getNumeros);

export default router;
