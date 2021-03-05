import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listProducts } from "../../redux/actions/productsActions";

const SingleProduct = ({ location }) => {
  const { id } = useParams();
  const productList = useSelector((state) => state.productList);
  const { products, loading } = productList;
  const dispatch = useDispatch();

  const matchedProduct = products.filter((product) => {
    if (product._id === id) {
      return product;
    }
  });

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <div>
      {loading ? (
        <div>loading......</div>
      ) : (
        matchedProduct.map((product) => {
          return (
            <div key={product._id} className='product-img'>
              <img
                className='default-img mt-4'
                src={process.env.PUBLIC_URL + product.imageUrl}
                alt=''
              />
              <h4>{product.name}</h4>
              <p>₦{product.price_range}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Category: {product.category_name}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SingleProduct;
