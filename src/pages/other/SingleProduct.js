import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsProducts } from "../../redux/actions/productsActions";

const SingleProduct = () => {
//   const productDetail = useSelector((state) => state.productDetail);
//   const { product, loading } = productDetail;
//   const dispatch = useDispatch();
//   console.log("here", productDetail);

  useEffect(() => {
    // dispatch(detailsProducts());
    // console.log(product)
  }, []);

  return <div>
      {/* {loading ? <div>Loading</div> : <div>{product.name}</div>}fffffff */}
      </div>;
};

export default SingleProduct;
