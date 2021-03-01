// import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import { listCategories } from "../../redux/actions/categoriesActions";

const AllCategories = () => {
  const categoryList = useSelector((state) => state.categoryList);
  const { categories, error } = categoryList;
  const dispatch = useDispatch();
  console.log("yyy", categories);

  useEffect(() => {
    dispatch(listCategories());
  }, []);

  return (
    <Fragment>
      <MetaTags>
        <title>Display All Products</title>
        <meta name='Display Products' content='Display Products.' />
      </MetaTags>
      <LayoutOne headerTop='visible'>
        <h1>gtgtgygy</h1>
        {error ? (
          <div>{error}</div>
        ) : (
          categories.map((category, index) => (
            <div key={index}>
              <h1>{category.status}</h1>
              <img src={category.imageUrl} alt='img' />
            </div>
          ))
        )}
      </LayoutOne>
    </Fragment>
  );
};

export default AllCategories;
