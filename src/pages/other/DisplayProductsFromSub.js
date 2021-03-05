import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProducts } from "../../redux/actions/productsActions";
import PropTypes from "prop-types";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";

const DisplayProductsFromSub = ({
  location,
  sliderClassName,
  spaceBottomClass,
}) => {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  const id = location.search.slice(1);
  useEffect(() => {
    dispatch(listProducts());
  }, []);

  const matchedProductFromCat = products.filter((product) => {
    if (product.category_id === id) {
      return product;
    }
  });

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
            ) : !matchedProductFromCat ? (
              <div>
                No product added to this category. Please check back later
              </div>
            ) : (
              matchedProductFromCat.map((product, id) => {
                return (
                  <div
                    key={id}
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
                        <h4>{product.category_name}</h4>
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

DisplayProductsFromSub.propTypes = {
  spaceBottomClass: PropTypes.string,
  wishlistItem: PropTypes.object,
};

export default DisplayProductsFromSub;
