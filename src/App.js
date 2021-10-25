import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashbord from './components/Dashbord';
import UserList from './UserList';
import AddUser from './AddUser';
import Signup from './components/Signup';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import PageNotFound from './components/PageNotFound';
import Home from './crud-components/Home';
import Add from './crud-components/Add';


function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Sidebar/> */}

      
      <Router>
        <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/dashbord' component={Dashbord}/>
        <Route path='/userlist' component={UserList}/>
        <Route path='/adduser' component={AddUser}/>
        
        {/* <Route path='/add' component={Add}/>
        <Route path='/home' component={Home}/> */}
        
        <Route component={PageNotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
