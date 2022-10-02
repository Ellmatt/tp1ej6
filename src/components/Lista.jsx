import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Item from "./Item";


const Lista = (props) => {
  return (
    <ListGroup>
      {props.arregloColor.map((color, posicion) => (
        <Item key={posicion} nombreColor={color} borrarColor={props.borrarColor}></Item>
      ))}
    </ListGroup>
  );
};

export default Lista;
