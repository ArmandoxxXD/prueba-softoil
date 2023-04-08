import { Router } from "express";
import { getAlumnos } from "../controllers/alumnosController.js";

const router= Router();

router.get("/alumno", getAlumnos);

export default router;