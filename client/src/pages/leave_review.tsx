// import React from "react";
import Navbar from "../components/navbar.tsx";
// import { RiMessage3Fill } from "react-icons/ri";
import { BsFillSendCheckFill } from "react-icons/bs";

function LeaveReview() {
  return (
    <div className={' bg-about bg-no-repeat bg-center font-custom capitalize font-bold '}>
      <Navbar /> {/*display just the sign and make the dream pets and paws cart hidden*/}
      <div className={'relative flex justify-center items-center h-screen max-md:pt-20 max-md:p-2 '}>
        <form
          className={"bg-rev bg-contain grid-cols-1 grid grid-rows w-[450px] h-[450px] rounded-xl p-4 hover:shadow-2xl transition-all duration-1000 border-orange border-2 "}>
          {/*<div className={'bg-about w-[140px] h-[140px] rounded-full absolute top-20 flex items-center justify-center '}><div className={'bg-logo bg-cover bg-center border-2 border-orange w-[125px] h-[125px] rounded-full  '}></div></div>*/}
          <select
            className={"row-start-2 pl-2 outline-none h-12 border-2 text-orange cursor-pointer hover:border-dbleu duration-500 transition-all rounded"}>
            <option>
              Select the target
            </option>
          </select>
          <select
            className={"row-start-3 pl-2 outline-none h-12 border-2 text-orange cursor-pointer hover:border-dbleu duration-500 transition-all rounded"}>
            <option>
              Rate Point
            </option>
          </select>
          <textarea
            className={"p-2 row-start-4 pl-2 outline-none h-12 border-2  hover:border-dbleu duration-100 max-h-[160px] min-h-[160px] transition-all rounded"} maxLength={120}>
          </textarea>
          <div className={"row-start-4"}>
          </div>
          <button
            className={"capitalize flex items-center justify-center gap-x-4  border-2 rounded text-dbleu hover:text-white hover:bg-orange transition-all duration-500 border-orange h-12 row-start-5 bg-findshap bg-contain"}
            type={"submit"} > Send <BsFillSendCheckFill />
          </button>

        </form>
        {/*<div className={'img bg-login bg-cover bg-center w-full h-full border-wblue border-4 rounded-2xl bg-no-repeat'}></div>*/}
      </div>
    </div>
  );
}

export default LeaveReview;