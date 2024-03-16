import Navbar from "../components/navbar.tsx";
import { MdEmail, MdFacebook, MdWhatsapp } from "react-icons/md";
import Subscribe from "../components/subscribe.tsx";
import Footer from "../components/footer.tsx";

function Adoptiondetails() {
  return (
    <>
    <div className={'bg-about h-full '}>
      <Navbar /> {/*remove the login and display the profile */}
      <div className={'grid grid-rows-[500px,1fr]'}>
        <div className={'pathcontainer  bg-path bg-center bg-cover relative'}>
          <div className={'relative px-16 flex items-center m-auto top-44 max-md:px-1'}>
            <div>
              <p
                className={"pathname bg-orange text-[4vw] w-max font-custom font-bold text-white px-3 rounded-xl mb-4 "}>
                Mars
              </p>
              <p className={"fullpath flex gap-x-3"}>
                <p className={"text-orange font-bold uppercase"}>Home</p>
                <p className={"font-bold uppercase text-white"}>| Adoption</p>
                <p className={"font-bold uppercase text-white"}>| Mars</p>
              </p>
            </div>
          </div>
        </div>
        <div className={'Content max-w-[1400px] grid grid-cols-[0.6fr,0.3fr] grid-rows-[auto,1fr] gap-x-10 m-auto mt-[70px] font-custom tracking-wide gap-y-4 max-md:grid-rows-[1fr,1fr] max-md:grid-cols-1 max-md:p-2 p-4'}>
          <div className={"animal-details w-full grid  bg-white pt-10 px-10 rounded-xl gap-y-6 row-span-2"}>
            <p className={"text-2xl font-custom font-extrabold text-dbleu"}>About {"Mars"}</p> {/* render the name of animal*/}
            <p className={'text-dbleu font-extrabold flex gap-x-3'}>Date :<p className={'text-orange'}>24/3/2023 18:30 AM</p> </p>
            <p>{"The domestic dog is domesticated deviated dendant of the wolf. The dog t is derived from an ancient, extinct wolf, and the modern grey wolf is the dog’s nesdarest living relative. The dog was the first species to be domesticated, by hunter–gateiherers. These will include the core vaccines, which are in a series of three: at 6-, 12-, and 16 weeks old."}</p>
            <div className={"animal-image bg-cover bg-adoptionlist w-full h-[350px] bg-center rounded-xl"}></div>
            {/*image of the animal*/}
            <p className={"text-2xl font-custom font-bold"}>{"Cat"} information</p>
            <div className={"h-[0.3px] bg-dbleu w-full rounded-2xl"}></div>
            <div className={'grid grid-cols-3  gap-x-10 gap-y-2 max-md:grid-cols-2'}>
              <div>
                <p className={'text-dbleu font-custom font-extrabold'}>Age</p>
                <p className={'text-orange capitalize font-bold'}> {"2 Year"}</p>
              </div>
              <div>
                <p className={'text-dbleu font-custom font-extrabold'}>Castrate</p>
                <p className={'text-orange capitalize font-bold'}> {"Siamos"}</p>
              </div>
              <div>
                <p className={'text-dbleu font-custom font-extrabold'}>City</p>
                <p className={'text-orange capitalize font-bold'}> {"New York"}</p>
              </div>
              <div>
                <p className={'text-dbleu font-custom font-extrabold'}>Breed</p>
                <p className={'text-orange capitalize font-bold'}> {"Husky"}</p>
              </div>
              <div>
                <p className={'text-dbleu font-custom font-extrabold'}>Vaccinated</p>
                <p className={'text-orange capitalize font-bold'}> {"Yes"}</p>
              </div>
              <div>
                <p className={'text-dbleu font-custom font-extrabold'}>Health</p>
                <p className={'text-orange capitalize font-bold'}> {"Good"}</p>
              </div>
            </div>
          </div>
          <div className={"w-full h-max user-details bg-white pt-10 p-10 rounded-xl gap-y-6 relative"}>
            {/*<p className={'text-dbleu font-extrabold capitalize text-xl '}>Owner information</p>*/}
            <div className={'grid grid-cols-[auto,1fr] gap-x-3 font-bold'}>
              <div className={"row-span-2 w-12 h-12 bg-avatar bg-center bg-cover rounded-full"}></div>
              <p>Oussama lmezouari </p>
              <p className={'font-light'}>Sale , Hay Salam</p>
            </div>
            <div className={'flex gap-x-1 absolute right-3 bottom-2 text-xl'}><MdEmail className={'text-dbleu hover:text-orange transition-all duration-500 cursor-pointer'}/> <MdFacebook className={'text-dbleu hover:text-orange transition-all duration-500 cursor-pointer'}/> <MdWhatsapp className={'text-dbleu hover:text-orange transition-all duration-500 cursor-pointer'}/>  </div>
          </div>
          <div className={'bg-wblue w-full grid grid-rows-[1fr,auto,auto,auto] h-max p-4 gap-y-5 rounded'} >
            <div className={'bg-subscribeimg m-auto w-full h-28  bg-contain bg-no-repeat bg-center'}></div>
            <p className={'text-center font-extrabold font-custom text-white text-2xl'}>Subscribe Newsletter</p>
            <p className={'text-center font-bold text-[14px] font-custom text-white'}>Sign-up For Latest News</p>
            <input type={'text'}
                   className={'h-[65px] outline-none text-center border-2 border-transparent transition-all duration-500 hover:border-orange rounded '}
                   placeholder={'Enter Your Email ...'} />
            <button
              className={'bg-white h-[63px] text-orange font-bold capitalize font-custom -left-1 hover:bg-orange hover:text-white transition-all duration-700 p-2 rounded '}>subscribe
            </button>
          </div>
        </div>
      </div>

    </div>
  <Footer/>
  </>
  );
}

export default Adoptiondetails;