import React, { useState } from "react";
// import { FaPlus } from "react-icons/fa";
import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";

const Category = () => {
  const [showSubCatOne, setShowSubCatOne] = useState(false);
  const [showBrands, setShowBrands] = useState(false);
  const items = [
    {
      _id: 990,
      title: "Super Foods",
      icons: true,
    },
    {
      _id: 991,
      title: "Premium Products",
      icons: true,
    },
    {
      _id: 992,
      title: "Healthy Delights",
      icons: true,
    },
  ];
  return (
    <div className="w-full">
      <div onClick={() => setShowBrands(!showBrands)} className="cursor-pointer">
      <NavTitle title="Shop by Category" icons={true} />
      </div>
      {
      showBrands &&(
        <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-primeColor">
          {items.map(({ _id, title, icons }) => (
            <li
              key={_id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between"
            >
              {title}
              {icons && (
                <span
                  onClick={() => setShowSubCatOne(!showSubCatOne)}
                  className="text-[10px] lg:text-xs cursor-pointer text-gray-700 hover:text-primeColor duration-300"
                >
                  <ImPlus />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
      )
              }
    </div>
  );
};

export default Category;
