import Navbar from "../components/navbar.tsx";
import { MdEmail, MdFacebook, MdWhatsapp } from "react-icons/md";
import Footer from "../components/footer.tsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {findOneAdoption} from "../features/adoption/adoptionSlice.ts";
import {AppDispatch, RootState} from "../app/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {Adoption} from "../../common/Adoption.ts";

function Adoptiondetails() {
  const dispatch : AppDispatch = useDispatch()
  const {AdoptionId} = useParams()
  const {OneAdoption, loading }= useSelector((state:RootState)=>state.Adoptions)
  const SingleAdoption : Adoption | null = OneAdoption

  useEffect(()=>{
    dispatch(findOneAdoption(AdoptionId))
  },[dispatch,AdoptionId])
  return (
    <>
    <div className={` h-full ${SingleAdoption ? "bg-mysky" : "bg-white"}`}>
      <Navbar /> {/*remove the login and display the profile */}
      <div className={'grid grid-rows-[500px,1fr]'}>
        <div className={'pathcontainer  bg-path bg-center bg-cover relative'}>
          <div className={'relative px-16 flex items-center m-auto top-44 max-md:px-1'}>
            <div>
              <p
                className={"pathname bg-orange text-[4vw] w-fit font-custom font-bold text-white px-3 rounded-xl mb-4 "}>
                {SingleAdoption?.animal_name}
              </p>
              <p className={"fullpath flex gap-x-3"}>
                <p className={"text-orange font-bold uppercase"}>Home</p>
                <p className={"font-bold uppercase text-white"}>| Adoption</p>
                <p className={"font-bold uppercase text-white"}>| {SingleAdoption?.animal_name}</p>
              </p>
            </div>
          </div>
        </div>
        {
          loading ?
              <div className={'loading'}>
                <div className={"w-full h-6 bg-revshap bg-cover bg-center relative -top-6 rotate-180"}></div>
                <div className={'m-auto h-[70vh] bg-white flex justify-center items-center '}>
                  <div className={"bg-loading bg-center bg-cover w-[300px] h-[300px] "}></div>
                </div>
                <div className={"w-full h-6 bg-revshap bg-cover bg-center relative top-6"}></div>
              </div>
              :
              <div
                  className={'Content max-w-[1400px] py-6 grid   gap-x-10 m-auto mt-[70px] font-custom tracking-wide gap-y-4 p-4'}>

                <div className={"w-full h-max user-details bg-about pt-10 p-10 rounded-xl gap-y-6 relative "}>
                  {/*<p className={'text-dbleu font-extrabold capitalize text-xl '}>Owner information</p>*/}
                  <div className={'grid grid-cols-[auto,1fr] gap-x-3 font-bold'}>
                    <div className={"row-span-2 w-12 h-12 bg-avatar bg-center bg-cover rounded-full"}></div>
                    <p>{SingleAdoption?.user?.firstname + " " + SingleAdoption?.user?.lastname}</p>
                    <p className={'font-light'}>Sale , Hay Salam</p>
                  </div>
                  <div className={'flex gap-x-1 absolute right-3 bottom-2 text-xl'}>
                    <a href={SingleAdoption?.user?.email}><MdEmail
                        className={'text-dbleu hover:text-orange transition-all duration-500 cursor-pointer'}/></a>
                    <a href={SingleAdoption?.user?.facebook}><MdFacebook
                        className={'text-dbleu hover:text-orange transition-all duration-500 cursor-pointer'}/></a>
                    <a href={SingleAdoption?.user?.WhatsApp}><MdWhatsapp
                        className={'text-dbleu hover:text-orange transition-all duration-500 cursor-pointer'}/></a>
                  </div>
                </div>
                <div className={"animal-details grid  bg-about pt-10 p-10 rounded-xl gap-y-6 row-span-2 "}>
                  <p className={"text-2xl font-custom font-extrabold text-dbleu"}>About {SingleAdoption?.animal_name}</p> {/* render the name of animal*/}
                  <p className={'text-dbleu font-extrabold flex gap-x-3'}> Date Posting :<p className={'text-orange'}>24/3/2023
                    18:30 AM</p></p>
                  <p>{SingleAdoption?.description}</p>
                  <div className={`animal-image bg-contain  w-full h-[350px] bg-center rounded-xl`} style={
                    SingleAdoption.image && SingleAdoption.image.length > 0 && SingleAdoption.image[0].Cloudurl
                        ? {backgroundImage: `url(${SingleAdoption.image[0].Cloudurl})`}
                        : {}
                  }></div>
                  {/*image of the animal*/}
                  <p className={"text-2xl font-custom font-bold"}>{SingleAdoption?.animal_class} information</p>
                  <div className={"h-[0.3px] bg-dbleu w-full rounded-2xl"}></div>
                  <div className={'grid grid-cols-3  gap-x-10 gap-y-2 max-md:grid-cols-2'}>
                    <div>
                      <p className={'text-dbleu font-custom font-extrabold'}>Age</p>
                      <p className={'text-orange capitalize font-bold'}> {SingleAdoption?.animal_age} Year</p>
                    </div>
                    <div>
                      <p className={'text-dbleu font-custom font-extrabold'}>Castrate</p>
                      <p className={'text-orange capitalize font-bold'}> {SingleAdoption?.castrate ? "Yes" : "NO"}</p>
                    </div>
                    <div>
                      <p className={'text-dbleu font-custom font-extrabold'}>City</p>
                      <p className={'text-orange capitalize font-bold'}> {/**/}</p>
                    </div>
                    <div>
                      <p className={'text-dbleu font-custom font-extrabold'}>Breed</p>
                      <p className={'text-orange capitalize font-bold'}> {SingleAdoption?.animal_race}</p>
                    </div>
                    <div>
                      <p className={'text-dbleu font-custom font-extrabold'}>Vaccinated</p>
                      <p className={'text-orange capitalize font-bold'}> {SingleAdoption?.Vaccinated ? "Yes" : "NO"}</p>
                    </div>
                    <div>
                      <p className={'text-dbleu font-custom font-extrabold'}>Health</p>
                      <p className={'text-orange capitalize font-bold'}> {SingleAdoption?.health}</p>
                    </div>
                  </div>
                </div>
                {/*<div className={'bg-wblue w-full grid grid-rows-[1fr,auto,auto,auto] h-max p-4 gap-y-5 rounded'}>*/}
                {/*  <div className={'bg-subscribeimg m-auto w-full h-28  bg-contain bg-no-repeat bg-center'}></div>*/}
                {/*  <p className={'text-center font-extrabold font-custom text-white text-2xl'}>Subscribe Newsletter</p>*/}
                {/*  <p className={'text-center font-bold text-[14px] font-custom text-white'}>Sign-up For Latest News</p>*/}
                {/*  <input type={'text'}*/}
                {/*         className={'h-[65px] outline-none text-center border-2 border-transparent transition-all duration-500 hover:border-orange rounded '}*/}
                {/*         placeholder={'Enter Your Email ...'}/>*/}
                {/*  <button*/}
                {/*      className={'bg-white h-[63px] text-orange font-bold capitalize font-custom -left-1 hover:bg-orange hover:text-white transition-all duration-700 p-2 rounded '}>subscribe*/}
                {/*  </button>*/}
                {/*</div>*/}
              </div>
        }
      </div>

    </div>
      <Footer/>
    </>
  );
}

export default Adoptiondetails;