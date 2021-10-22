import React from 'react'
import '../App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function Header() {
    return (
        <div className="sticky-top">
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid">
                    <Link className="navbar-brand " to="/dashbord">Admin  Panel</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           
                                
                        </ul>
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/signup">SignUp</Link>
                            </li><li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Login</Link>
                            </li>
                            </ul>
                       
                        
                        
                    </div>
                </div>
            </nav>

        </div>
        
    )
}

export default Header
