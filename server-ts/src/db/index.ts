import mongoose from "mongoose";

const mongodb = process.env.DATABASE;
if (mongodb == undefined) {
    console.error(`[ERROR] Failed to connent to DB`)
    process.exit(1);
}

mongoose.connect(mongodb);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Mongodb connection error:"));

export default db;
