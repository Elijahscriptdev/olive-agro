import React from "react";
import { Link } from "react-router-dom";
// import LayoutOne from "../../layouts/LayoutOne";

const SuccessMessage = () => {
  const handleClick = () => {
    window.open("https://vendor.oliveagro.org", "_blank");
  };

  return (
    <div className='container'>
      {/* <LayoutOne headerTop='visible'> */}
      <div className='success-message'>
        <img
          className='img-fluid'
          src='https://res.cloudinary.com/olive-agro/image/upload/v1615449258/success-green-check-mark_so8hyo.png'
          alt='success'
        />
        <h3>Registration Successful</h3>
        <p>Kindly wait until you are verified by the admin</p>
        <a href='admin.oliveagro.org' target='_blank' onClick={handleClick}>
          Go to your Dashboard
        </a>
        <Link to='/'>Go to homepage</Link>
      </div>
      {/* </LayoutOne> */}
    </div>
  );
};

export default SuccessMessage;
