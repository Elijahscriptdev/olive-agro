import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className='container'>
        <div className='welcome-content text-center'>
          <h5>Who Are We</h5>
          <h1>Welcome To Oliveagro</h1>
          <p>
            Oliveagro is Nigeria’s very first online agricultural mall. We
            launched in 2021 and our mission is to become the engine room of
            commerce and trade worldwide.We serve as the missing piece in the
            puzzle that links our local exporters with international buyers.
          </p>
          <br />
          <p>
            Our range of services are designed to ensure optimum levels of
            convenience and customer satisfaction with stress free processing ;
            these services include linking you with new exporters or importers
            as the case may be in need of agricultural products like, Hibiscus
            sabdariffa, Wheat bran, Zea mays and many more, P.S: The only
            authorized body that issuesphytosanitary certificate is the Nigeria
            Agricultural Quarantine service, we at Oliveagro have taken it upon
            ourselves to go as far as Making sure you obtain Original
            Phytosanitary certificate after inspection of the consignment has
            been done, order delivery-tracking, dedicated customer service
            support and many other premium services.
          </p>
          <br />
          <p>
            As we continue to expand the mall, our scope of offerings will
            increase in variety, simplicity and convenience; join us and enjoy
            the increasing benefits.
          </p>
          <br />
          <p>
            We are highly customer-centric and are committed towards finding
            innovative ways of improving our customers' shopping experience with
            us;so give us some feedback on (help@oliveagro.com) For any press
            related questions, kindly send us an email at (press@oliveagro.com).
          </p>
          <br />
          <p>Thank you and we hope you enjoy your experience with us.</p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default SectionTitleWithText;
