import React, { useContext, useState } from "react";
import { ProductsContext } from "../../context/AllProductsProvider";
import ProductCard from "./ProductCard";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import Category from "./Category";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
} from "@mui/material";
import saleImg from "../../../public/sale.png";

function valuetext(value) {
  return `${value}°C`;
}

const ProductCards = () => {
  const { products } = useContext(ProductsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of items per page
  const [age, setAge] = React.useState("");

  const handleSelect = (event) => {
    setAge(event.target.value);
  };

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Slice products for the current page
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [value, setValue] = React.useState([0, 40]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="lg:container mx-auto px-5 mt-[100px]">
      <div className="flex justify-between gap-7">
        <div className="flex-[.3]  bg-[#FBFBFB]">
          <div className="p-5">
            <Category />
            <div className="">
              <Box sx={{ width: 300 }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  min={0}
                  max={1000}
                />
              </Box>
              <div className="flex flex-col">
                Price:{" "}
                <span className="text-[#46A358] font-bold">$32-$877</span>
                <div className="mt-4">
                  <button className="px-5 py-3 bg-[#46A358] font-bold text-white rounded-lg">
                    Filter
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-[20px]">
              <h2 className="text-[20px] font-bold">Size</h2>
              <div className="px-3">
                <span className="flex justify-between text-[#3D3D3D] hover:text-[#46A358] font-semibold ">
                  <p className="py-2  ">Small</p>
                  <p>(14)</p>
                </span>
                <span className="flex justify-between text-[#3D3D3D] hover:text-[#46A358] font-semibold ">
                  <p className="py-2  ">Medium</p>
                  <p>(10)</p>
                </span>{" "}
                <span className="flex justify-between text-[#3D3D3D] hover:text-[#46A358] font-semibold ">
                  <p className="py-2  ">Large</p>
                  <p>(12)</p>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-[20px]">
            <img src={saleImg} alt="" />
          </div>
        </div>
        <div className="">
          <div className="flex justify-between px-2 items-center">
            <div className="flex items-center gap-[37px]">
              <button className="font-bold border-b-[2px] border-b-[#46A358] py-1 text-[#46A358]">
                All Plants
              </button>
              <button>New Arrivals</button>
              <button>Sale</button>
            </div>
            <div className="flex items-center">
              <p>Short by:</p>
              <select className=" p-2  focus:outline-none   focus:border-transparent">
                <option value="default sorting">Default sorting</option>
                <option value="default sorting">Default sorting</option>
                <option value="default sorting">Default sorting</option>
              </select>
            </div>
          </div>
          <div className="flex-1  grid grid-cols-3 gap-5">
            {currentProducts.map((item) => (
              <div className="w-[350px] h-[400px]">
                <ProductCard item={item} key={item.id} />
              </div>
            ))}
          </div>
          <div className="w-full flex justify-end my-4">
            <ResponsivePagination
              current={currentPage}
              total={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
              className="flex space-x-2"
              pageItemClassName="px-3 py-2 border rounded bg-white text-gray-800"
              activeItemClassName="px-3 py-2 border  rounded bg-[blue] text-white "
              previousLabel="<"
              nextLabel=">"
              previousClassName="px-3 py-2 border rounded bg-white text-gray-800"
              nextClassName="px-3 py-2 border rounded bg-white text-gray-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
