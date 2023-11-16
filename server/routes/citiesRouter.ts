import express from "express";
import { createCity, deleteCity } from "../controllers/cityController";

const cityRouter = express.Router();

cityRouter.post("/create", createCity)
cityRouter.post("/delete", deleteCity)


export default cityRouter