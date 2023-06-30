import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./Login.css";
import { loginUser } from '../../redux/actions/authAction'
import { useFormik } from "formik";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import { useDispatch } from "react-redux";


function Login() {
  const dispatch = useDispatch();
  const [loading , setLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validationSchema: Yup.object({
    //   email: Yup.string()
    //     .email("Invalid email address")
    //     .required("Required email address"),
    //   password: Yup.string()
    //     .required("No password provided.")
    //     .min(5, "Password is too short - should be 8 chars minimum."),
    // }),

    onSubmit: async (values) => {
      let payload = {
        email: values.email.toLowerCase(),
        password: values.password,
      };
      if (values.email && values.password) {
        setLoading(true)

        const response = await dispatch(loginUser(payload));
        if(response){
          if (response.success === true) {
            history.push('/home')
            setLoading(false)
            return;
          }
          setLoading(false)
        }
        
      }
    },
  });

  const history = useHistory()
  return (
    <div className="Login-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 m-auto">
            <div className="login-form">
              <div className="login-txt-headding">
                <h1 className="title-login"><span class="text-white">FUND-</span>FRENZY</h1>
              </div>
              <div className="login-userform">
                <form className="formaction" onSubmit={formik.handleSubmit}>
                  <div className="form-group-row">
                    {/**    <input type="text" placeholder="Email" required className="form-control form-control-log" />  */}
                    {/** */}      <Form.Control
                      className="form-control form-control-log"
                      name="email"
                      type="text"
                      placeholder="Enter email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                  <div className="form-group-row">
                    {/**      <input type="password"
                                 placeholder="Password" 
                                className="form-control form-control-log"
                                 onChange={formik.handleChange}
                                value={formik.values.password}
                                 />  */}
                    <Form.Control
                      className="form-control form-control-log"
                      name="password"
                      type="password"
                      placeholder="Enter password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                  </div>
                  <div className="form-group-row">
                    <div className="loginsubmit text-center">

                      {/**    <button onClick={() => history.push('home')} type="submit" className="btn btn-submit-login">Login</button>   */}
                      <button type="submit" className="btn btn-submit-login">
                        {loading ? <Spinner animation="border" /> : "Login"}
                        </button>
                    </div>
                  </div>
                  <div className="form-group-row">
                    <div className="forget-password text-center" onClick={() => history.push('forgot-password')}>
                      <span className="linkfoget" >Forgot Password</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;