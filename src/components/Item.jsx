import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";

const Item = () => {
  return (
    <Card>
    <ListGroup.Item className="my-5">
      <Row>
        {/* {props.nombreColor} */}
        {/* onClick={()=>props.borrarColor(props.nombreColor)} */}
        <Col lg={12}>tarea de prueba</Col>
        <Col lg={12}>
          <Button variant="danger">Borrar</Button>
        </Col>
      </Row>
    </ListGroup.Item>
    
    </Card>
   
  );
};

export default Item;
