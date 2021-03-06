import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
// import LocationMap from "../../components/contact/LocationMap";
import * as emailjs from "emailjs-com";
import { setAlert } from "../../redux/actions/alert";
import Alert from "./Alert";

const Contact = ({ location }) => {
  const dispatch = useDispatch();
  const { pathname } = location;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formData;

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
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

    var SERVICE_ID = "service_u3oq3un";
    var TEMPLATE_ID = "template_el672hi";
    var USER_ID = "user_XmeWHiHC4FtKHSriDqGLM";

    let templateParams = {
      from_name: email,
      to_name: "Oliveagro1@gmail.com",
      subject: subject,
      message_html: message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
      function (response) {
        console.log(response.status, response.text);
        dispatch(setAlert("Message has been sent", "success"));
      },
      function (err) {
        console.log(err);
        dispatch(setAlert("Message was not sent, try again", "danger"));
      }
    );

    resetForm();
  };

  return (
    <Fragment>
      <MetaTags>
        <title>Oliveagro | Contact</title>
        <meta
          name='description'
          content='Contact of flone react minimalist eCommerce template.'
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Contact
      </BreadcrumbsItem>
      <LayoutOne headerTop='visible'>
        {/* breadcrumb */}
        <Breadcrumb />
        <div className='contact-area pt-100 pb-100'>
          <div className='container'>
            {/* map */}
            {/* <div className='contact-map mb-10'>
              <LocationMap latitude='47.444' longitude='-122.176' />
            </div> */}
            <div className='custom-row-2'>
              <div className='col-lg-4 col-md-5'>
                <div className='contact-info-wrap'>
                  <div className='single-contact-info'>
                    <div className='contact-icon'>
                      <i className='fa fa-phone' />
                    </div>
                    <div className='contact-info-dec'>
                      <p>+234 817 039 3007</p>
                      <p>+234 810 327 4533</p>
                    </div>
                  </div>
                  <div className='single-contact-info'>
                    <div className='contact-icon'>
                      <i className='fa fa-globe' />
                    </div>
                    <div className='contact-info-dec'>
                      <p>
                        <a href='mailto:urname@email.com'>Oliveagro1@gmail.com</a>
                      </p>
                      <p>
                        <a href='//oliveagro.org'>oliveagro.org</a>
                      </p>
                    </div>
                  </div>
                  {/* <div className='single-contact-info'>
                    <div className='contact-icon'>
                      <i className='fa fa-map-marker' />
                    </div>
                    <div className='contact-info-dec'>
                      <p>Address goes here, </p>
                      <p>street, Crossroad 123.</p>
                    </div>
                  </div> */}
                  <div className='contact-social text-center'>
                    <h3>Follow Us</h3>
                    <ul>
                      <li>
                        <a href='//facebook.com'>
                          <i className='fa fa-facebook' />
                        </a>
                      </li>
                      {/* <li>
                        <a href='//pinterest.com'>
                          <i className='fa fa-pinterest-p' />
                        </a>
                      </li> */}
                      <li>
                        <a href='//thumblr.com'>
                          <i className='fa fa-tumblr' />
                        </a>
                      </li>
                      {/* <li>
                        <a href='//vimeo.com'>
                          <i className='fa fa-vimeo' />
                        </a>
                      </li> */}
                      <li>
                        <a href='//twitter.com'>
                          <i className='fa fa-twitter' />
                        </a>
                      </li>
                      <li>
                        <a href='//instagram.com/Olive_agro/'>
                          <i className='fa fa-instagram ' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-8 col-md-7'>
                <div className='contact-form'>
                  <div className='contact-title mb-30'>
                    <h2>Get In Touch</h2>
                  </div>
                  <form
                    className='contact-form-style'
                    onSubmit={(e) => onSubmit(e)}
                  >
                    <div className='row'>
                      <div className='col-lg-6'>
                        <input
                          name='name'
                          placeholder='Name*'
                          type='text'
                          value={name}
                          onChange={(e) => onChange(e)}
                          required
                        />
                      </div>
                      <div className='col-lg-6'>
                        <input
                          name='email'
                          placeholder='Email*'
                          type='email'
                          value={email}
                          onChange={(e) => onChange(e)}
                          required
                        />
                      </div>
                      <div className='col-lg-12'>
                        <input
                          name='subject'
                          placeholder='Subjects*'
                          type='text'
                          value={subject}
                          onChange={(e) => onChange(e)}
                          required
                        />
                      </div>
                      <div className='col-lg-12'>
                        <textarea
                          name='message'
                          placeholder='Your Message*'
                          // defaultValue={""}
                          value={message}
                          onChange={(e) => onChange(e)}
                          required
                        />
                        <button className='submit' type='submit'>
                          SEND
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className='form-messege' />
                  <Alert />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Contact.propTypes = {
  location: PropTypes.object,
};

export default Contact;
