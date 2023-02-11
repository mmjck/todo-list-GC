import TodoItem from "../TodoItem/";
import { ListGroup, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/axios.js";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchNotes() {
      try {
        const { data } = await api.get("/todo");
        console.log(data);
        let listTodoDo = data.filter((todo) => todo.isDone !== true);
        console.log(listTodoDo);
        setTodos(listTodoDo);
      } catch (error) {
        console.log(error);
      }
    }
    fetchNotes();
  }, []);

  const filterTodos = todos.filter((todo) => todo.title.includes(filter));

  async function setAsDone(e, id) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await api.put(`todo/${id}`, { isDone: true });
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>TodoApp</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </Form>
          <div>
            <Button onClick={() => navigate("/create")} variant="primary">
              +
            </Button>
          </div>
        </div>
      </div>
      <ListGroup style={{ marginTop: "2rem" }}>
        {filterTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setAsDone={setAsDone} />
        ))}
      </ListGroup>
    </div>
  );
}

export default TodoList;
