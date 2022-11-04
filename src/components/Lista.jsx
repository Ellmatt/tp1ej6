import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Item from "./Item";


const Lista = (props) => {
  return (
    <ListGroup>
      {props.color.map((color, _id) => (
        <Item key={_id} nombreColor={color.nombreColor} setColor={props.setColor} id={color}></Item>
      ))}
    </ListGroup>
  );
};

export default Lista;
