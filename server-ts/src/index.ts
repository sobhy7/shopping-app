import dotenv from "dotenv";
dotenv.config();

import path from "path";
import express from "express";
import api from "./api";
import bodyParser from "body-parser";
import { connect } from "./db";

const CLIENT = path.resolve(process.env.CLIENT || process.exit(1));
const PORT = process.env.PORT;

// connect to database
const DATABASE = process.env.DATABASE || process.exit(1);
connect(DATABASE);

const app = express();

// body-parser
app.use(bodyParser.json());

// api
app.use("/api", api);

// serve client app
app.use(express.static(CLIENT));

app.get("/*", (_, res) => {
    res.sendFile(path.join(CLIENT, "index.html"));
});

app.listen(PORT, () => {
    console.log(`Listenning on ":${PORT}"`);
});
