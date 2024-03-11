// import React from "react";

import { CiSettings } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import '../styles/index.css'

function AdoptionListBox() {
  return (
    <>
      <div
        className={'img drop-shadow-xl bg-adoptionlist border-[2px] border-orange -z-10 bg-cover w-full m-auto   bg-center rounded-tl rounded-tr h-[350px]'}>
      </div>
      <div
        className={"adoption_info drop-shadow-xl border-[2px] border-orange  w-full m-auto rounded-bl rounded-br relative bg-white px-2 py-4 bg-findshap bg-contain"}>
        <div className={'flex justify-between items-center  '}>
          <p
            className={"name text-center font-custom font-bold text-3xl text-dbleu p-2 hover:text-orange transition-all duration-700 cursor-pointer "}>Mars</p>
          <button className={'text-white font-bold bg-orange h-max p-1 rounded hover:bg-dbleu capitalize transition-all duration-500'}>love Begin</button>
        </div>
        <div className={"flex justify-between"}>
          <p className={"breed grid grid-cols-[auto,1fr] gap-x-1 items-center text-[14px] text-gray-600"}><CiSettings />Husky
          </p>
          <p className={'birth grid grid-cols-[auto,1fr] gap-x-1 items-center text-[14px] text-gray-600'}>
            <IoCalendarOutline />Birth : 2021</p>
        </div>
        <div className={'h-[0.1px] m-auto mt-2 mb-2 bg-gray-600 w-11/12'}></div>
        <div className={'flex justify-between'}>
          <p className={'city grid grid-cols-[auto,1fr] gap-x-1 items-center text-[14px] text-gray-600'}><TbWorld />Rabat
          </p>
          <p className={'price text-[14px] text-gray-600'}>Total Price : Free</p>
        </div>
      </div>
    </>

  );
}

export default AdoptionListBox;