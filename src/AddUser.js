import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { dividerClasses } from "@mui/material";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",  
    phone: "",
    website: ""
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/userlist");
  };
  return (
      <>
      <Header/>
      <Sidebar/>
      <div className="container">
      <h1> Add Users...</h1>
    <div className="container-fluid mt-3 ">
      <div className="card w-75 mx-auto shadow p-3  ">
        <h4 className=" heading text-center mb-4 ">Add a user</h4>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg shadow"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-4">
            <input
              type="text"
              className="form-control form-control-lg shadow"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-4">
            <input
              type="email"
              className="form-control form-control-lg shadow"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-4">
            <input
              type="text"
              className="form-control form-control-lg shadow"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-4">
            <input
              type="text"
              className="form-control form-control-lg shadow"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="text-center">
          <button className="btn btn-dark mt-2 text-">Add User</button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default AddUser;
