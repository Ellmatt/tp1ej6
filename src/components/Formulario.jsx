import Lista from "./Lista";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { consultarApi, crearColorApi } from "../helpers/queris";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const Formulario = () => {
  const [color, setColor] = useState([]);

  useEffect(() => {
    consultarApi().then((respuesta) => {
      setColor(respuesta);
    });
  }, []);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      nombreTarea: "",
    },
  });
  // const navegacion = useNavigate();

  const onSubmit = (datos) => {
    crearColorApi(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        consultarApi().then((respuesta) => {
          setColor(respuesta);
        });
        Swal.fire(
          "Producto creado",
          "El producto a sido creado correctamente",
          "success"
        );
        reset();
      } else {
        Swal.fire("Ocurrio un error", "Vuelva a intentarlo más tarde", "error");
      }
      // window.location.reload();
    });
  };

  return (
    <Card>
      <Form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        <Row>
          <Col lg={4} className="d-flex justify-content-center">
            <Card className="color" style={{ background: color }}></Card>
          </Col>

          <Col lg={8}>
            <Form.Group className="d-flex my-4 me-5 ">
            
              <Form.Control
                type="text"
                placeholder="Ingrese un Color"
                {...register("nombreColor", {
                  required: "Este dato es obligatorio",
                  minLength: {
                    value: 2,
                    message: "Debe ingresar como minimo 2 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "Debe ingresar como maximo 20 caracteres",
                  },
                })}
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

      <Lista color={color} setColor={setColor}></Lista>
    </Card>
  );
};

export default Formulario;
