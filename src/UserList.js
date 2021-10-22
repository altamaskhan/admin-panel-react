import React from 'react'
import {Link} from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';


function UserList() {
    return (
        <div>
        <Header/>
        <Sidebar/>
        <div className="container">
        <h1> User List...</h1>
        <div className="card p-5 shadow-lg">
        <div className="content-wrapper p-3">
        <div className="row">
        <div className="col-md-4"> <h5 className="m-0">Users...</h5></div>
           <div className="col-md-7"></div>
           <div className="col-md-1">
           <div className="float-right mr-5 mb-1">
                <Link to="/adduser"><button className="btn btn-outline-primary">
                <b>+</b></button>
                </Link>
                
            </div>
           </div>
           </div>
            
            <table class="table" >
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alam</td>
        <td>Jamal</td>
        <td>alam@gmail.com</td>
      </tr>      
      <tr class="success">
        <td>Mohd</td>
        <td>Zaid</td>
        <td>zaid@example.com</td>
      </tr>
      <tr class="danger">
        <td>Tabish</td>
        <td>khan</td>
        <td>tabish@example.com</td>
      </tr>
      <tr class="info">
        <td>Altamas</td>
        <td>khan</td>
        <td>altamas@example.com</td>
      </tr>
      <tr class="warning">
        <td>Faraz</td>
        <td>moin</td>
        <td>faraz@example.com</td>
      </tr>
      <tr class="active">
        <td>Farhan</td>
        <td>Haider</td>
        <td>farhan@example.com</td>
      </tr>
    </tbody>
  </table>
  </div>
  </div>
  </div>
  </div>
  
    )
}

export default UserList
