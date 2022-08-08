import express, { Request, Response } from "express";

const tenantsRouter = express.Router();

tenantsRouter.get("/", (req: Request, res: Response) => {
  res.send("Find all tenants");
});

export default tenantsRouter;
