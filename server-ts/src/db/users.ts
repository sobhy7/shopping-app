import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: {
        first: String,
        last: String,
    },
});

const users = mongoose.model("users", usersSchema);

export default users;
