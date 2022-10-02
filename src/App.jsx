import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import Formulario from "./components/Formulario";

function App() {
  return (
    <Container>
      <h1 className="text-center">Administrar colores</h1>
      <br />
      <Formulario></Formulario>
    </Container>
  );
}

export default App;
