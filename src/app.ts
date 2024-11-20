import express, { Application, Request, Response } from "express";
import cors from "cors"
import { StudentRoutes } from "./app/students/student.router";
const app: Application = express();


// parser
app.use(express.json());
app.use(cors())

// Student Router 
app.use('/api/v1/students', StudentRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
