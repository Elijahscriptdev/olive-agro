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

const VendorRegister = ({ location, register, login, isAuthenticated }) => {
  const { pathname } = location;
  // let history = useHistory();

  // Register
  const [formData, setFormData] = useState({
    companyName: "",
    companyAddress: "",
    email: "",
    document: "",
    id: "",
    phoneNumber: "",
    password: "",
    password2: "",
  });

  const {
    companyName,
    companyAddress,
    email,
    document,
    id,
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

  const onSubmit = (e) => {
    e.preventDefault();
    // register({ firstName, lastName, email, phoneNumber, password });
    console.log(formData);
    console.log("form submitted");
    // history.push('/login-register');
  };

  // login

  // const handleChange = (e) =>
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   login({ email, password });
  // };

  // redirect if login
  // if (isAuthenticated) {
  //   return <Redirect to='/' />;
  // }

  return (
    <Fragment>
      <MetaTags>
        <title>Oliveagro | Vendor Register</title>
        <meta
          name='description'
          content='Compare page of flone react minimalist eCommerce template.'
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Vendor Register
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
                          <h4>As Business</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='register'>
                          <h4>As Individual</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey='login'>
                        <div className='login-form-container'>
                          <div className='login-register-form'>
                            <form onSubmit={(e) => onSubmit(e)}>
                              <input
                                className='p'
                                type='text'
                                value={companyName}
                                placeholder='Company Name'
                                name='companyName'
                                onChange={(e) => onChange(e)}
                                // required
                              />
                              <input
                                className='p'
                                type='text'
                                value={companyAddress}
                                placeholder='Company Address'
                                name='companyAddress'
                                onChange={(e) => onChange(e)}
                                // required
                              />
                              <input
                                type='email'
                                value={email}
                                placeholder='Email address'
                                name='email'
                                onChange={(e) => onChange(e)}
                                // required
                              />
                              <input
                                type='text'
                                value={document}
                                placeholder='CAC documents'
                                name='document'
                                onChange={(e) => onChange(e)}
                                // required
                              />
                              <input
                                type='text'
                                value={id}
                                placeholder='Directors ID, (drivers license, international passport, voters card)'
                                name='id'
                                onChange={(e) => onChange(e)}
                                // required
                              />
                              <input
                                type='tel'
                                value={phoneNumber}
                                placeholder='08012345678'
                                name='phoneNumber'
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
                      <Tab.Pane eventKey='register'>
                        <div className='login-form-container'>
                          <div className='login-register-form'>
                            <form onSubmit={(e) => onSubmit(e)}>
                              <input
                                className='p'
                                type='text'
                                value={companyName}
                                placeholder='Name'
                                name='companyName'
                                onChange={(e) => onChange(e)}
                                // required
                              />
                              <input
                                className='p'
                                type='text'
                                value={companyAddress}
                                placeholder='Address'
                                name='companyAddress'
                                onChange={(e) => onChange(e)}
                                // required
                              />
                              <input
                                type='email'
                                value={email}
                                placeholder='Email address'
                                name='email'
                                onChange={(e) => onChange(e)}
                                // required
                              />
                              <input
                                type='text'
                                value={id}
                                placeholder='Directors ID, (drivers license, international passport, voters card)'
                                name='id'
                                onChange={(e) => onChange(e)}
                                // required
                              />
                              <input
                                type='tel'
                                value={phoneNumber}
                                placeholder='08012345678'
                                name='phoneNumber'
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

VendorRegister.propTypes = {
  location: PropTypes.object,
  register: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, register })(VendorRegister);
