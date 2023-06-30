import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Views/Login/Login';
import ActivatedOnlineTickets from './Views/ActivatedOnlineTickets/ActivatedOnlineTickets';
import AlignedTickets from './Views/AlignedTickets/AlignedTickets';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './Views/Auth/forgotPassword';

function AppRoutes(props) {
  // const { location } = props;

  // useEffect(() => {
  //   if (window.location.pathname === "/") {
  //     props.history.push('login')
  //   }
  // }, [])

  

  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/dashboard" component={<div>hello 1</div>} />
  
          <Route path="/monitors" component={<div>hello 2</div>} />
          <Route path = "/cost-cutter" component={<div>hello 3</div>}/> */}
        </Switch>
      </Router>

    </div>
  );
}

export default withRouter(AppRoutes);
