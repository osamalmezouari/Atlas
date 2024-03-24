import { FaLocationArrow } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../common/StoreState.ts";
import {useEffect, useState} from "react";
import {findAllAdoptions, findAllLocations, findFilteredAdoptions} from "../features/adoption/adoptionSlice.ts";
import {AppDispatch} from "../app/store.ts";

function Searchbar() {
   const navigate =  useNavigate()
    const dispatch: AppDispatch = useDispatch()
    const locations : string [] = useSelector((state : StoreState)=> state.Adoptions.AllLocations)
    const [formData,setFormData] = useState<{
        Class:string,
        location:string
    }>({
        Class:"",
        location:""
    })
    const HandlerChange = (e)=>{
       const target = e.target
        setFormData({
           ...formData,
           [target.name]:target.value
       })
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData)
        dispatch(findFilteredAdoptions({ classParam: formData.Class, locationParam: formData.location }));
        navigate('/Atlas/Adoptions');
    }

    useEffect(() => {
        dispatch(findAllAdoptions())
        dispatch(findAllLocations())
    }, [dispatch]);


  return (
    <form onSubmit={(event)=>handleSubmit(event)}>
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
          <select
              onChange={(event) => HandlerChange(event)}
              name={'location'}
              className={"pl-2 font-bold capitalize text-wblue rounded outline-none h-12  border-2 border-transparent hover:border-orange transition-all duration-500 max-md:col-start-2 max-md:row-start-1"}

          ><option value="" disabled selected>Select location</option>
              {locations.map((Location, index) => (
                  <option key={index} value={Location}>{Location}</option>
              ))}
          </select>
          <div
              className={"w-2 h-2  rounded bg-orange max-md:col-span-2 max-md:row-start-2 max-md:w-full max-md:h-1 "}></div>
          <div
              className={"bg-orange border-2 border-transparent rounded bg-findshap bg-contain w-full bg-center h-12 flex items-center  justify-center text-xl max-md:col-start-1 max-md:row-start-3"}>
              <MdOutlinePets/>
          </div>
          <select
              onChange={(event) => HandlerChange(event)}

              name={'Class'}
              className={"pl-2 font-bold  capitalize text-wblue  col-start-5 rounded outline-none h-12  border-2 border-transparent hover:border-orange transition-all duration-500 max-md:col-start-2 max-md:row-start-3"}>
              <option value="" disabled selected>Select animal</option>
              <option value={'cat'}>Cat</option>
              <option value={'dog'}>Dog</option>
              <option value={'bird'}>Bird</option>
              <option value={'rabbit'}>Rabbit</option>
              <option value={'hamster'}>Hamster</option>
          </select>
          <button
              type={'submit'}
              className={"bg-orange  border-2 border-transparent rounded bg-findshap bg-contain w-full bg-center h-12 max-md:h-full flex items-center  justify-center max-md:col-start-3 max-md:row-span-3 "}>
              <IoSearch className={'text-2xl'} onClick={()=>navigate('/Atlas/Adoptions')}/>
          </button>
      </div>
    </form>

  );
}

export default Searchbar;