import {FaLocationArrow } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";

function Searchbar() {
  return (
    <div className={'searchbar pb-5 px-2 grid grid-cols-2 grid-rows-2 w-[700px] m-auto text-white rounded-2xl mr-auto max-md:w-full max-md:grid-rows-[auto,1fr]'}>
      <div className={'bg-orange col-span-2 rounded-tl-xl rounded-tr-xl text-center font-custom text-xl capitalize font-bold flex items-center justify-center tracking-wide  bg-findshap bg-contain w-full bg-center h-full max-md:py-2 '}> Discover your forever companion with just a click !</div>
      <div className={' row-start-2 bg-dbleu bg-blueshap bg-center bg-contain items-center col-span-2 grid grid-cols-[50px,1fr,10px,50px,1fr] gap-2 justify-between p-2  rounded-bl-xl rounded-br-xl max-md:grid-rows-[1fr,2px,1fr] max-md:grid-cols-[50px,1fr] '}>
        <div className={'bg-orange border-2 border-transparent rounded bg-findshap bg-contain w-full bg-center h-12 flex items-center  justify-center text-xl max-md:col-start-1 max-md:row-start-1' }><FaLocationArrow /></div>
        <input
          className={"pl-2 font-bold capitalize text-wblue col-start-2 rounded outline-none w-ful h-12  border-2 border-transparent hover:border-orange transition-all duration-500 max-md:col-start-2 max-md:row-start-1"}>
          {/*<option className={""}>fff</option>*/}
        </input>
        <div className={'w-2 h-2  rounded bg-orange max-md:col-span-2 max-md:row-start-2 max-md:w-full max-md:h-1 '}></div>
        <input
          className={"pl-2 font-bold  capitalize text-wblue  col-start-5 rounded outline-none w-ful h-12  border-2 border-transparent hover:border-orange transition-all duration-500 max-md:col-start-2 max-md:row-start-3"}>
          {/*<option className={""}>fff</option>*/}
        </input>
        <div className={'col-start-4 row-start-1 bg-orange border-2 border-transparent rounded bg-findshap bg-contain w-full bg-center h-12 flex items-center  justify-center text-xl max-md:col-start-1 max-md:row-start-3'}><MdOutlinePets /></div>
      </div>
    </div>
  );
}

export default Searchbar;