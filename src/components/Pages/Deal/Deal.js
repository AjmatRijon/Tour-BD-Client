import React, { useEffect, useState } from "react";
import "./Deal.css";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { Card } from "react-bootstrap";
import Title from "../../Header/HeroSection/Title";

const Deal = () => {
  const [location, setLocation] = useState({});
  const { id } = useParams();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
    //   console.log(data)
      fetch('https://afternoon-brook-23950.herokuapp.com/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(result => {
            if (result.insertedId) {
                alert('Bookings processed Successfully');
                reset();
            }
        })
  };
  useEffect(() => {
    const url = `https://afternoon-brook-23950.herokuapp.com/location/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLocation(data));
  }, []);
  return (
      <>
         <Title name="Get Your Ticket"></Title>
    <div className="d-md-flex justify-content-center align-items-center">
      <div className="mx-3 overflow-hidden">
      <Card style={{ width: "22rem" }}>
          <Card.Img style={{ height: "250px" }} variant="top" src={location.img}/>
          <Card.Body>
            <Card.Title>{location.name}</Card.Title>
            <Card.Text>
              
            </Card.Text>
            <Card.Title>${location.price}</Card.Title>
          </Card.Body>
        </Card></div>
      <div className="mx-3">
          {/* <h2>Get Your Ticket</h2> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName")} defaultValue={user?.displayName} />
          <input {...register("email")} defaultValue={user?.email} />
          <input {...register("destination")} defaultValue={location?.name} />
          {errors.destination && <>This field is required</>}
          <input {...register("Gender", { required: true })} placeholder="gender" />
          {errors.Gender && <>This field is required</>}
          <input {...register("Phone", { required: true })} placeholder="phone number" />
          {errors.Phone && <>This field is required</>}
          <input {...register("Date", { required: true })}placeholder="Date"/>
          {errors.Date && <>This field is required</>} <br/>
          <input className="btn btn-danger" type="submit" />
        </form>
      </div>
    </div>
    </>
  );
};

export default Deal;
