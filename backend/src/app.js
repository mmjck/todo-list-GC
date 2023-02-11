import express from "express";
import morgan from 'morgan';
import routes from "./routes"

import middlewares from './middlewares'
const app = express();
// const logger = morgan('combined')


app.use(express.json());

app.use(routes);
// app.use(middlewares("tiny"));
// app.use(logger)

// export default app

module.exports = app