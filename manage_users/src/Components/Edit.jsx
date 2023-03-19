import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Table } from "react-bootstrap";
import Users from "./Users";
import { useNavigate } from "react-router-dom";

const Edit = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [group, setGroup] = useState("");
    const[id,setId] = useState("")
    let navigate = useNavigate();

    var index = Users.map(function (e) {
        return e.id;
      }).indexOf(id);

      const handleSubmit = (e)=>{
        e.preventDefault()
            let a = Users[index]
            a.name = name
            a.email = email
            a.group = group
      
        navigate("/")
     }
     useEffect(()=>{
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
        setGroup(localStorage.getItem("group"))
        setId(localStorage.getItem("id"))


     },[])
  
  return (
    <div>
          <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Control
              type="text"
              required
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control
              type="text"
              required
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroup">
            <Form.Control
              type="text"
              placeholder="Enter Your Group"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button onClick={(e)=> handleSubmit(e)} type="submit">UPDATE</Button>
        </Form>
    </div>
  )
}

export default Edit
