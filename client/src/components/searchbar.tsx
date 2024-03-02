import { FaLocationArrow } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

function Searchbar() {
  return (
    <div className={'searchbar relative  w-9/12  -top-16 z-50 pb-5 p-2 grid grid-rows-[auto,1fr] mx-auto text-white rounded-2xl mr-auto max-md:m-0 max-md:w-full'}>
      <div className={'bg-orange col-span-2 rounded-tl-xl rounded-tr-xl text-center font-custom p-1 text-xl capitalize font-bold flex items-center justify-center tracking-wide  bg-findshap bg-contain w-full bg-center h-16 max-md:h-full max-md:py-2 '}> Discover your forever companion with just a click !</div>
      <div
        className={" row-start-2 rounded-bl rounded-br bg-dbleu bg-blueshap bg-center bg-contain items-center col-span-2 grid grid-cols-[50px,1fr,10px,50px,1fr,50px] gap-2 p-2 max-md:grid-rows-[1fr,2px,1fr] max-md:grid-cols-[0.2fr,1fr,0.2fr] "}>
        <div className={"bg-orange border-2 border-transparent rounded bg-findshap bg-contain w-full bg-center h-12 flex items-center  justify-center text-xl max-md:col-start-1 max-md:row-start-1"}><FaLocationArrow /></div>
        <input
          className={"pl-2 font-bold capitalize text-wblue col-start-2 rounded outline-none h-12  border-2 border-transparent hover:border-orange transition-all duration-500 max-md:col-start-2 max-md:row-start-1"}>
        </input>
        <div
          className={"w-2 h-2  rounded bg-orange max-md:col-span-2 max-md:row-start-2 max-md:w-full max-md:h-1 "}></div>
        <input
          className={"pl-2 font-bold  capitalize text-wblue  col-start-5 rounded outline-none h-12  border-2 border-transparent hover:border-orange transition-all duration-500 max-md:col-start-2 max-md:row-start-3"}>
        </input>
        <div
          className={"col-start-4 row-start-1 bg-orange border-2 border-transparent rounded bg-findshap bg-contain w-full bg-center h-12 flex items-center  justify-center text-xl max-md:col-start-1 max-md:row-start-3"}><MdOutlinePets /></div>
        <button className={"bg-orange col-start-6 border-2 border-transparent rounded bg-findshap bg-contain w-full bg-center h-12 max-md:h-full flex items-center  justify-center max-md:col-start-3 max-md:row-span-3 "}><IoSearch className={'text-2xl'} /></button>
      </div>
    </div>
  );
}

export default Searchbar;