import express from "express";
import path from "path";

const app = express();
const PORT = 6969;

const client_path = path.resolve(path.join(__dirname, "..", "..", "client", "build"));

app.use(express.static(client_path))

export { app, PORT, client_path };
