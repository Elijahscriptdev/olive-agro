import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import { listProducts } from "../../redux/actions/productsActions";

const AllProducts = () => {
  const productList = useSelector((state) => state.productList);
  const { products, error } = productList;
  const dispatch = useDispatch();
  console.log("yyy", products.products);

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
        <h1>gtgtgygy</h1>
        {error ? (
          <div>{error}</div>
        ) : (
          products.products.map((product, index) => (
            <div key={index}>
              <h1>{product.status}</h1>
              <img src={product.imageUrl} alt='img' />
            </div>
          ))
        )}
      </LayoutOne>
    </Fragment>
  );
};

export default AllProducts;
