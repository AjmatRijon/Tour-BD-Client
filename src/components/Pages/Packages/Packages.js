import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {Row, Container, Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Title from "../../Header/HeroSection/Title";
import Package from "./Package";
import "./Package.css"

const Packages = () => {
  const [deals, setDeals]=useState([]);
  useEffect(()=>{
    fetch('https://afternoon-brook-23950.herokuapp.com/location')
    .then(res=> res.json())
    .then(data=> setDeals(data))
  },[])
  const { isLoading } = useAuth();
  if (isLoading) {
      return <div className='d-flex align-items-center justify-content-center'><Spinner  animation="border" variant="danger" /></div> 
  };
    // console.log(deals);
  return (
    <div>
      <Container>
      <Row xs={1} md={3} className="g-4">
            {
               deals.map(deal=><Package deal={deal} key={deal._id}></Package>)
            }
            </Row>
      </Container>
    </div>
  );
};

export default Packages;
