import http from "http";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const server = http.createServer(app);
const Port = process.env.PORT;

server.listen(Port);
