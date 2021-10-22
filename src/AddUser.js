import React, { useState } from 'react'
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const AddUser = () => {
    const [userRegistration, setUserRegistration] = useState({
        Fullname: "",
        email: "",
        phone: "",
        password: ""
    });

    const [records, setRecords] = useState([])
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setUserRegistration({ ...userRegistration, [name]: value })

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ...userRegistration, id: new Date().getTime.toString() }
        console.log(records);
        setRecords([...records, newRecord])
        console.log(records);
        setUserRegistration({ Fullname: "", email: "", phone: "", password: "" })

    }



    return (
        <>

        <Header/>
        <Sidebar/>
            <div className="container">
            <h1>Add User...</h1>
                <div className="card p-5 shadow-lg">
                    <div className="content-wrapper p-3">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="card-body">

                                <div className="row">
                                    <div className="form col-md-6">
                                        <label htmlFor="Fullname">Fullname</label>
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Enter Full name"
                                            value={userRegistration.Fullname}
                                            onChange={handleInput}
                                            name="Fullname" id="Fullname" />

                                    </div>
                                    <div className="form col-md-6">
                                        <label htmlFor="email">email</label>
                                        <input type="email"
                                            className="form-control"
                                            placeholder="Enter Email ID"
                                            value={userRegistration.email}
                                            onChange={handleInput}
                                            name="email" id="email" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form col-md-6">
                                        <div>
                                            <label htmlFor="phone">phone</label>
                                            <input type="number"
                                                className="form-control"
                                                placeholder="Enter mobile no"
                                                value={userRegistration.phone}
                                                onChange={handleInput}
                                                name="phone" id="phone" />
                                        </div>
                                    </div>
                                    <div className="form col-md-6">
                                        <div>
                                            <label htmlFor="password">password</label>
                                            <input type="password"
                                                className="form-control"
                                                placeholder="Enter Password"
                                                value={userRegistration.password}
                                                onChange={handleInput}
                                                name="password" id="password" />
                                        </div>
                                    </div>


                                    <div className="text-center mt-5">
                                        <button type="submit" className="btn btn-primary ">Submit</button>
                                    </div>

                                </div>

                            </div>
                        </form>
                        <table className="table border" >
                            <thead>
                                <tr>
                                    <th>Fullname</th>
                                    <th>Email</th>
                                    <th>phone</th>
                                    <th>password</th>
                                </tr>
                            </thead>
                        </table>
                        <div>
                            {
                                records.map((curElem) => {

                                    return (
                                        <div className="showDataStyle">
                                            <table className="table border" >
                                               
                                                <tbody>
                                                <tr>
                                                    <td> {curElem.Fullname}</td>
                                                    <td>{curElem.email}</td>
                                                    <td>{curElem.phone}</td>
                                                    <td>{curElem.password}</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
              
                </div>
            </div>
        </>
    )
}

export default AddUser
