import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from "react-bootstrap";
import Users from "./Users";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  const handleEdit = (id,name,email,group)=>{
     localStorage.setItem("name",name)
     localStorage.setItem("email",email)
     localStorage.setItem("group",group)
     localStorage.setItem("id",id)

  }
  const handleDelete = (id) => {
    var index = Users.map(function (e) {
      return e.id;
    }).indexOf(id);

    Users.splice(index, 1);
    navigate("/");
  };
  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
         <h1>Manage Users</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Groups</th>
            </tr>
          </thead>
          <tbody>
            {Users && Users.length > 0
              ? Users.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.group}</td>
                      <td>
                        <Button onClick={() => handleDelete()}>Delete</Button>
                      </td>
                      <td>
                        <Link to="/edit">
                          
                          <Button
                            onClick={() =>
                              handleEdit(
                                item.id,
                                item.name,
                                item.email,
                                item.group
                              )
                            }
                          >
                            EDIT
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  );
                })
              : "No Data Found"}
          </tbody>
        </Table>
        <br />
        <Link className="d-grid gap-2" to="/create">
          <Button size="lg">ADD</Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
