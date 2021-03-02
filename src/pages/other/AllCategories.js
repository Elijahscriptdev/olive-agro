// import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import { listCategories } from "../../redux/actions/categoriesActions";
import { listSubCategories } from "../../redux/actions/subCategoriesActions";
import { Link } from "react-router-dom";

const AllCategories = () => {
  const categoryList = useSelector((state) => state.categoryList);
  const { categories, error } = categoryList;
  const subCategoryList = useSelector((state) => state.subCategoryList);
  const { subCategories } = subCategoryList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCategories());
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
        {/* {categories.map((category, id) => (
          <div key={id}>
            <h1 className='bg-success'>{category.name}</h1>
            <img src={category.imageUrl} alt='img' />
            {subCategories.map((subCategory, index) => {
              if (category.id === subCategories.category_id) {
                console.log(category.id);
                return (
                  <div key={index}>
                    <h1 className='bg-danger'>{subCategory.name}</h1>
                  </div>
                );
              }
            })}
          </div>
        ))} */}
        {categories.map((category, id) => {
          return (
            <div key={id}>
              <h1 className='bg-success'>{category.name}</h1>
              {subCategories.map((sub, id) => {
                if (category._id === sub.category_id) {
                  return (
                    <div key={id}>
                      <Link className='bg-danger'>{sub.name}</Link>
                      {console.log(category._id)}
                    </div>
                  );
                }
              })}
            </div>);
        })}
      </LayoutOne>
    </Fragment>)
}

export default AllCategories;
