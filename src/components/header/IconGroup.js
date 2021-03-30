import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import MenuCart from "./sub-components/MenuCart";
import { deleteFromCart } from "../../redux/actions/cartActions";
import { logout } from "../../redux/actions/auth";
import { setAlert } from "../../redux/actions/alert";

const IconGroup = ({
  currency,
  cartData,
  wishlistData,
  compareData,
  deleteFromCart,
  iconWhiteClass,
  auth: { isAuthenticated },
  logout,
  setAlert,
}) => {
  const LogOut = (e) => {
    e.preventDefault();
    setAlert("You have successfully logged out", "danger");
  };

  const handleClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };

  return (
    <div
      className={`header-right-wrap ${iconWhiteClass ? iconWhiteClass : ""}`}
    >
      <div className='same-style header-search d-none d-lg-block'>
        <button className='search-active' onClick={(e) => handleClick(e)}>
          <i className='pe-7s-search' />
        </button>
        <div className='search-content'>
          <form action='#'>
            <input type='text' placeholder='Search' />
            <button className='button-search'>
              <i className='pe-7s-search' />
            </button>
          </form>
        </div>
      </div>
      <div className='same-style account-setting d-none d-lg-block'>
        <button
          className='account-setting-active'
          onClick={(e) => handleClick(e)}
        >
          <i className='pe-7s-user-female' />
        </button>
        <div className='account-dropdown'>
          <ul>
            {isAuthenticated ? (
              <li onClick={LogOut}>
                <Link to='/' onClick={logout}>
                  Logout
                </Link>
              </li>
            ) : (
              <ul>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/login-register"}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/login-register"}>
                    Register
                  </Link>
                </li>
              </ul>
            )}
            {/* <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>Login</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>
                Register
              </Link>
            </li> */}
            {/* <li>
              <Link to={process.env.PUBLIC_URL + "/my-account"}>
                my account
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      {/* <div className="same-style header-compare">
        <Link to={process.env.PUBLIC_URL + "/compare"}>
          <i className="pe-7s-shuffle" />
          <span className="count-style">
            {compareData && compareData.length ? compareData.length : 0}
          </span>
        </Link>
      </div> */}
      {/* <div className="same-style header-wishlist">
        <Link to={process.env.PUBLIC_URL + "/wishlist"}>
          <i className="pe-7s-like" />
          <span className="count-style">
            {wishlistData && wishlistData.length ? wishlistData.length : 0}
          </span>
        </Link>
      </div> */}
      {/* <div className="same-style cart-wrap d-none d-lg-block">
        <button className="icon-cart" onClick={e => handleClick(e)}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartData && cartData.length ? cartData.length : 0}
          </span>
        </button>
         menu cart==comment
        <MenuCart
          cartData={cartData}
          currency={currency}
          deleteFromCart={deleteFromCart}
        />
      </div> */}
      {/* <div className="same-style cart-wrap d-block d-lg-none">
        <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartData && cartData.length ? cartData.length : 0}
          </span>
        </Link>
      </div> */}
      <div className='same-style mobile-off-canvas d-block d-lg-none'>
        <button
          className='mobile-aside-button'
          onClick={() => triggerMobileMenu()}
        >
          <i className='pe-7s-menu' />
        </button>
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  cartData: PropTypes.array,
  compareData: PropTypes.array,
  currency: PropTypes.object,
  iconWhiteClass: PropTypes.string,
  deleteFromCart: PropTypes.func,
  wishlistData: PropTypes.array,
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  setAlert: PropTypes.func.isRequired,
};

// const mapStateToProps = state => {
//   return {
//     currency: state.currencyData,
//     cartData: state.cartData,
//     wishlistData: state.wishlistData,
//     compareData: state.compareData
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     deleteFromCart: (item, addToast) => {
//       dispatch(deleteFromCart(item, addToast));
//     }
//   };
// };

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout, setAlert })(IconGroup);
