import React from "react";
import { Store } from "../../../public/Svg";
import { SlBasket } from "react-icons/sl";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  console.log(item);
  return (
    <div className=" rounded rounded-lg  group m-4 ">
      <div className="bg-[#FBFBFB] relative overflow-hidden group-hover:border-t-[2px] border-t-[2px] border-t-[#4440] group-hover:border-t-[#46a359a1] ">
        <img
          className="w-full h-[330px] object-cover  group-hover:opacity-40"
          src={item.image_url}
          alt={item.common_name}
        />
        <div className=" absolute w-[100px] -bottom-[20px] group-hover:bottom-[20px] transition-all duration-300 left-[33%]  h-[20px] flex gap-[20px]">
          <SlBasket />
          <FaRegHeart />
          <Link to={`/card/${item.common_name}`}>
            <IoSearch />
          </Link>
        </div>
      </div>
      <div className=" pt-2">
        <div className="font-bold text-xl ">{item.common_name}</div>
        <p className="text-green-500 text-base font-semibold">${item.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
