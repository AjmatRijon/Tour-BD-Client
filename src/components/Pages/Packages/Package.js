import React from "react";
import { Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Package = ({deal}) => {
    const {name,price,img,_id} = deal;
  return (
    <div>
      <>
        <Card style={{ width: "22rem" }}>
          <Card.Img style={{ height: "250px" }} variant="top" src={img}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              
            </Card.Text>
            <Card.Title>${price}</Card.Title>
            
            <Link to={`/alldeals/deal/${_id}`}><Button variant="danger">Book Now</Button></Link>
          </Card.Body>
        </Card>
      </>
    </div>
  );
};

export default Package;
