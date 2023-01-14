import express from "express";
import morgan from 'morgan';
import routes from "./routes"

import middlewares from './middlewares'
const app = express();
const logger = morgan('combined')

const PORT = process.env.PORT || 3333;

app.use(express.json());

app.use(routes);
app.use(middlewares("tiny"));
app.use(logger)


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});