import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const ProtectedRoute = ({ component : Cmp, ...rest }) => {
  const isAuthenticated = useSelector((state)=>state?.auth?.user?.token);
  return <Route {...rest} render={(props)=> (isAuthenticated ? <Cmp {...props} /> : <Redirect to={{ pathname:'/login' }}/> )}/>;
};

export default ProtectedRoute;
