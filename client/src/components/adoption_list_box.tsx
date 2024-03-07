// import React from "react";

import { CiSettings } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

function AdoptionListBox() {
  return (
    <div className={'max-w-[370px] h-[450px] '}>
      <div className={'img drop-shadow-xl bg-adoptionlist border-[1px] border-dbleu absolute -z-10 bg-cover w-full max-w-[370px] bg-center rounded h-[350px]'}></div>
      <div className={'adoption_info drop-shadow-xl border-[1px] border-dbleu  w-10/12 m-auto rounded relative top-[300px] bg-white px-2 py-4 bg-findshap bg-contain'}>
        <p className={'name text-center font-custom font-bold text-3xl text-dbleu p-2 '}>Mars</p>
        <div className={'flex justify-between'}>
          <p className={'breed grid grid-cols-[auto,1fr] gap-x-1 items-center text-[14px] text-gray-600'}><CiSettings />Husky</p>
          <p className={'birth grid grid-cols-[auto,1fr] gap-x-1 items-center text-[14px] text-gray-600'}><IoCalendarOutline  />Birth : 2021</p>
        </div>
        <div className={'h-[0.1px] m-auto mt-2 mb-2 bg-gray-600 w-11/12'}></div>
        <div className={'flex justify-between'}>
          <p className={'city grid grid-cols-[auto,1fr] gap-x-1 items-center text-[14px] text-gray-600'}><TbWorld />Rabat</p>
          <p className={'price text-[14px] text-gray-600'}>Total Price : Free</p>
        </div>
      </div>
    </div>
  );
}

export default AdoptionListBox;