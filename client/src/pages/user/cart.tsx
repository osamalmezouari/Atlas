import Navbar from "../../components/navbar.tsx";
import { FaPlus} from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../app/store.ts";
import {findAllAdoptions} from "../../features/adoption/adoptionSlice.ts";
import {StoreState} from "../../../Types/StoreState.ts";
import {FaDeleteLeft} from "react-icons/fa6";



function Cart() {
  const navigate = useNavigate()
  const dispatch : AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(findAllAdoptions())
  }, [dispatch]);
  const AllAdoptions = useSelector((state:StoreState)=>state.Adoptions.Adoptions.data)
  const ExistingItemsString = localStorage.getItem('CartItems');
  const Items : string [] | null = ExistingItemsString ? JSON.parse(ExistingItemsString) : [];

  const AdoptionsCart = Items?.map((ItemId)=>{
    return AllAdoptions.find((Adoption)=>{
      return Adoption.id === ItemId
    })
  })
  const RemoveItemFromCart = (ItemIdtoRemove : string | undefined)=>{
   const NewItemsWithMatchingRemoved = Items?.filter((item)=>item!==ItemIdtoRemove)
    localStorage.setItem('CartItems',JSON.stringify(NewItemsWithMatchingRemoved))
    window.location.reload()
  }
  const RemoveAll = ()=> {
    localStorage.setItem('CartItems', JSON.stringify([]))
    console.log("...")
    window.location.reload()
  }

  return (
      <>
        <Navbar/>
        <div className={'h-32 bg-about'}></div>
        <div className={`bg-about min-h-[calc(100vh-130px)]`}>

          <div className={'personal-content p-6 flex gap-x-5 max-w-[800px] m-auto'}>
            <div className={'page-content w-full h-full'}>
              <div className={'flex items-center justify-between bg-white p-4 rounded'}>
                <h1 className={"text-xl font-custom capitalize font-bold text-dbleu"}>My Pets Cart</h1>
                <div
                    className={'h-full bg-dbleu p-2 rounded text-white cursor-pointer hover:bg-orange transition-all duration-500'}
                    onClick={() => navigate('/Atlas/Adoptions')}
                >
                  <FaPlus/></div>
              </div>
              <div className={"w-full mt-2 mb-2 h-[3px] bg-orange block rounded"}></div>
              <div className={'grid grid-cols-2 mb-3 max-md:grid-cols-1 gap-3'}>
                {AdoptionsCart?.map((singleAdoption) => {
                  return <div
                      className={'w-full bg-white h-full p-2 grid items-center grid-cols-1 gap-y-3 grid-rows-[auto,auto,auto]'}>
                    <div className={'bg-adoptionlist w-full bg-center bg-cover rounded h-[180px]'}></div>
                    <div className={"text-dbleu w-full grid gap-y-2 font-custom font-bold"}>
                      <div className={"grid grid-cols-[80px,1fr] gap-x-3"}><span
                          className={"font-bold text-white bg-orange rounded p-1 text-center text-[12px]"}>Name </span>
                        <p>{singleAdoption?.animal_name}</p></div>
                      <div className={"grid grid-cols-[80px,1fr] gap-x-3"}><span
                          className={"font-bold text-white bg-orange rounded p-1 text-center text-[12px]"}>By </span>
                        <p>{singleAdoption?.animal_name + " " + singleAdoption?.lastname}</p></div>
                      <div className={"grid grid-cols-[80px,1fr] gap-x-3"}><span
                          className={"font-bold text-white bg-orange rounded p-1 text-center text-[12px]"}>City </span>
                        <p>{singleAdoption?.location}</p></div>
                    </div>
                    <button className={"text-dbleu flex justify-between"}>
                      <p></p>
                      <div className={'flex gap-x-1'}>
                        <GrView
                            onClick={() => navigate(`/Atlas/Adoptions/${singleAdoption?.id}`)}
                            className={'self-end text-dbleu p-2 w-8 h-8 rounded border-2 border-dbleu hover:bg-orange hover:border-orange hover:text-white transition-all duration-500 cursor-pointer '}/>
                        <AiFillDelete
                            onClick={() => RemoveItemFromCart(singleAdoption?.id)}
                            className={'self-end text-dbleu p-2 w-8 h-8 rounded border-2 border-dbleu hover:bg-orange hover:border-orange hover:text-white transition-all duration-500 cursor-pointer '}/>
                      </div>
                    </button>
                  </div>
                })}
              </div>
              <div className={'flex items-center justify-between bg-white p-4 rounded'}>
                <h1 className={"text-xl font-custom capitalize font-bold text-dbleu"}>Clear All</h1>
                <div className={'h-full bg-dbleu p-2 rounded text-white cursor-pointer hover:bg-orange transition-all duration-500'}>
                  <FaDeleteLeft  onClick={RemoveAll}/></div>
              </div>
            </div>
          </div>
        </div>
      </>

  );
}

export default Cart;