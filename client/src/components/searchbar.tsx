import { FaLocationArrow } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import {useNavigate} from "react-router-dom";

function Searchbar() {
   const navigate =  useNavigate()

  return (
    <>
      <div
        className={'bg-orange col-span-2 rounded-tl-xl rounded-tr-xl text-center font-custom p-1 text-xl capitalize font-bold flex items-center justify-center tracking-wide  bg-findshap bg-contain w-full bg-center h-16 max-md:h-full max-md:py-2 '}> Discover
        your forever companion with just a click !
      </div>
      <div
        className={" rounded-bl rounded-br bg-dbleu bg-blueshap bg-center bg-contain items-center col-span-2 grid grid-cols-[50px,1fr,10px,50px,1fr,50px] gap-2 p-2 max-md:grid-rows-[1fr,2px,1fr] max-md:grid-cols-[0.2fr,1fr,0.2fr] "}>
        <div
          className={"bg-orange border-2 border-transparent rounded bg-findshap bg-contain w-full bg-center h-12 flex items-center  justify-center text-xl max-md:col-start-1 max-md:row-start-1"}>
          <FaLocationArrow />
        </div>
        <input
            name={'location'}
          className={"pl-2 font-bold capitalize text-wblue rounded outline-none h-12  border-2 border-transparent hover:border-orange transition-all duration-500 max-md:col-start-2 max-md:row-start-1"}>
        </input>
        <div className={"w-2 h-2  rounded bg-orange max-md:col-span-2 max-md:row-start-2 max-md:w-full max-md:h-1 "}></div>
          <div
              className={"bg-orange border-2 border-transparent rounded bg-findshap bg-contain w-full bg-center h-12 flex items-center  justify-center text-xl max-md:col-start-1 max-md:row-start-3"}>
              <MdOutlinePets />
          </div>
          <select
              name={'animal-class'}
              className={"pl-2 font-bold  capitalize text-wblue  col-start-5 rounded outline-none h-12  border-2 border-transparent hover:border-orange transition-all duration-500 max-md:col-start-2 max-md:row-start-3"}>
              <option className={'h-16'}  hidden={true}>Class</option>
              <option value={'Cat'} >Cat</option>
              <option value={'Dog'}>Dog</option>
              <option value={'Bird'}>Bird</option>
              <option value={'Rabbit'}>Rabbit</option>
              <option value={'Hamster'}>Hamster</option>
          </select>
          <button
              className={"bg-orange  border-2 border-transparent rounded bg-findshap bg-contain w-full bg-center h-12 max-md:h-full flex items-center  justify-center max-md:col-start-3 max-md:row-span-3 "}>
              <IoSearch className={'text-2xl'} onClick={()=>navigate('/Atlas/Adoptions')}/>
          </button>
      </div>
        <div className={'w-full h-32  bg-white col-span-2  rounded mt-2 grid grid-cols-1 '}>

        </div>
    </>

  );
}

export default Searchbar;