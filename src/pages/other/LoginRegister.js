import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { login, register } from "../../redux/actions/auth";
import { setAlert } from "../../redux/actions/alert";

const LoginRegister = ({
  location,
  register,
  login,
  isAuthenticated,
  setAlert,
}) => {
  const { pathname } = location;
  let history = useHistory();

  // Register
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    password2: "",
  });

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    password2,
  } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleResgister = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords dont match", "danger");
    } else {
      register({ firstName, lastName, email, phoneNumber, password });
    }
    // console.log(formData);
    // console.log("form submitted");
    history.push("/login-register");
  };

  // login

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
    setAlert("Logged in successful", "success");
  };

  // redirect if login
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Login</title>
        <meta
          name='description'
          content='Compare page of flone react minimalist eCommerce template.'
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Login Register
      </BreadcrumbsItem>
      <LayoutOne headerTop='visible'>
        {/* breadcrumb */}
        <Breadcrumb />
        <div className='login-register-area pt-100 pb-100'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7 col-md-12 ml-auto mr-auto'>
                <div className='login-register-wrapper'>
                  <Tab.Container defaultActiveKey='login'>
                    <Nav variant='pills' className='login-register-tab-list'>
                      <Nav.Item>
                        <Nav.Link eventKey='login'>
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='register'>
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey='login'>
                        <div className='login-form-container'>
                          <div className='login-register-form'>
                            <form onSubmit={(e) => handleLogin(e)}>
                              <input
                                type='email'
                                value={email}
                                placeholder='eee@gmail.com'
                                name='email'
                                onChange={(e) => handleChange(e)}
                                required
                              />
                              <input
                                type='password'
                                placeholder='************'
                                value={password}
                                name='password'
                                onChange={(e) => handleChange(e)}
                                minLength='6'
                              />
                              <div className='button-box'>
                                <div className='login-toggle-btn'>
                                  <input type='checkbox' />
                                  <label className='ml-10'>Remember me</label>
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL + "/reset-password"
                                    }
                                  >
                                    Forgot Password?
                                  </Link>
                                </div>
                                <button type='submit'>
                                  <span>Login</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey='register'>
                        <div className='login-form-container'>
                          <div className='login-register-form'>
                            <form onSubmit={(e) => handleResgister(e)}>
                              <input
                                className='p'
                                type='text'
                                value={firstName}
                                placeholder='First Name'
                                name='firstName'
                                onChange={(e) => onChange(e)}
                                // required
                              />
                              <input
                                className='p'
                                type='text'
                                value={lastName}
                                placeholder='Last Name'
                                name='lastName'
                                onChange={(e) => onChange(e)}
                                required
                              />
                              <input
                                type='email'
                                value={email}
                                placeholder='eee@gmail.com'
                                name='email'
                                onChange={(e) => onChange(e)}
                                required
                              />
                              <input
                                type='tel'
                                value={phoneNumber}
                                placeholder='08012345678'
                                name='phoneNumber'
                                onChange={(e) => onChange(e)}
                                required
                              />
                              <input
                                type='password'
                                placeholder='************'
                                value={password}
                                name='password'
                                onChange={(e) => onChange(e)}
                                minLength='6'
                                required
                              />
                              <input
                                type='password'
                                placeholder='************'
                                value={password2}
                                name='password2'
                                onChange={(e) => onChange(e)}
                                minLength='6'
                                required
                              />

                              <div className='button-box'>
                                <button type='submit'>
                                  <span>Register</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

LoginRegister.propTypes = {
  location: PropTypes.object,
  register: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, register, setAlert })(
  LoginRegister
);
