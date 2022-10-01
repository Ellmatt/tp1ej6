import Lista from "./Lista";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

const Formulario = () => {
  //     // aqui va los datos del ls
  const coloresLS= JSON.parse(localStorage.getItem('arregloColorKey')) || []

  // // aqui va el state
  const [color, setColor] = useState("");
  const [arregloColor, setArregloColor] = useState(coloresLS);

  // ciclo de vida
  useEffect(()=>{
    // el codigo asi escrito solo sirve para el montaje y desmontaje
   // console.log('prueba de ciclo de vida del componente')
    // guardar en Ls
    localStorage.setItem('arregloColorKey', JSON.stringify(arregloColor))
  }, [arregloColor])

  const handleSubmit = (e) => {
    e.preventDefault();
    // no se puede usar el push con el state
    // los 3 puntos son el operador spred
    setArregloColor([...arregloColor, color]);
    // limpiar el imput
    setColor('');
  };
  const borrarColor = (nombre)=>{
    let arregloModificado = arregloColor.filter((item)=>(item !== nombre))
    // actualizo el state
    setArregloColor(arregloModificado)
}

  return (
    <Card>
      <Form onSubmit={handleSubmit} className="mt-5">
        <Row>
          <Col lg={4} className='d-flex justify-content-center'>
            <Card className="color"></Card>
          </Col>

          <Col lg={8}>
            <Form.Group className="d-flex my-4 me-5 ">
              {/* <Card className="color "></Card> */}
              <Form.Control
                type="text"
                placeholder="Ingrese un Color"
                onChange={(e)=>setColor(e.target.value)}
                value={color}
              ></Form.Control>
            </Form.Group>
          </Col>

          <Col className="d-flex my-5 me-5 justify-content-end">
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Col>
        </Row>
      </Form>
      
      <Lista arregloColor={arregloColor} borrarColor={borrarColor}></Lista>
      
    </Card>
  );
};

export default Formulario;
