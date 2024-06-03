import React, { useState } from "react";
import logo from "../../../public/logo.png";
import store from "../../../public/store.png";
import { IoSearch } from "react-icons/io5";
import { RxExit } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { data } from "../../data";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/card/${id}`);
    setSearch("");
  };

  const filtered = data.filter((fill) =>
    fill.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="w-full fixed bg-[#fff] shadow-sm z-[999]">
      <div className="lg:container mx-auto px-5 ">
        <div className="flex justify-between items-center py-3">
          <Link to={"/"} className="">
            <img src={logo} alt="" />
          </Link>
          <div className="flex gap-[50px]  ">
            <li className="text-[#3D3D3D] hover:font-bold border-b border-b-[3px] border-[#0000] pb-2 hover:border-[#46A358] cursor-pointer">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-[#3D3D3D] hover:font-bold  border-b border-b-[3px] border-[#0000] pb-2 hover:border-[#46A358] cursor-pointer">
              Shop
            </li>
            <li className="text-[#3D3D3D] hover:font-bold  border-b border-b-[3px] border-[#0000] pb-2 hover:border-[#46A358] cursor-pointer">
              Plant Care
            </li>
            <li className="text-[#3D3D3D] hover:font-bold  border-b border-b-[3px] border-[#0000] pb-2 hover:border-[#46A358] cursor-pointer">
              Blogs
            </li>
          </div>
          <div className="flex  items-center gap-[30px] relative">
            {/* <exit /> */}
            <div className="group flex items-center gap-1 group-hover:border-[1px] border py-2 px-4 border-[#000]">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="group-hover:w-[200px] w-0 outline-none  transition-all "
              />
              <div className="">
                <IoSearch />
              </div>
              {search && (
                <div
                  className={`absolute top-[40px] left-0 ${
                    search ? "w-[650px]" : "group-hover:w-[200px]"
                  } overflow-y-scroll overflow-hidden h-[300px] border bg-white z-999`}
                >
                  {filtered.map((item) => (
                    <div
                      className="flex py-2"
                      onClick={() => handleNavigate(item.id)}
                      key={item.img}
                    >
                      <img
                        src={item.img}
                        className="w-[60px] h-[40px]"
                        alt=""
                      />
                      <h3>{item.name}</h3>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link to={"/cart"} className="">
              <img src={store} alt="" />
            </Link>
            {/* <Store /> */}
            <button className="bg-[#46A358] text-[#fff] flex items-center py-2 px-[17px] rounded-[6px] gap-2">
              {/* <Search /> */}
              <RxExit />
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
