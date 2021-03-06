import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import upload from "./config/upload";
import createConnection from "./database";
import AppError from "./errors/AppError";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(express.json());

app.use("/documents", express.static(`${upload.tmpFolder}/documents`));

createConnection();
app.use(cors({}));
app.use(routes);

// TODO: Aplicar inversão de dependência para errors vindos dos módulos
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        console.error(err);

        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                status: "error",
                message: err.message,
            });
        }

        return response.status(500).json({
            status: "error",
            message: `Internal Server Error: ${err.message}`,
        });
    }
);

app.listen(3333, () => {
    console.log("Server running on port 3333! ✌");
});
