import express from "express";
import morgan from "morgan";
import routes from "./routes";
import cors from "cors";

import middlewares from "./middlewares";
const app = express();
app.use(cors());
const logger = morgan("combined");

app.use(express.json());

app.use(routes);
// app.use(middlewares("tiny"));
app.use(logger);

// export default app

module.exports = app;
