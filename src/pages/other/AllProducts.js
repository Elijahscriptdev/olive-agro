import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import { listProducts } from "../../redux/actions/productsActions";
import { Link } from "react-router-dom";

const AllProducts = ({ sliderClassName, spaceBottomClass }) => {
  const productList = useSelector((state) => state.productList);
  const { products, loading } = productList;
  const dispatch = useDispatch();

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
        <div className='containe'>
          <div className='row'>
            {loading ? (
              <div>loading......</div>
            ) : (
              products && products.map((product, index) => {
                return (
                  <div
                    key={index}
                    className={`col-xl-3 col-md-6 col-lg-4 col-sm-6 ${
                      sliderClassName ? sliderClassName : ""
                    }`}
                  >
                    <div
                      className={`product-wrap ${
                        spaceBottomClass ? spaceBottomClass : ""
                      }`}
                    >
                      <div className='product-img'>
                        <Link to={`/product/${product._id}`}>
                          <img
                            className='default-img mt-4'
                            src={process.env.PUBLIC_URL + product.imageUrl}
                            alt=''
                          />
                          <h4>{product.name}</h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

AllProducts.propTypes = {
  spaceBottomClass: PropTypes.string,
  wishlistItem: PropTypes.object,
};

export default AllProducts;
