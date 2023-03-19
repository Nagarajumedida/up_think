import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Table } from "react-bootstrap";
import Users from "./Users";
import { useNavigate } from "react-router-dom";
const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [group, setGroup] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (e)=>{
     e.preventDefault()

     const ids = uuid()
     let uniqueId = ids.slice(0,8);

     let a = name,b=email,c=group
     Users.push({id:uniqueId,name:a,email:b,group:c})
     navigate("/")
  }
  return (
    <div>
      <div>
        <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Control
              type="text"
              required
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control
              type="text"
              required
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroup">
            <Form.Control
              type="text"
              placeholder="Enter Your Group"
              onChange={(e) => setGroup(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button onClick={(e)=> handleSubmit(e)} type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default Add;
