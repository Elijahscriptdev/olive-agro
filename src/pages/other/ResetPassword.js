import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const ResetPassword = ({ location }) => {
  const { pathname } = location;
  let history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const resetForm = () => {
    setFormData({
      email: "",
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
    history.push("/forgot-password");
  };

  return (
    <Fragment>
      <MetaTags>
        <title>Reset Password Oliveagro</title>
        <meta
          name='description'
          content='Reset Password page of oliveagro website.'
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Reset Password
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
                    <h2>Please enter your email to reset your password</h2>
                  </div>
                  <form
                    className='contact-form-style'
                    onSubmit={(e) => onSubmit(e)}
                  >
                    <div className='row'>
                      <div className='col-lg-12 forgot'>
                        <input
                          name='email'
                          placeholder='***********'
                          type='text'
                          value={email}
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

ResetPassword.propTypes = {
  location: PropTypes.object,
};

export default ResetPassword;
