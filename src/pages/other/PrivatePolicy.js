import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const PrivatePolicy = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>Oliveagro | Privacy Policy</title>
        <meta
          name='description'
          content='About page of flone react minimalist eCommerce template.'
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Privacy Policy
      </BreadcrumbsItem>
      <LayoutOne headerTop='visible'>
        {/* breadcrumb */}
        <Breadcrumb />

        <div className='container my-5'>
          <div className='welcome-content text-center'>
            <h1>Oliveagro Privacy Policy</h1>
            <p>
              My Company Oliveagro operates hwww.oliveagro.org This page informs
              you of our policies regarding the collection, use and disclosure
              of PersonalInformation we receive from users of the Site.We use
              your Personal Information only for providing and improving the
              Site. By using the Site, you agree to the collection and use of
              information in accordance with this policy.
            </p>

            <h5 className='mt-4'>Information Collection and Use</h5>
            <p>
              While using our Site, we may ask you to provide us with certain
              personallyidentifiable information that can be used to contact or
              identify you. Personally, identifiable information may include,
              but is not limited to your name ("Personal Information").
            </p>

            <h5 className='mt-4'>Log Data</h5>
            <p>
              Like many site operators, we collect information that your browser
              sends whenever you visit our Site ("Log Data").This Log Data may
              include information such as your computer's Internet Protocol
              ("IP") address, browser type, browser version, the pages of our
              Site that you visit, the time and date of your visit, the time
              spent on those pages and other statistics.In addition, we may use
              third party services such as Google Analytics that collect,
              monitor and analyse this ...
            </p>

            <h5 className='mt-4'>Communications</h5>
            <p>
              We may use your Personal Information to contact you with
              newsletters, marketing or promotional materials and other
              information that ... The Log Data section is for businesses that
              use analytics or tracking services in websites or apps, like
              Google Analytics. For the full disclosure section, create your own
              Privacy Policy. The Communications section is for businesses that
              may contact users viaemail (email, newsletters) or other methods.
              For the full disclosure section, create your own Privacy Policy.
            </p>

            <h5 className='mt-4'>Cookies</h5>
            <p>
              Cookies are files with small amount of data, which may include an
              anonymous unique identifier. Cookies are sent to your browser from
              a website and stored on your computer's hard drive.Like many
              sites, we use "cookies" to collect information. You can instruct
              your browser to refuse all cookies or to indicate when a cookie is
              being sent. However, if you do not accept cookies, you may not be
              able to use some portions of our Site.
            </p>

            <h5 className='mt-4'>Security</h5>
            <p>
              The security of your Personal Information is important to us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage, is 100% secure. While we strive to
              use commercially acceptable means to protect your Personal
              Information, we cannot guarantee its absolute security. Changes to
              This Privacy Policy
            </p>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

PrivatePolicy.propTypes = {
  location: PropTypes.object,
};

export default PrivatePolicy;
