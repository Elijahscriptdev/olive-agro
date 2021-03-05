import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProducts } from "../../redux/actions/productsActions";

const DisplayProductsFromSub = ({ location }) => {
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
    <div>
      {loading ? (
        <div>loading......</div>
      ) : !matchedProductFromCat ? (
        <div>No product added to this category. Please check back later</div>
      ) : (
        matchedProductFromCat.map((product, id) => {
          return (
            <div key={id} className='product-img'>
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
          );
        })
      )}
    </div>
  );
};

export default DisplayProductsFromSub;
