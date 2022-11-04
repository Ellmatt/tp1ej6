import { Button, Card, Col,  Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarColorApi, consultarApi } from "../helpers/queris";

const Item = (props) => {

  
  const borrarColor = () => {
    Swal.fire({
      title: "Esta seguro de eliminar este producto?",
      text: "No se puede revertir este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar!",
      cancelButtonText: "Cancelar!",
    }).then((result) => {
      if (result.isConfirmed) {
      
        borrarColorApi(props.id._id).then((respuesta) => {
          if (respuesta.status === 200) {
     
            consultarApi().then((respuesta) => {
              props.setColor(respuesta);
            });
            Swal.fire("Borrado!", "Su producto a sido borrado!", "success");
          } else {
            Swal.fire(
              "Se produjo un error",
              "intente realizar esta operacion en otro momento!",
              "error"
            );
          }
        });
      }
    });
  };
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
            <Card className="color" style={{background: props.nombreColor}}></Card>
          </Col>
          
          <Col lg={12} className="d-flex justify-content-end mt-5">
            {/* siempre para agregar funcion con parametro por props se debe agregar funcion en forma de flecha */}
            <Button variant="warning" onClick={borrarColor}>Borrar</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
   
  );
};

export default Item;
