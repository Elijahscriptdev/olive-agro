import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listProducts } from "../../redux/actions/productsActions";
// import {  }
import PropTypes from "prop-types";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import ContactAdmin from "./ContactAdmin";
import ContactVendor from "./ContactVendor";

const SingleProduct = ({ location, sliderClassName, spaceBottomClass }) => {
  const { id } = useParams();
  const productList = useSelector((state) => state.productList);
  const { products, loading } = productList;
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, user } = auth;
  console.log("user from products", user);

  const matchedProduct = products.filter((product) => {
    if (product._id === id) {
      return product;
    }
  });

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <Fragment>
      <MetaTags>
        <title>Display All Products</title>
        <meta name='Display Products' content='Display Products.' />
      </MetaTags>
      <LayoutOne headerTop='visible'>
        <div className='container'>
          <div className='row'>
            {loading ? (
              <div>loading......</div>
            ) : (
              matchedProduct.map((product) => {
                return (
                  <Fragment key={id}>
                    <div
                      key={id}
                      className={`col-xl-5 col-md-6 col-lg-4 col-sm-6 increase-col-height ${
                        sliderClassName ? sliderClassName : ""
                      }`}
                    >
                      <div
                        className={`product-wrap ${
                          spaceBottomClass ? spaceBottomClass : ""
                        }`}
                      >
                        <div key={product._id} className='product-img'>
                          <img
                            className='default-img mt-4'
                            src={process.env.PUBLIC_URL + product.imageUrl}
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`col-xl-6 col-md-6 col-lg-4 col-sm-6 mt-3 product-details `}
                    >
                      <div className='product-detail'>
                        <h2>{product.name}</h2>
                        <span className='available'>{product.status}</span>
                        <p>₦{product.price_range}</p>
                        <p>Quantity: {product.quantity}</p>
                        <p>Category: {product.category_name}</p>
                        <ContactVendor className='product-detail-btn' />
                        <ContactAdmin className='product-detail-btn' />
                      </div>
                    </div>
                  </Fragment>
                );
              })
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

SingleProduct.propTypes = {
  spaceBottomClass: PropTypes.string,
  wishlistItem: PropTypes.object,
};

export default SingleProduct;
