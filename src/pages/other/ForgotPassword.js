import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const ForgotPassword = ({ location }) => {
  const { pathname } = location;
  let history = useHistory();

  const [formData, setFormData] = useState({
    newPassword: "",
    newPassword2: "",
  });

  const id = useParams();
  const token = id.token;
  // console.log(token)

  const { newPassword, newPassword2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword !== newPassword2) {
      alert("Passwords dont match");
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      newPassword
    });

    try {
      console.log(body);
      const res = await axios.patch(
        `https://www.api.oliveagro.org/api/auth/reset-password/${token}`,
        body,
        config
      );
      console.log(res);
      alert("password changed successfully");
      history.push("/login-register");
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <Fragment>
      <MetaTags>
        <title>Forgot Password Oliveagro</title>
        <meta
          name='description'
          content='Forgot Password page of oliveagro website.'
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Forgot Password
      </BreadcrumbsItem>
      <LayoutOne headerTop='visible'>
        {/* breadcrumb */}
        <Breadcrumb />
        <div className='contact-area pt-100 pb-100'>
          <div className='container text-center'>
            <div className='mx-auto'>
              <div className='col-lg-12 col-md-7'>
                <div className='contact-form'>
                  <div className='contact-title mb-30'>
                    <h2>Please enter your new password</h2>
                    <p>Password must contain a letter and a number</p>
                  </div>
                  <form
                    className='contact-form-style'
                    onSubmit={(e) => handleResetPassword(e)}
                  >
                    <div className='row'>
                      <div className='col-lg-12 forgot'>
                        <input
                          name='newPassword'
                          placeholder='New Password'
                          type='password'
                          value={newPassword}
                          onChange={(e) => handleChange(e)}
                          required
                        />
                      </div>
                      <div className='col-lg-12 forgot'>
                        <input
                          name='newPassword2'
                          placeholder='Confirm Password'
                          type='password'
                          value={newPassword2}
                          onChange={(e) => handleChange(e)}
                          required
                        />
                      </div>
                      <div className='col-lg-12'>
                        <button className='submit' type='submit'>
                          SEND
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className='form-messege' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

ForgotPassword.propTypes = {
  location: PropTypes.object,
};

export default ForgotPassword;
