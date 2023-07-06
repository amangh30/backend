import express from "express"
import { random } from "../controllers/random.js";
var router = express.Router();


router.post("/play",random)

export default router;