import { FaCat, FaLocationArrow } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";

function Searchbar() {
  return (
    <div className={'searchbar pb-5 px-2 grid grid-cols-[300px,300px] grid-rows-2 mb-12 w-max m-auto text-white rounded-2xl '}>
      <div className={'bg-orange col-span-2 rounded-tl-xl rounded-tr-xl text-center font-custom text-xl capitalize font-bold pt-5 tracking-wide  bg-findshap bg-contain w-full bg-center h-full '}> Discover your forever companion with just a click !</div>
      <div
        className={' row-start-2 bg-dbleu items-center col-span-2 grid grid-cols-[50px,1fr,2px,50px,1fr] gap-2 justify-between p-2  rounded-bl-xl rounded-br-xl '}>
        <div
          className={'bg-orange border-2 border-transparent rounded bg-findshap bg-contain w-full bg-center h-full flex items-center  justify-center text-xl'}>
          <FaLocationArrow /></div>
        <select
          className={"col-start-2 cursor-pointer  rounded outline-none w-ful h-12  border-2 border-transparent hover:border-orange transition-all duration-500"}>
          <option className={""}>fff</option>
        </select>
        <div className={'w-1 h-full rounded bg-orange'}></div>
        <select
          className={"col-start-5 cursor-pointer rounded outline-none w-ful h-12  border-2 border-transparent hover:border-orange transition-all duration-500"}>
          <option className={""}>fff</option>
        </select>
        <div
          className={'col-start-4 row-start-1 bg-orange border-2 border-transparent rounded bg-findshap bg-contain w-full bg-center h-full flex items-center  justify-center text-xl'}><MdOutlinePets /></div>
      </div>
    </div>
  );
}

export default Searchbar;