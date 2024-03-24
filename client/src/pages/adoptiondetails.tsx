import Navbar from "../components/navbar.tsx";
import { MdEmail, MdFacebook, MdWhatsapp } from "react-icons/md";
import Footer from "../components/footer.tsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {findOneAdoption} from "../features/adoption/adoptionSlice.ts";
import {AppDispatch} from "../app/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../common/StoreState.ts";

function Adoptiondetails() {
  const dispatch : AppDispatch = useDispatch()
  const {AdoptionId} = useParams()
  const OneAdoption = useSelector((state: StoreState) => state.Adoptions.OneAdoption);
  const loading = useSelector((state: StoreState) => state.Adoptions.OneAdoption.loading);


  useEffect(()=>{
    dispatch(findOneAdoption(AdoptionId))
  },[dispatch,AdoptionId])
  return (
    <>
    <div className={` h-full ${OneAdoption.data ? "bg-mysky" : "bg-white"}`}>
      <Navbar /> {/*remove the login and display the profile */}
      <div className={'grid grid-rows-[500px,1fr]'}>
        <div className={'pathcontainer  bg-path bg-center bg-cover relative'}>
          <div className={'relative px-16 flex items-center m-auto top-44 max-md:px-1'}>
            <div>
              <p
                className={"pathname bg-orange text-[4vw] w-fit font-custom font-bold text-white px-3 rounded-xl mb-4 "}>
                {OneAdoption.data?.animal_name}
              </p>
              <p className={"fullpath flex gap-x-3"}>
                <p className={"text-orange font-bold uppercase"}>Home</p>
                <p className={"font-bold uppercase text-white"}>| Adoption</p>
                <p className={"font-bold uppercase text-white"}>| {OneAdoption.data?.animal_name}</p>
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
                    <p className={'capitalize'}> {OneAdoption.data?.user?.firstname + " " + OneAdoption.data?.user?.lastname}</p>
                    <p className={'font-bold text-orange'}>{"Member"}</p>
                  </div>
                  <div className={'flex gap-x-1 absolute right-3 bottom-2 text-xl'}>
                    <a href={OneAdoption.data?.user?.email}><MdEmail
                        className={'text-dbleu hover:text-orange transition-all duration-500 cursor-pointer'}/></a>
                    <a href={OneAdoption.data?.user?.facebook}><MdFacebook
                        className={'text-dbleu hover:text-orange transition-all duration-500 cursor-pointer'}/></a>
                    <a href={OneAdoption.data?.user?.WhatsApp}><MdWhatsapp
                        className={'text-dbleu hover:text-orange transition-all duration-500 cursor-pointer'}/></a>
                  </div>
                </div>
                <div className={"animal-details grid  bg-about pt-10 p-10 rounded-xl gap-y-6 row-span-2 "}>
                  <p className={"text-2xl font-custom font-extrabold text-dbleu"}>About {OneAdoption?.data?.animal_name}</p> {/* render the name of animal*/}
                  <p className={'text-dbleu font-extrabold flex gap-x-3'}> Date Posting :<p className={'text-orange'}>{OneAdoption?.data?.posted_date}</p></p>
                  <p>{OneAdoption?.data?.description}</p>
                  <div className={`animal-image bg-contain  w-full h-[350px] bg-center rounded-xl`} style={
                    OneAdoption.data?.image && OneAdoption.data?.image.length > 0 && OneAdoption.data?.image[0].Cloudurl
                        ? {backgroundImage: `url(${OneAdoption.data?.image[0]?.Cloudurl})`}
                        : {}
                  }></div>
                  {/*image of the animal*/}
                  <p className={"text-2xl font-custom font-bold"}>{OneAdoption?.data?.animal_class} information</p>
                  <div className={"h-[0.3px] bg-dbleu w-full rounded-2xl"}></div>
                  <div className={'grid grid-cols-3  gap-x-10 gap-y-2 max-md:grid-cols-2'}>
                    <div>
                      <p className={'text-dbleu font-custom font-extrabold'}>Age</p>
                      <p className={'text-orange capitalize font-bold'}> {OneAdoption?.data?.animal_age} Year</p>
                    </div>
                    <div>
                      <p className={'text-dbleu font-custom font-extrabold'}>Castrate</p>
                      <p className={'text-orange capitalize font-bold'}> {OneAdoption?.data?.castrate ? "Yes" : "NO"}</p>
                    </div>
                    <div>
                      <p className={'text-dbleu font-custom font-extrabold'}>City</p>
                      <p className={'text-orange capitalize font-bold'}> {/**/}</p>
                    </div>
                    <div>
                      <p className={'text-dbleu font-custom font-extrabold'}>Breed</p>
                      <p className={'text-orange capitalize font-bold'}> {OneAdoption?.data?.animal_race}</p>
                    </div>
                    <div>
                      <p className={'text-dbleu font-custom font-extrabold'}>Vaccinated</p>
                      <p className={'text-orange capitalize font-bold'}> {OneAdoption?.data?.Vaccinated ? "Yes" : "NO"}</p>
                    </div>
                    <div>
                      <p className={'text-dbleu font-custom font-extrabold'}>Health</p>
                      <p className={'text-orange capitalize font-bold'}> {OneAdoption?.data?.health}</p>
                    </div>
                  </div>
                </div>
              </div>
        }
      </div>

    </div>
      <Footer/>
    </>
  );
}

export default Adoptiondetails;