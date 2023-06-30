import React, { useEffect } from 'react';
import { useHistory, Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }, props) => {
    const history = useHistory()
    let authToken = localStorage.getItem("token");

    useEffect(() => {
        if(!authToken){
            history.push('/login');
        }
    }, [])

    return (
      <Route
        {...rest}
        render={(props) =>
            authToken ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  };

export default PrivateRoute;