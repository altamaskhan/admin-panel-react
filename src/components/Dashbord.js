import React from 'react'
import '../App.css';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Header from './Header';
import Sidebar from './Sidebar';
function Dashbord() {
    return (
        <>
        <Header/>
        <Sidebar/>
        <div className="container ">
            <h1 className="dash m-3">Dashbord</h1>
            <div className="row">
                <div className="col-md-3">
                    <div className="card text-white bg-warning mb-3" style={{ maxWidth: '18rem', height:'' }}>
                        
                        <div className="card-body">
                            <h5 className="card-title"> <b>150+  <LocalMallIcon sx={{ fontSize: 40 }}/></b></h5>
                           
                            <p className="card-text">New Order</p>
                        </div>
                        <div className="card-header text-center">more info</div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-success mb-3" style={{ maxWidth: '18rem', height:'' }}>
                        
                        <div className="card-body">
                            <h5 className="card-title"> <b>150+  <LocalMallIcon sx={{ fontSize: 40 }}/></b></h5>
                           
                            <p className="card-text">New Order</p>
                        </div>
                        <div className="card-header text-center">more info</div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-danger mb-3" style={{ maxWidth: '18rem', height:'' }}>
                        
                        <div className="card-body">
                            <h5 className="card-title"> <b>150+  <LocalMallIcon sx={{ fontSize: 40 }}/></b></h5>
                           
                            <p className="card-text">New Order</p>
                        </div>
                        <div className="card-header text-center">more info</div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-warning mb-3" style={{ maxWidth: '18rem', height:'' }}>
                        
                        <div className="card-body">
                            <h5 className="card-title"> <b>150+  <LocalMallIcon sx={{ fontSize: 40 }}/></b></h5>
                           
                            <p className="card-text">New Order</p>
                        </div>
                        <div className="card-header text-center">more info</div>
                    </div>
                </div>
               
            </div>

            <div className="row">
            <div className="col-md-3">
                    <div className="card text-white bg-dark mb-3" style={{ maxWidth: '18rem', height:'' }}>
                        
                        <div className="card-body">
                            <h5 className="card-title"> <b>150+  <LocalMallIcon sx={{ fontSize: 40 }}/></b></h5>
                           
                            <p className="card-text">New Order</p>
                        </div>
                        <div className="card-header text-center">more info</div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-secondary mb-3" style={{ maxWidth: '18rem', height:'' }}>
                        
                        <div className="card-body">
                            <h5 className="card-title"> <b>150+  <LocalMallIcon sx={{ fontSize: 40 }}/></b></h5>
                           
                            <p className="card-text">New Order</p>
                        </div>
                        <div className="card-header text-center">more info</div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-success mb-3" style={{ maxWidth: '18rem', height:'' }}>
                        
                        <div className="card-body">
                            <h5 className="card-title"> <b>150+  <LocalMallIcon sx={{ fontSize: 40 }}/></b></h5>
                           
                            <p className="card-text">New Order</p>
                        </div>
                        <div className="card-header text-center">more info</div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem', height:'' }}>
                        
                        <div className="card-body">
                            <h5 className="card-title"> <b>150+  <LocalMallIcon sx={{ fontSize: 40 }}/></b></h5>
                           
                            <p className="card-text">New Order</p>
                        </div>
                        <div className="card-header text-center">more info</div>
                    </div>
                </div>
                

            </div>
        </div>

</>
    )
}

export default Dashbord
