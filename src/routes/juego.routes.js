import { Router } from "express";
import { listarJuegos } from "../controllers/juego.controllers.js";

const router = Router();

router.route("/juego").get((listarJuegos))

export default router;