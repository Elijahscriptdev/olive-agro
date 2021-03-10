import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import axios from "axios";
// import { Link, Redirect, useHistory } from "react-router-dom";
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
    firstName: "",
    lastName: "",
    otherName: "",
    companyName: "",
    companyAddress: "",
    email: "",
    cac: null,
    documentUrl: null,
    type: "",
    number: "",
    password: "",
    password2: "",
  });

  
  const {
    firstName,
    lastName,
    otherName,
    companyName,
    companyAddress,
    email,
    cac,
    documentUrl,
    type,
    number,
    password,
    password2,
  } = formData;

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFile = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.cac[0]);
    // console.log(formData.documentUrl[0]);
    const image = new FormData
    image.append('image', formData.cac[0])
    console.log("img", image)
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "https://www.api.oliveagro.org/api/users/upload",
        image,
        config
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }

    
    // register({ firstName, lastName, email, phoneNumber, password });
    console.log("form submitted");
    
    // history.push('/login-register');
  };

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
                              <label>First Name</label>
                              <input
                                className='p'
                                type='text'
                                value={firstName}
                                placeholder=''
                                name='firstName'
                                onChange={(e) => handleInput(e)}
                                // required
                                />
                              <label>Last Name</label>
                              <input
                                className='p'
                                type='text'
                                value={lastName}
                                placeholder=''
                                name='lastName'
                                onChange={(e) => handleInput(e)}
                                // required
                                />
                              <label>Other Name</label>
                              <input
                                className='p'
                                type='text'
                                value={otherName}
                                placeholder=''
                                name='otherName'
                                onChange={(e) => handleInput(e)}
                                // required
                                />
                              <label>Company Name</label>
                              <input
                                className='p'
                                type='text'
                                value={companyName}
                                placeholder=''
                                name='companyName'
                                onChange={(e) => handleInput(e)}
                                // required
                                />
                              <label>Company Address</label>
                              <input
                                className='p'
                                type='text'
                                value={companyAddress}
                                placeholder=''
                                name='companyAddress'
                                onChange={(e) => handleInput(e)}
                                // required
                                />
                              <label>Email address</label>
                              <input
                                type='email'
                                value={email}
                                placeholder=''
                                name='email'
                                onChange={(e) => handleInput(e)}
                                // required
                                />
                              <label>CAC documents</label>
                              <input
                                type='file'
                                // value={cac}
                                placeholder=''
                                name='cac'
                                onChange={(e) => handleFile(e)}
                                // required
                              />
                              <label>NIN</label>
                              <input
                                type='text'
                                value={type}
                                placeholder='NIN'
                                name='type'
                                onChange={(e) => handleInput(e)}
                                // required
                                />
                              <label>
                                Directors ID, (drivers license, international
                                passport, voters card)
                              </label>
                              <input
                                type='file'
                                // value={documentUrl}
                                placeholder='Directors ID, (drivers license, international passport, voters card)'
                                name='documentUrl'
                                onChange={(e) => handleFile(e)}
                                // required
                              />

                              <label className='red'>Phone Number</label>
                              <input
                                type='tel'
                                value={number}
                                placeholder='08012345678'
                                name='number'
                                onChange={(e) => handleInput(e)}
                                // required
                                />
                              <label>Password</label>
                              <input
                                type='password'
                                placeholder='************'
                                value={password}
                                name='password'
                                onChange={(e) => handleInput(e)}
                                // minLength='6'
                                />
                              <label>Confirm Password</label>
                              <input
                                type='password'
                                placeholder='************'
                                value={password2}
                                name='password2'
                                onChange={(e) => handleInput(e)}
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
                            {/* <form onSubmit={(e) => onSubmit(e)}>
                              <label>First Name</label>
                              <input
                                className='p'
                                type='text'
                                value={firstName}
                                placeholder=''
                                name='firstName'
                                // onChange={(e) => onChange(e)}
                                // required
                              />
                              <label>Last Name</label>
                              <input
                              className='p'
                              type='text'
                                value={lastName}
                                placeholder=''
                                name='lastName'
                                // onChange={(e) => onChange(e)}
                                // required
                              />
                              <label>Other Name</label>
                              <input
                              className='p'
                                type='text'
                                value={otherName}
                                placeholder=''
                                name='otherName'
                                // onChange={(e) => onChange(e)}
                                // required
                              />
                              <label>Company Name</label>
                              <input
                                className='p'
                                type='text'
                                value={companyName}
                                placeholder=''
                                name='companyName'
                                // onChange={(e) => onChange(e)}
                                // required
                              />
                              <label>Company Address</label>
                              <input
                                className='p'
                                type='text'
                                value={companyAddress}
                                placeholder=''
                                name='companyAddress'
                                // onChange={(e) => onChange(e)}
                                // required
                              />
                              <label>Email address</label>
                              <input
                                type='email'
                                value={email}
                                placeholder=''
                                name='email'
                                // onChange={(e) => onChange(e)}
                                // required
                                />
                              <label>CAC documents</label>
                              <input
                              type='file'
                                value={cac}
                                placeholder=''
                                name='cac'
                                // onChange={(e) => onChange(e)}
                                // required
                              />
                              <label>NIN</label>
                              <input
                              type='text'
                              value={type}
                              placeholder='NIN'
                              name='type'
                                // onChange={(e) => onChange(e)}
                                // required
                              />
                              <label>
                                Directors ID, (drivers license, international
                                  passport, voters card)
                              </label>
                              <input
                              type='file'
                                value={documentUrl}
                                placeholder='Directors ID, (drivers license, international passport, voters card)'
                                name='documentUrl'
                                // onChange={(e) => onChange(e)}
                                // required
                                />
                                
                                <label className='red'>Phone Number</label>
                                <input
                                type='tel'
                                value={number}
                                placeholder='08012345678'
                                name='number'
                                // onChange={(e) => onChange(e)}
                                // required
                              />
                              <label>Password</label>
                              <input
                                type='password'
                                placeholder='************'
                                value={password}
                                name='password'
                                // onChange={(e) => onChange(e)}
                                // minLength='6'
                                />
                              <label>Confirm Password</label>
                              <input
                                type='password'
                                placeholder='************'
                                value={password2}
                                name='password2'
                                // onChange={(e) => onChange(e)}
                                // minLength='6'
                                />

                                <div className='button-box'>
                                <button type='submit'>
                                  <span>Register</span>
                                  </button>
                              </div>
                            </form> */}
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

// const cacFile = () => {
// const info = JSON.parse(localStorage.getItem("Data"));
// const image = info.cac;
//   return axios.post('https://www.api.oliveagro.org/api/users/upload', image);
// }

// const docFile = () => {
// const info = JSON.parse(localStorage.getItem("Data"));
// const image = info.documentUrl;
//   return axios.post('https://www.api.oliveagro.org/api/users/upload', image);
// }

// Promise.all([cacFile(), docFile()])
//   .then(function (results) {
//     const cacUrl = results[0];
//     const docUrl = results[1];
//   });