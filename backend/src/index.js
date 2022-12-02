import express from "express";
import routes from "./routes"
import middlewares from './middlewares'
const app = express();

const PORT = process.env.PORT || 3333;

app.use(routes);
app.use(middlewares("tiny"));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});