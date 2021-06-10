import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProducts } from "../../redux/actions/productsActions";
import PropTypes from "prop-types";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";

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
      {/* <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem> */}
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/all-categories"}>
        Sub-categories
      </BreadcrumbsItem>
      {/* breadcrumb */}
      <LayoutOne headerTop='visible'>
        <Breadcrumb />
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
                    className={`col-xl-3 my-5 col-md-6 col-lg-4 col-sm-6 ${
                      sliderClassName ? sliderClassName : ""
                    }`}
                  >
                    <div
                      className={`product-wrap ${
                        spaceBottomClass ? spaceBottomClass : ""
                      }`}
                    >
                      <div className='product-img '>
                        <Link to={`/product/${product._id}`}>
                          <h4>Product: {product.name}</h4>
                          <img
                            className='default-img my-2'
                            src={process.env.PUBLIC_URL + product.imageUrl}
                            alt=''
                          />
                        </Link>
                        <h4>Category: {product.category_name}</h4>
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
