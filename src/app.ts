import express, { Request, Response } from "express";
import categoriesRouter from "./routes/categories.route";
import productsRouter from "./routes/products.route";
import tenantsRouter from "./routes/tenants.route";
import usersRouter from "./routes/users.router";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use("/tenants", tenantsRouter);
app.use("/users", usersRouter);

export default app;