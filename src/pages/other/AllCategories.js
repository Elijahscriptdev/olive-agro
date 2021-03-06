import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaTags from "react-meta-tags";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import { listCategories } from "../../redux/actions/categoriesActions";
import { Link } from "react-router-dom";

const AllCategories = ({ sliderClassName, spaceBottomClass }) => {
  // const { pathname } = location;

  const categoryList = useSelector((state) => state.categoryList);
  const { categories, error } = categoryList;
  const dispatch = useDispatch();
  // console.log("yyy", categories);

  useEffect(() => {
    dispatch(listCategories());
  }, []);

  return (
    <Fragment>
      <MetaTags>
        <title>Display All Products</title>
        <meta name='Display Products' content='Display Products.' />
      </MetaTags>
      {/* <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem> */}
      {/* <BreadcrumbsItem to={process.env.PUBLIC_URL + "/view-categories"}>
        Categories
      </BreadcrumbsItem> */}
        {/* breadcrumb */}
        {/* <Breadcrumb /> */}
      <LayoutOne headerTop='visible'>
        <div className='container'>
          <div className='row'>
            {categories &&
              categories.map((category, index) => {
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
                        <Link to={`/from-cat?${category._id}`}>
                          <img
                            className='default-img mt-4'
                            src={category.imageUrl}
                            alt=''
                          />
                          <h4>{category.name}</h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

AllCategories.propTypes = {
  spaceBottomClass: PropTypes.string,
  wishlistItem: PropTypes.object,
  // location: PropTypes.object,
};

export default AllCategories;
