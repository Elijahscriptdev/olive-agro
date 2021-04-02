import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { login, register } from "../../redux/actions/auth";
import { setAlert } from "../../redux/actions/alert";
import Alert from "./Alert";

const options = [
  {
    label: "",
    value: "",
  },
  {
    label: "DRIVER'S LINCENSE",
    value: "DRIVER'S LINCENSE",
  },
  {
    label: "VOTER's CARD",
    value: "VOTER's CARD",
  },
  {
    label: "INTERNATIONAL PASSPORT",
    value: "INTERNATIONAL PASSPORT",
  },
];

const VendorRegister = ({ location, setAlert }) => {
  const { pathname } = location;
  let history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [otherName, setOtherName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [email, setEmail] = useState("");
  const [cac, setCac] = useState(null);
  const [RC_number, setRC_number] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [documentUrl, setDocumentUrl] = useState(null);
  const [IDtype, setIDtype] = useState("");
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

  const handleSubmitBusiness = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords dont match", "danger");
    }
    const cacImg = await getCacUrl();
    const docImg = await getDocUrl();

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
      cac: [cacImg],
      RC_number,
      phoneNumber,
      IDtype,
      number,
      documentUrl: docImg,
      password,
    });
    console.log(body);

    try {
      const res = await axios.post(
        "https://www.api.oliveagro.org/api/users/create/merchant/business",
        body,
        config
      );
      setAlert("Registration Completed", "success");
      history.push("/registration-completed");
    } catch (error) {
      if (error.response.data.message) {
        setAlert(error.response.data.message, "danger");
      }
      return error;
    }
  };

  const handleSubmitIndividual = async (e) => {
    e.preventDefault();
    const docImg = await getDocUrl();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      firstName,
      lastName,
      otherName,
      email,
      phoneNumber,
      IDtype,
      number,
      documentUrl: docImg,
      password,
    });

    try {
      const res = await axios.post(
        "https://www.api.oliveagro.org/api/users/create/merchant/individual",
        body,
        config
      );
      history.push("/registration-completed");
    } catch (error) {
      if (error.response.data.message) {
        setAlert(error.response.data.message, "danger");
      }
      return error;
    }
  };

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
        {/* <Breadcrumb /> */}
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
                            <form onSubmit={(e) => handleSubmitBusiness(e)}>
                              <label>First Name</label>
                              <input
                                className='p'
                                type='text'
                                value={firstName}
                                placeholder=''
                                name='firstName'
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                              />
                              <label>Last Name</label>
                              <input
                                className='p'
                                type='text'
                                value={lastName}
                                placeholder=''
                                name='lastName'
                                onChange={(e) => setLastName(e.target.value)}
                                required
                              />
                              <label>Other Name</label>
                              <input
                                className='p'
                                type='text'
                                value={otherName}
                                placeholder=''
                                name='otherName'
                                onChange={(e) => setOtherName(e.target.value)}
                                required
                              />
                              <label>Company Name</label>
                              <input
                                className='p'
                                type='text'
                                value={companyName}
                                placeholder=''
                                name='companyName'
                                onChange={(e) => setCompanyName(e.target.value)}
                                required
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
                                required
                              />
                              <label>Email address</label>
                              <input
                                type='email'
                                value={email}
                                placeholder=''
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                              <label>CAC documents</label>
                              <input
                                type='file'
                                placeholder=''
                                name='cac'
                                onChange={(e) => setCac(e.target.files[0])}
                                required
                              />
                              <label>RC Number</label>
                              <input
                                type='text'
                                value={RC_number}
                                placeholder=''
                                name='RC_number'
                                onChange={(e) => setRC_number(e.target.value)}
                                required
                              />
                              <label className='red'>Phone Number</label>
                              <input
                                type='tel'
                                value={phoneNumber}
                                placeholder='08012345678'
                                name='phoneNumber'
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                              />
                              <label>
                                Select ID, (drivers license, international
                                passport, voters card)
                              </label>
                              <select
                                className='select'
                                value={IDtype}
                                onChange={(e) => setIDtype(e.target.value)}
                                required
                              >
                                {options.map((option, index) => (
                                  <option key={index} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </select>
                              <br />
                              <br />
                              <label>UPLOAD ID</label>
                              <input
                                type='file'
                                placeholder=''
                                name='documentUrl'
                                onChange={(e) =>
                                  setDocumentUrl(e.target.files[0])
                                }
                                required
                              />

                              <label className='red'>Number</label>
                              <input
                                type='tel'
                                value={number}
                                placeholder='08012345678'
                                name='number'
                                onChange={(e) => setNumber(e.target.value)}
                                required
                              />
                              <label>
                                <span>
                                  Password must contain a number and a letter
                                </span>
                              </label>
                              <input
                                type='password'
                                placeholder='************'
                                value={password}
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                                minLength='8'
                              />

                              <label>Confirm Password</label>
                              <input
                                type='password'
                                placeholder='************'
                                value={password2}
                                name='password2'
                                onChange={(e) => setPassword2(e.target.value)}
                                minLength='8'
                              />

                              <div className='button-box'>
                                <button type='submit'>
                                  <span>Register</span>
                                </button>
                              </div>
                              {/* <Alert /> */}
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey='register'>
                        <div className='login-form-container'>
                          <div className='login-register-form'>
                            <form onSubmit={(e) => handleSubmitIndividual(e)}>
                              <label>First Name</label>
                              <input
                                className='p'
                                type='text'
                                value={firstName}
                                placeholder=''
                                name='firstName'
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                              />
                              <label>Last Name</label>
                              <input
                                className='p'
                                type='text'
                                value={lastName}
                                placeholder=''
                                name='lastName'
                                onChange={(e) => setLastName(e.target.value)}
                                required
                              />
                              <label>Other Name</label>
                              <input
                                className='p'
                                type='text'
                                value={otherName}
                                placeholder=''
                                name='otherName'
                                onChange={(e) => setOtherName(e.target.value)}
                                required
                              />
                              <label>Email address</label>
                              <input
                                type='email'
                                value={email}
                                placeholder=''
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                              <label className='red'>Phone Number</label>
                              <input
                                type='tel'
                                value={phoneNumber}
                                placeholder='08012345678'
                                name='phoneNumber'
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                              />
                              <label>
                                Select ID, (drivers license, international
                                passport, voters card)
                              </label>
                              <select
                                className='select'
                                value={IDtype}
                                onChange={(e) => setIDtype(e.target.value)}
                              >
                                {options.map((option, index) => (
                                  <option key={index} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </select>
                              <br />
                              <br />
                              <label>UPLOAD ID</label>
                              <input
                                type='file'
                                placeholder=''
                                name='documentUrl'
                                onChange={(e) =>
                                  setDocumentUrl(e.target.files[0])
                                }
                                required
                              />

                              <label className='red'>Number</label>
                              <input
                                type='tel'
                                value={number}
                                placeholder='08012345678'
                                name='number'
                                onChange={(e) => setNumber(e.target.value)}
                                required
                              />
                              <label>
                                <span>
                                  Password must contain a number and a letter
                                </span>
                              </label>
                              <input
                                type='password'
                                placeholder='************'
                                value={password}
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                                minLength='6'
                              />

                              <label>Confirm Password</label>
                              <input
                                type='password'
                                placeholder='************'
                                value={password2}
                                name='password2'
                                onChange={(e) => setPassword2(e.target.value)}
                                minLength='6'
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
                <Alert />
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
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, register, setAlert })(
  VendorRegister
);
