import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import api from "../../services/axios";

function TodoDetails() {
  const [todo, setTodo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchNote() {
      try {
        const { data } = await api.get(`/todo/${id}`);
        setTodo(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchNote();
  }, [id]);

  async function setAsDone() {
    try {
      await api.put(`todo/${id}`, { isDone: true });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{todo.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {moment(todo.createdAt).format("HH:MM ddd/yyy")}
        </Card.Subtitle>
        <Card.Text>{todo.description}</Card.Text>
        <Card.Link href="#" onClick={setAsDone}>
          Done!
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default TodoDetails;
