
import {ToDo} from "../models"

const index = async(req, res) => { 
    try {

        const todos = await ToDo.findAll();
        res.status(200).json(todos);

    } catch (error) {
        res.status(500).json({"message":"something is wrong"});
    }
}
const create = async (req, res) => {
    try {
        console.log(req.body);
        const todo = await ToDo.create(req.body);
        return res.status(201).json(todo)
    } catch (error) {
        res.status(500);
    }
}
const read = async  (req, res) => {
    try {
        const {id} = req.params;

        const todo = await ToDo.findOne({where: {
            id
        }});
        return res.status(200).json(todo)
    } catch (error) {
        res.status(500);
    }
}
const update = async  (req, res) => {
    try {
        const {id} = req.params;

        await ToDo.update(req.body, {where: {
            id
        }});

        const todo = await ToDo.findOne({where: {
            id
        }})
        console.log(todo);
        return res.status(200).json(todo)
    } catch (error) {
        res.status(500);
    }
}
const remove = async(req, res) => {
    const { id } = req.params;
  try {
    await ToDo.destroy({ where: { id } });
    res.json({ msg: 'Item has be destroyed' });
  } catch (error) {
    res.status(500).json(error);
  }
}

export default {index, create, read, update, remove}