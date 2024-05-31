import React from "react";

const data = [
  { name: "House Plants", number: "9" },
  { name: "Potter Plants", number: "9" },
  { name: "Seeds", number: "9" },
  { name: "Small Plants", number: "9" },
  { name: "Big Plants", number: "9" },
  { name: "Succulents", number: "9" },
  { name: "Trerrariums", number: "9" },
  { name: "Gardening", number: "9" },
  { name: "Accessories", number: "9" },
];

// House Plants

const Category = () => {
  return (
    <div className="">
      <h2 className="text-[20px] font-bold">Categories</h2>
      <div className="px-3">
        {data.map((item) => (
          <span className="flex justify-between text-[#3D3D3D] hover:text-[#46A358] font-semibold ">
            <p className="py-2  ">{item.name}</p>
            <p>({item.number})</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Category;
