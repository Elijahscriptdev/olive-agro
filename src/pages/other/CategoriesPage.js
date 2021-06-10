import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaTags from "react-meta-tags";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import { listCategories } from "../../redux/actions/categoriesActions";
import { Link } from "react-router-dom";

const CategoriesPage = ({ sliderClassName, spaceBottomClass }) => {
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
        <title>Display All Categories</title>
        <meta name='Display Products' content='Display Products.' />
      </MetaTags>
      {/* <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem> */}
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/all-categories"}>
        Categories
      </BreadcrumbsItem>
      {/* breadcrumb */}

      <LayoutOne headerTop='visible'>
        <Breadcrumb />
        <div className='container my-5'>
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
                          <h4 className='text-center mt-5'>{category.name}</h4>
                          <img
                            className='default-img '
                            src={category.imageUrl}
                            alt=''
                          />
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

CategoriesPage.propTypes = {
  spaceBottomClass: PropTypes.string,
  wishlistItem: PropTypes.object,
  // location: PropTypes.object,
};

export default CategoriesPage;
