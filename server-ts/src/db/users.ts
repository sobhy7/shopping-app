import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: {
        first: { type: String, required: true },
        last: { type: String, required: true },
    },
});

const users = mongoose.model("users", usersSchema);

export default users;
