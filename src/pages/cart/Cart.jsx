import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import PopularProducts from "../../components/popularProducts/PopularProducts";

const products = [
  {
    id: 1,
    name: "Barberton Daisy",
    price: 119.0,
    quantity: 2,
    total: 238.0,
    sku: "1995751877966",
  },
  {
    id: 2,
    name: "Blushing Bromeliad",
    price: 139.0,
    quantity: 6,
    total: 834.0,
    sku: "1995751875065",
  },
  {
    id: 3,
    name: "Aluminum Plant",
    price: 179.0,
    quantity: 9,
    total: 1611.0,
    sku: "1995751877786",
  },
];

const Cart = () => {
  const [cart, setCart] = useState(products);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const shipping = 16.0;

  const handleCouponApply = () => {
    // Implement your coupon logic here
    if (coupon === "DISCOUNT10") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
    }
  };

  const subtotal = cart.reduce((sum, product) => sum + product.total, 0);
  const total = subtotal - subtotal * discount + shipping;

  const [quantity, setQuantity] = useState(0);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      //   onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="lg:container mx-auto px-5">
      <div className="flex flex-col md:flex-row justify-between p-4">
        <div className="w-full md:w-2/3">
          {/* <table className="min-w-full bg-white  border-gray-200 ">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-start ">Products</th>
                <th className="py-2 px-4 border-b text-start hidden sm:block">
                  Price
                </th>
                <th className="py-2 px-4 border-b text-start">Quantity</th>
                <th className="py-2 px-4 border-b text-start">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td className="py-2 px-4">
                    {product.name}
                    <div className="text-sm text-gray-500">
                      SKU: {product.sku}
                    </div>
                    <p className="sm:hidden block">
                      ${product.price.toFixed(2)}
                    </p>
                  </td>
                  <td className="py-2 px-4  ">${product.price.toFixed(2)}</td>
                  <td className="py-2 px-4 flex items-center">
                    <button
                      className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full focus:outline-none"
                      onClick={handleDecrease}
                    >
                      -
                    </button>
                    <span className="mx-2">{product.quantity}</span>
                    <button
                      className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full focus:outline-none"
                      onClick={handleIncrease}
                    >
                      +
                    </button>
                  </td>
                  <td className="py-2 px-4">${product.total.toFixed(2)}</td>
                  <td className="hidden sm:block">
                    <button>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
          <div className="bg-[#fbfbfb] ">
            <div className="flex border-b">
              <h2 className="flex-[.4]">Products</h2>
              <h2 className="flex-[.2] ">Price</h2>
              <h2 className="flex-[.2] ">Quantity</h2>
              <h2 className="flex-[.2] ">Total</h2>
            </div>
            {products.map((item) => (
              <div className="flex bg-[#fbfbfb] p-2 gap-3" key={item.id}>
                <div className="flex-[.4]">
                  <h2>{item.name}</h2>
                  <p>SKU: {item.sku}</p>
                </div>
                <div className="flex-[.2] flex items-center">${item.price}</div>
                <div className="flex-[.2] flex items-center">
                  <button
                    className="bg-[#46A358] text-white w-8 h-8 flex items-center justify-center rounded-full focus:outline-none"
                    onClick={handleDecrease}
                  >
                    -
                  </button>
                  <span className="mx-2">${item.quantity}</span>
                  <button
                    className="bg-[#46A358] text-white w-8 h-8 flex items-center justify-center rounded-full focus:outline-none"
                    onClick={handleIncrease}
                  >
                    +
                  </button>
                </div>
                <div className="flex-[.2] flex items-center justify-between ">
                  <p>{item.total}</p>
                  <IconButton>
                    <FaTrash size={20} height={20} />
                  </IconButton>
                </div>
              </div>
            ))}
          </div>
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
            <button className="w-full bg-gray-300 text-gray-700 p-2 mt-2 rounded">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
      <PopularProducts />
    </div>
  );
};

export default Cart;
