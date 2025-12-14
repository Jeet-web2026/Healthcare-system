import http from "http";
import app from "./app.js";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

dotenv.config();
await connectDb();

const server = http.createServer(app);
const Port = process.env.PORT;

server.listen(Port);
