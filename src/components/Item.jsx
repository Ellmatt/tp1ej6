import { Button, Card, Col,  Row } from "react-bootstrap";

const Item = (props) => {
  let color = props.nombreColor
  return (
 
    <Card className="w-25">
      <Card.Body className="my-3 ">
        <Row>
          {/* {props.nombreColor} */}
          {/* onClick={()=>props.borrarColor(props.nombreColor)} */}
          <Col lg={12} className="fs-4 mb-5">
            {props.nombreColor}
          </Col>
          <Col lg={12} className="d-flex justify-content-center">
            <Card className="color" style={{background: color}}></Card>
          </Col>
          
          <Col lg={12} className="d-flex justify-content-end mt-5">
            {/* siempre para agregar funcion con parametro por props se debe agregar funcion en forma de flecha */}
            <Button variant="warning" onClick={()=>props.borrarColor(props.nombreColor)}>Borrar</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
   
  );
};

export default Item;
