import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../../services/axios";

function TodoCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const todo = { title, description, isDone: false };
    console.log(todo);
    try {
      await api.post("todo", todo);
      console.log("cadastrado com sucesso");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Título</Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descrição</Form.Label>
        <Form.Control
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <Button onClick={handleSubmit} variant="primary">
        Enviar
      </Button>
    </Form>
  );
}

export default TodoCreate;
