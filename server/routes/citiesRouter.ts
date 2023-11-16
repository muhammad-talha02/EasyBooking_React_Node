import express from "express";
import { createCity, deleteCity, getAllCities } from "../controllers/cityController";

const cityRouter = express.Router();

cityRouter.post("/create", createCity)
cityRouter.delete("/delete", deleteCity)
cityRouter.get("/", getAllCities)


export default cityRouter