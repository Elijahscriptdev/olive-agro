import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
// import LocationMap from "../../components/contact/LocationMap";
// import * as emailjs from "emailjs-com";

const ForgotPassword = ({ location }) => {
  const { pathname } = location;

  const [formData, setFormData] = useState({
    newPassword: "",
  });

  const { newPassword } = formData;

  const resetForm = () => {
    setFormData({
      newPassword: "",
    });
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log("form submitted");
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
                    onSubmit={(e) => onSubmit(e)}
                  >
                    <div className='row'>
                      <div className='col-lg-12 forgot'>
                        <input
                          name='newPassword'
                          placeholder='***********'
                          type='text'
                          value={newPassword}
                          onChange={(e) => onChange(e)}
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
