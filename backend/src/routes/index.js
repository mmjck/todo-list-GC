import express from "express";
import todoController from '../controllers/todo'



const router = express.Router();


router.get("/", (req, res) => {
    res.send("Hello World Back")
});

router.post("/", todoController.create);

export default router;