import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Container from "react-bootstrap/Container";
import TodoCreate from "./components/TodoCreate/";
import TodoDetails from "./components/TodoDetails";
import Sobre from "./components/Sobre";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<TodoList />}></Route>
          <Route path="/create" element={<TodoCreate />}></Route>
          <Route path="/todo/:id" element={<TodoDetails />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
