import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import contact from '../assets/img/slider1.jpg'




function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (data.email == "altamas@gmail.com" && data.password == "altamas") {


            window.location = '/dashbord';

        }
        else {
            alert("login fail!");
        }

        console.log(data);

    }

    return (
        <>


            <div style={{ overflowX: "hidden" }}>
                <section className="section-contact" style={{ backgroundImage: `url(${contact})`, width: '100%', height: 660, paddingTop: '5%' }}>
                    <div className="container-fluid">
                        <div className="col-sm-3 offset-sm-4 ">
                            <div className="card shadow mt-5">


                                <h1 className="text-center text-white bg-black mt-3 p-2 ">Login</h1><br />
                                <div className="container-fluid">
                                    <p className="text-center">your first time login id is : <b>altamas@gmail.com</b> and password is : <b>altamas</b></p>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <p className="text-danger">
                                            {errors.email?.type === 'required' && "email is required"}

                                            {errors.email?.type === 'pattern' && "invalid email"}

                                        </p>

                                        <input
                                            className="form-control"
                                            name="email"
                                            {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+/, })}
                                            placeholder="enter email id "
                                            type="text"


                                        />
                                        <br />

                                        <p className="text-danger">
                                            {errors.password?.type === 'required' && "password is required"}
                                            {errors.password?.type === 'minLength' && "minimum length is 3"}
                                            {errors.password?.type === 'maxLength' && "maximum length is 10"}
                                        </p>
                                        <input
                                            className="form-control"
                                            name="password"
                                            {...register('password', { required: true, minLength: 3, maxLength: 10 })}
                                            placeholder="password "
                                            type="password"

                                        />
                                        <br />

                                        <div className=" d-grid gap-2 text-center">
                                            <button className="btn btn-dark bg-black mb-2 " >Log In </button>
                                        </div>
                                    </form>



                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Login