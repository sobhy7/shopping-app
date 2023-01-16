import express from "express";
import login_router from "./login.js";

const api = express.Router();

api.use(login_router);

export default api;
