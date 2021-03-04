import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/productsActions";

const DisplayProductsFromSub = () => {
  const productList = useSelector((state) => state.productList);
  console.log("checking", productList)
  const { products, loading } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <div>
      {loading ? (
        <div>loading......</div>
      ) : (
        products.map((product, id) => {
          return (
            <div key={id} className='product-img'>
              <img
                className='default-img mt-4'
                src={process.env.PUBLIC_URL + product.imageUrl}
                alt=''
              />
              <h4>{product.name}</h4>
              <h4>{product.category_name}</h4>
            </div>
          );
        })
      )}
    </div>
  );
};

export default DisplayProductsFromSub;
