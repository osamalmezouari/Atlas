// import React from "react";

import { CiSettings } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { MdOutlinePets } from "react-icons/md";

function AdoptionListBox() {
  return (
    <>
      <div
        className={'img drop-shadow-xl bg-adoptionlist border-[1px] border-dbleu -z-10 bg-cover w-full m-auto   bg-center rounded-tl rounded-tr h-[350px]'}>
        <div className={'w-full h-full bg-dbleu opacity-20 flex items-center justify-center'}>
          <button
            className={"capitalize text-xl text-white row-start-3 flex gap-2 items-center bg-orange w-fit py-2 px-2 rounded-xl opacity-[150] cursor-pointer transition-all duration-700   hover:bg-dbleu  "}>Love
            Begins
            <div className={"rotate-90 text-2xl"}><MdOutlinePets /></div>
          </button>
        </div>
      </div>
      <div
        className={"adoption_info drop-shadow-xl border-[1px] border-dbleu  w-full m-auto rounded-bl rounded-br relative bg-white px-2 py-4 bg-findshap bg-contain"}>
        <p
          className={"name text-center font-custom font-bold text-3xl text-dbleu p-2 hover:text-orange transition-all duration-700 cursor-pointer "}>Mars</p>
        <div className={'flex justify-between'}>
          <p className={'breed grid grid-cols-[auto,1fr] gap-x-1 items-center text-[14px] text-gray-600'}><CiSettings />Husky
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