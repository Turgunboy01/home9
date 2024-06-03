import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { IconButton } from "@mui/material";
import PopularProducts from "../../components/popularProducts/PopularProducts";
import { removeItem, updateQuantity } from "../../redux/CardSlice";
// Import your actions

const Cart = () => {
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const shipping = 16.0;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.data); // Correct usage of useSelector

  const handleCouponApply = () => {
    // Implement your coupon logic here
    if (coupon === "greenShop") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
    }
  };

  const subtotal = cart.reduce((sum, product) => sum + product.totalPrice, 0);
  const total = subtotal - subtotal * discount + shipping;

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };
  const increaseQty = (cartProductId, currentQty) => {
    const newQty = currentQty + 1;
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const decreaseQty = (cartProductId, currentQty) => {
    const newQty = Math.max(currentQty - 1, 1);
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };
  console.log(cart);

  return (
    <div className="lg:container mx-auto px-5">
      <div className="flex flex-col md:flex-row justify-between p-4">
        <div className="w-full md:w-2/3 h-[400px]  overflow-y-scroll">
          {cart.length < 1 ? (
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="https://www.soulpharma.org/images/no-product-found.png"
                alt=""
                className="h-[400px]"
              />
            </div>
          ) : (
            <>
              <div className="bg-[#fbfbfb] ">
                <div className="flex border-b">
                  <h2 className="flex-[.4]">Products</h2>
                  <h2 className="flex-[.2] ">Price</h2>
                  <h2 className="flex-[.2] ">Quantity</h2>
                  <h2 className="flex-[.2] ">Total</h2>
                </div>

                {cart.map((item) => (
                  <div className="flex bg-[#fbfbfb] p-2 gap-3" key={item.id}>
                    <div className="flex-[.4] flex items-center">
                      <img
                        src={item.img}
                        className="w-[70px] h-[70px]"
                        alt=""
                      />
                      <div className="">
                        <h2>{item.name}</h2>
                        <p>SKU: {item.sku}</p>
                      </div>
                    </div>
                    <div className="flex-[.2] flex items-center">
                      ${item.price}
                    </div>
                    <div className="flex-[.2] flex items-center">
                      <button
                        className="bg-[#46A358] text-white w-8 h-8 flex items-center justify-center rounded-full focus:outline-none"
                        onClick={() => decreaseQty(item.id, item.quantity)}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="bg-[#46A358] text-white w-8 h-8 flex items-center justify-center rounded-full focus:outline-none"
                        onClick={() => increaseQty(item.id, item.quantity)}
                      >
                        +
                      </button>
                    </div>
                    <div className="flex-[.2] flex items-center justify-between ">
                      <p>${item.totalPrice.toFixed(2)}</p>
                      <IconButton onClick={() => handleRemoveItem(item.id)}>
                        <FaTrash size={20} height={20} />
                      </IconButton>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0 md:ml-4">
          <div className="bg-white p-4  border-gray-200">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Coupon Apply
              </label>
              <div className="flex mt-1 border border-[#46A358] overflow-hidden rounded-lg">
                <input
                  type="text"
                  className="w-full  p-2 rounded-l outline-none"
                  value={coupon}
                  placeholder="Enter coupon code here..."
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button
                  className="bg-[#46A358] text-white p-2 pr-[25px] pl-[35px] py-[12px]"
                  onClick={handleCouponApply}
                >
                  Apply
                </button>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between py-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Coupon Discount</span>
                <span>${(subtotal * discount).toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex justify-between py-2 font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-[#46A358] text-white p-2 mt-4 rounded">
              Proceed To Checkout
            </button>
            <button className="w-full  text-[#46A358] p-2 mt-2 rounded">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
      <div className="my-[100px]">
        <PopularProducts />
      </div>
    </div>
  );
};

export default Cart;
