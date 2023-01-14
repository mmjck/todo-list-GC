import express from "express";
import todoController from '../controllers/todo'



const router = express.Router();


router.get("/", (req, res) => {
    res.send("Hello World Back")
});



router.get("/todo", todoController.index);

router.get("/todo/:id", todoController.read);
router.delete("/todo/:id", todoController.remove);
router.put("/todo/:id", todoController.update);
router.post("/todo", todoController.create);


export default router;