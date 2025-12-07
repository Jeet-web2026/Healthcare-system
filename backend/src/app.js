import express from "express";
import cors from "cors";
import authRoute from "./routes/authRoute.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoute);

export default app;
