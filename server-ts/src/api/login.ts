import express from "express";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import users from "../db/users.js";

const router = express.Router();

const JWT_KEY = process.env.JWT_KEY;
if (JWT_KEY == undefined) {
    console.error("[ERROR] JWT_KEY is undefined");
    process.exit(1);
}

interface ReqBody {
    username: string;
    password: string;
}

router.post("/login", async (req, res) => {
    const body: ReqBody = req.body;

    users.deleteMany();
    const user = await users.findOne(body);
    if (user == null) {
        res.json({
            error: "invalid username/passoword",
        });
        return;
    }

    const token = jwt.sign({ username: body.username }, JWT_KEY);

    const session_cookie = cookie.serialize("token", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        secure: true,
    });

    res.setHeader("Set-Cookie", session_cookie);
    res.statusCode = 200;
    res.end();
});

export default router;
