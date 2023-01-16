import mongoose from "mongoose";

export function connect(db: string) {
    mongoose.connect(db);
}

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Mongodb connection error:"));

export default db;
