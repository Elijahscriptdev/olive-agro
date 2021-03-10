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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [otherName, setOtherName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [email, setEmail] = useState("");
  const [cac, setCac] = useState(null);
  const [documentUrl, setDocumentUrl] = useState(null);
  const [type, setType] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [number, setNumber] = useState(0);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const getCacUrl = async () => {
    const image = new FormData();
    image.append("image", cac);
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
      console.log(res.data.image);
      return res.data.image;
    } catch (error) {
      console.log(error);
    }
  };

  const getDocUrl = async () => {
    const image = new FormData();
    image.append("image", documentUrl);
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
      return res.data.image;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cacImg = await getCacUrl();
    const docImg = await getDocUrl();
    console.log("new", cacImg);
    console.log("new2", docImg);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      firstName,
      lastName,
      otherName,
      companyName,
      companyAddress,
      email,
      cac: cacImg,
      documentUrl: docImg,
      type,
      number,
      phoneNumber,
      password,
    });

    console.log("body", body);

    try {
      const res = await axios.post(
        "https://www.api.oliveagro.org/api/users/create/merchant",
        body,
        config
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
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
                            <form onSubmit={(e) => handleSubmit(e)}>
                              <label>First Name</label>
                              <input
                                className='p'
                                type='text'
                                value={firstName}
                                placeholder=''
                                name='firstName'
                                onChange={(e) => setFirstName(e.target.value)}
                                // required
                              />
                              <label>Last Name</label>
                              <input
                                className='p'
                                type='text'
                                value={lastName}
                                placeholder=''
                                name='lastName'
                                onChange={(e) => setLastName(e.target.value)}
                                // required
                              />
                              <label>Other Name</label>
                              <input
                                className='p'
                                type='text'
                                value={otherName}
                                placeholder=''
                                name='otherName'
                                onChange={(e) => setOtherName(e.target.value)}
                                // required
                              />
                              <label>Company Name</label>
                              <input
                                className='p'
                                type='text'
                                value={companyName}
                                placeholder=''
                                name='companyName'
                                onChange={(e) => setCompanyName(e.target.value)}
                                // required
                              />
                              <label>Company Address</label>
                              <input
                                className='p'
                                type='text'
                                value={companyAddress}
                                placeholder=''
                                name='companyAddress'
                                onChange={(e) =>
                                  setCompanyAddress(e.target.value)
                                }
                                // required
                              />
                              <label>Email address</label>
                              <input
                                type='email'
                                value={email}
                                placeholder=''
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                                // required
                              />
                              <label>CAC documents</label>
                              <input
                                type='file'
                                placeholder=''
                                name='cac'
                                onChange={(e) => setCac(e.target.files[0])}
                                // required
                              />
                              <label>NIN</label>
                              <input
                                type='text'
                                value={type}
                                placeholder='NIN'
                                name='type'
                                onChange={(e) => setType(e.target.value)}
                                // required
                              />
                              <label>
                                Directors ID, (drivers license, international
                                passport, voters card)
                              </label>
                              <input
                                type='file'
                                placeholder='Directors ID, (drivers license, international passport, voters card)'
                                name='documentUrl'
                                onChange={(e) =>
                                  setDocumentUrl(e.target.files[0])
                                }
                                // required
                              />

                              <label className='red'>Number</label>
                              <input
                                type='tel'
                                value={number}
                                placeholder='08012345678'
                                name='number'
                                onChange={(e) => setNumber(e.target.value)}
                                // required
                              />
                              <label className='red'>Phone Number</label>
                              <input
                                type='tel'
                                value={phoneNumber}
                                placeholder='08012345678'
                                name='phoneNumber'
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                // required
                              />
                              <label>Password</label>
                              <input
                                type='password'
                                placeholder='************'
                                value={password}
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                                // minLength='6'
                              />
                              <label>Confirm Password</label>
                              <input
                                type='password'
                                placeholder='************'
                                value={password2}
                                name='password2'
                                onChange={(e) => setPassword2(e.target.value)}
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
                            <form onSubmit={(e) => handleSubmit(e)}>
                              <label>First Name</label>
                              <input
                                className='p'
                                type='text'
                                value={firstName}
                                placeholder=''
                                name='firstName'
                                onChange={(e) => setFirstName(e.target.value)}
                                // required
                              />
                              <label>Last Name</label>
                              <input
                                className='p'
                                type='text'
                                value={lastName}
                                placeholder=''
                                name='lastName'
                                onChange={(e) => setLastName(e.target.value)}
                                // required
                              />
                              <label>Other Name</label>
                              <input
                                className='p'
                                type='text'
                                value={otherName}
                                placeholder=''
                                name='otherName'
                                onChange={(e) => setOtherName(e.target.value)}
                                // required
                              />
                              <label>Company Name</label>
                              <input
                                className='p'
                                type='text'
                                value={companyName}
                                placeholder=''
                                name='companyName'
                                onChange={(e) => setCompanyName(e.target.value)}
                                // required
                              />
                              <label>Company Address</label>
                              <input
                                className='p'
                                type='text'
                                value={companyAddress}
                                placeholder=''
                                name='companyAddress'
                                onChange={(e) =>
                                  setCompanyAddress(e.target.value)
                                }
                                // required
                              />
                              <label>Email address</label>
                              <input
                                type='email'
                                value={email}
                                placeholder=''
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                                // required
                              />
                              <label>CAC documents</label>
                              <input
                                type='file'
                                placeholder=''
                                name='cac'
                                onChange={(e) => setCac(e.target.files[0])}
                                // required
                              />
                              <label>NIN</label>
                              <input
                                type='text'
                                value={type}
                                placeholder='NIN'
                                name='type'
                                onChange={(e) => setType(e.target.value)}
                                // required
                              />
                              <label>
                                Directors ID, (drivers license, international
                                passport, voters card)
                              </label>
                              <input
                                type='file'
                                placeholder='Directors ID, (drivers license, international passport, voters card)'
                                name='documentUrl'
                                onChange={(e) =>
                                  setDocumentUrl(e.target.files[0])
                                }
                                // required
                              />

                              <label className='red'>Number</label>
                              <input
                                type='tel'
                                value={number}
                                placeholder='08012345678'
                                name='number'
                                onChange={(e) => setNumber(e.target.value)}
                                // required
                              />
                              <label className='red'>Phone Number</label>
                              <input
                                type='tel'
                                value={phoneNumber}
                                placeholder='08012345678'
                                name='phoneNumber'
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                // required
                              />
                              <label>Password</label>
                              <input
                                type='password'
                                placeholder='************'
                                value={password}
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                                // minLength='6'
                              />
                              <label>Confirm Password</label>
                              <input
                                type='password'
                                placeholder='************'
                                value={password2}
                                name='password2'
                                onChange={(e) => setPassword2(e.target.value)}
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
