// import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import { listSubCategories } from "../../redux/actions/subCategoriesActions";

const SubCategories = () => {
  const subCategoryList = useSelector((state) => state.subCategoryList);
  const { subCategories, error } = subCategoryList;
  const dispatch = useDispatch();
  console.log("sub", subCategories);

  useEffect(() => {
    dispatch(listSubCategories());
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
          subCategories.map((subCategory, index) => (
            <div key={index}>
              <h1>{subCategory.name}</h1>
              {/* <img src={subCategory.imageUrl} alt='img' /> */}
            </div>
          ))
        )}
      </LayoutOne>
    </Fragment>
  );
};

export default SubCategories;
