import { Router } from "express";
import { generateCSV } from "../controllers/generateCSV.js";

export const csvRouter = Router();

csvRouter.get("/generate-csv",generateCSV)