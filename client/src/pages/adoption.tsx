import Navbar from '../components/navbar'
import Searchbar from '../components/searchbar'
import Footer from "../components/footer.tsx";
import Subscribe from "../components/subscribe.tsx";
import {useEffect} from "react";
import {findAllAdoptions} from "../features/adoption/adoptionSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from '../app/store.ts'
import {TbWorld} from "react-icons/tb";
import {IoCalendarOutline} from "react-icons/io5";
import {CiSettings} from "react-icons/ci";
import {Adoptions} from "../../common/Adoption.ts";
import {useNavigate} from "react-router-dom";


export default function Adoption() {
    const dispatch : AppDispatch = useDispatch()
    const navigate = useNavigate()
    const AdoptionsState = useSelector((state:RootState)=>state.Adoptions)
    useEffect(()=>{
        dispatch(findAllAdoptions())
    },[findAllAdoptions])
    return (
      <div className={ AdoptionsState.loading ? 'bg-white' : 'bg-about'}>
          <Navbar /> {/*remove the login and display the profile */}
          <div className={'grid grid-rows-[500px,auto,1fr] '}>
              <div className={'pathcontainer  bg-path bg-center bg-cover relative'}>
                  <div className={'relative px-16 flex items-center m-auto top-44 max-md:px-1'}>
                      <div>
                          <p
                            className={"pathname bg-orange text-[4vw] w-max font-custom font-bold text-white px-3 rounded-xl mb-4 "}>
                              Adoption
                          </p>
                          <p className={"fullpath flex gap-x-3"}>
                              <p className={'text-orange font-bold uppercase'}>Home</p>
                              <p className={'text-white font-bold uppercase'}>| Adoption</p>
                          </p>
                      </div>
                  </div>

              </div>
              <div className={"relative -top-16"}>
                  <div
                    className={"searchbar row-start-1 w-9/12 z-50 pb-5 p-2 grid grid-rows-[auto,1fr] mx-auto text-white rounded-2xl mr-auto max-md:m-0 max-md:w-full"}>
                      <Searchbar />
                  </div>
              </div>
              <div
                className={"adoptionlistbox container w-9/12 grid m-auto gap-y-14 gap-x-3 max-md:w-full max-md:p-1 py-8"}
                style={!AdoptionsState.loading ? { gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' } : {width:"max-content"}}
              >
                  {AdoptionsState.loading ? <div
                      className={"bg-loading bg-center bg-cover w-[300px] h-[300px]"}
                  >
                  </div> : AdoptionsState.Adoptions.map((SingleAdoption : Adoptions)=>{
                      return <>
                          <div className={'w-full'}>
                              <div
                                  className={'img drop-shadow-xl border-[2px] border-orange -z-10 bg-cover w-full m-auto bg-center rounded-tl rounded-tr h-[350px]'}
                                  style={{backgroundImage: `url(${SingleAdoption.image[0].Cloudurl})`}}
                              >
                              </div>
                              <div
                                  className={"adoption_info drop-shadow-xl border-[2px] border-orange w-full m-auto rounded-bl rounded-br relative bg-white px-2 py-4 bg-findshap bg-contain"}>
                                  <div className={'flex justify-between items-center  '}>
                                      <p
                                          className={"name text-center font-custom font-bold text-3xl text-dbleu p-2 hover:text-orange transition-all duration-700 cursor-pointer "}>{SingleAdoption?.animal_name}</p>
                                      <button
                                          className={'text-white font-bold bg-orange h-max p-1 rounded hover:bg-dbleu capitalize transition-all duration-500'}
                                          onClick={() => {
                                              navigate(`/Atlas/Adoptions/${SingleAdoption.id}`
                                              )
                                          }}
                                      >love
                                          Begin
                                      </button>
                                  </div>
                                  <div className={"flex justify-between pt-4"}>
                                      <p className={"breed grid grid-cols-[auto,1fr] gap-x-1 items-center text-[14px] text-gray-600"}>
                                          <CiSettings/>{SingleAdoption?.animal_race}
                                      </p>
                                      <p className={'birth grid grid-cols-[auto,1fr] gap-x-1 items-center text-[14px] text-gray-600'}>
                                          <IoCalendarOutline/>Age : {SingleAdoption?.animal_age} year</p>
                                  </div>
                                  <div className={'h-[0.1px] m-auto mt-2 mb-2 bg-gray-600 w-11/12'}></div>
                                  <div className={'flex justify-between'}>
                                      <p className={'city grid grid-cols-[auto,1fr] gap-x-1 items-center text-[14px] text-gray-600'}>
                                          <TbWorld/>Rabat
                                      </p>
                                      <p className={'price text-[14px] text-gray-600'}>Total Price : Free</p>
                                  </div>
                              </div>
                          </div>
                      </>
                  })}
              </div>
          </div>
          <div className={"w-full h-6 bg-revshap bg-cover bg-center relative rotate-180"}></div>
          <Subscribe/>
          <div className={"w-full h-6 bg-revshap bg-cover bg-center relative"}></div>
          <Footer/>
      </div>
    )
}
