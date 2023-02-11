import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<TodoList />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
