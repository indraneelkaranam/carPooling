// eslint-disable-next-line
import React from 'react';
import './App.css';
import InfoList from './containers/infoListView';
import Signup from './components/Signup';
import Verifymn from './components/Verifymn';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import Homepage from './components/Homepage'
//import {Platform} from 'react-native';
import Toper from './components/Toper';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router';
import SpinnerPage from './components/Loader';
import Login from './components/Login';
import ContactPage from './components/Aboutus';
import Dashboard from './components/Dashboard';
import Offer from './components/Offer';
import Search from './components/test'
import  FindaRide from './components/FindaRide';
import FindList from './components/FindList';
import Confirm from './components/Confirm';
import Notifications from './components/Notifications';
import Myrides from './components/Myrides';
import Logout from './components/Logout';
import Bookings from './components/Bookings';
function App() {
  return (
    <Router>
    <div className="App"> 
      
     <Switch>
        <Route path="/test" exact component={Search}/>        
        <Route path="/" exact component={Toper}/>
        <Route path="/home" component={Toper} />
        <Route path="/info" component={InfoList} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Verifymn" component={Verifymn} />
        <Route path="/loading" component={SpinnerPage } />
        <Route path="/login" exact component={Login } />
        <Route path="/link" component={ContactPage } />
        <Route path="/login/offer" component={Offer } />
        <Route path="/login/find" component={FindaRide } />
        <Route path="/login/findlist" component={FindList } />
        <Route path="/login/notifications" component={Notifications} />
        <Route path="/login/confirm" component={Confirm } />
        <Route path="/login/myrides" component={Myrides } />
        <Route path="/login/Logout" component={Logout } />
        <Route path="/login/bookings" component={Bookings } />
        <Route path="/login/:id" component={Dashboard } />
    </Switch>

      
    </div>
    </Router>
  );
}
const Home = () =>(
   <div>
     <h1> Home page </h1>
  </div>
);
export default App;
