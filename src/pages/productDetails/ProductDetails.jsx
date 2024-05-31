import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../../data";
import PopularProducts from "../../components/popularProducts/PopularProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const product = data.find((item) => item.common_name == id);
  console.log(product);
  return (
    <div className="lg:container mx-auto px-5">
      <div className="grid grid-cols-2 gap-[40px]">
        <img
          src={product.image_url}
          alt=""
          className="w-[600px] h-[500px] object-cover"
        />
        <div className="">
          <h2>{product.common_name}</h2>
          <div>
            <h3>${product.price}</h3>
            <div className=""></div>
          </div>
          <hr />
          <p>Short Description:</p>
          <p>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.{" "}
          </p>
          <p>Size:</p>

          <p>SKU: 192132</p>
          <p>Categories: Potter Plants</p>
          <Link to={"/cart"} className="px-5 py-3 border rounded-lg">
            add to card
          </Link>
          <p>Tags: Home, Garden, Plants</p>
          <p>Share this products:</p>
        </div>
      </div>
      <div className="">
        <div className="mt-10">
          <div className="flex gap-4">
            <button className="text-[16px] font-bold pt-[20px] pb-[5px] text-[#46A358] border-b-[2px] border-b-[#46A358] ">
              Product Description
            </button>
            <button className="text-[16px] font-bold pt-[20px] pb-[5px] text-[#333]">
              Reviews (19)
            </button>
          </div>
          <div className="pt-3">
            <p>
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam fringilla augue nec est tristique auctor. Donec non est at
              libero vulputate rutrum. Morbi ornare lectus quis justo gravida
              semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit
              id nulla. <br /> <br /> Pellentesque aliquet, sem eget laoreet
              ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget
              velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce
              aliquam, purus eget sagittis vulputate, sapien libero hendrerit
              est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed tempor, lorem et placerat
              vestibulum, metus nisi posuere nisl, in accumsan elit odio quis
              mi. Cras neque metus, consequat et blandit et, luctus a nunc.
              Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground.
            </p>
            <h3 className="text-[16px] font-bold pt-[20px] pb-[5px]">
              Living Room:
            </h3>
            <p>
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <h3 className="text-[16px] font-bold pt-[20px] pb-[5px]">
              Dining Room:
            </h3>
            <p>
              The benefits of houseplants are endless. In addition to cleaning
              the air of harmful toxins, they can help to improve your mood,
              reduce stress and provide you with better sleep. Fill every room
              of your home with houseplants and their restorative qualities will
              improve your life.
            </p>
            <h3 className="text-[16px] font-bold pt-[20px] pb-[5px]">
              Office:
            </h3>
            <p>
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 mb-[80px] popular">
        <PopularProducts />
      </div>
    </div>
  );
};

export default ProductDetails;
