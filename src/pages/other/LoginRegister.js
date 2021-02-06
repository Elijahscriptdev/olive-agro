import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { login, register } from "../../redux/actions/auth";

const LoginRegister = ({ location, register, login, isAuthenticated }) => {
  const { pathname } = location;

  // Register
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { first_name, last_name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    register({ first_name, last_name, email, password });
    console.log(formData);
    console.log("form submitted");
  };

  // login

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
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
                            <form onSubmit={(e) => handleSubmit(e)}>
                              <input
                                type='email'
                                value={email}
                                placeholder='eee@gmail.com'
                                name='email'
                                onChange={(e) => handleChange(e)}
                                // required
                              />
                              <input
                                type='password'
                                placeholder='************'
                                value={password}
                                name='password'
                                onChange={(e) => handleChange(e)}
                                // minLength='6'
                              />
                              <div className='button-box'>
                                <div className='login-toggle-btn'>
                                  <input type='checkbox' />
                                  <label className='ml-10'>Remember me</label>
                                  <Link to={process.env.PUBLIC_URL + "/"}>
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
                            <form onSubmit={(e) => onSubmit(e)}>
                              <input
                                className='p'
                                type='text'
                                value={first_name}
                                placeholder='First Name'
                                name='first_name'
                                onChange={(e) => onChange(e)}
                                // required
                              />
                              <input
                                className='p'
                                type='text'
                                value={last_name}
                                placeholder='Last Name'
                                name='last_name'
                                onChange={(e) => onChange(e)}
                                // required
                              />
                              <input
                                type='email'
                                value={email}
                                placeholder='eee@gmail.com'
                                name='email'
                                onChange={(e) => onChange(e)}
                                // required
                              />
                              <input
                                type='password'
                                placeholder='************'
                                value={password}
                                name='password'
                                onChange={(e) => onChange(e)}
                                // minLength='6'
                              />
                              <input
                                type='password'
                                placeholder='************'
                                value={password2}
                                name='password2'
                                onChange={(e) => onChange(e)}
                                // minLength='6'
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
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, register })(LoginRegister);
