import path from "path";
import express from "express";
import api from "./api";
import dotenv from "dotenv";

dotenv.config();
const CLIENT = path.resolve(process.env.CLIENT || process.exit(1));
const PORT = process.env.PORT;

const app = express();

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
