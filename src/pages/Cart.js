import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const productData = useSelector((state) => state.onlinesshop.productData);
  console.log(productData);
  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
};

export default Cart;
