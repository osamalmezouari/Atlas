import Navbar from "../../components/navbar.tsx";
import { MdOutlinePets } from "react-icons/md";
import Searchbar from "../../components/searchbar.tsx";
import { FaPaw } from "react-icons/fa";
import ('../../styles/index.css')

function Landing() {
  return (
    <div>
      <Navbar />
      <section className={'sec-1 home relative z-70'} style={{height:"calc(100vh - 60px)"}}>
        <div className={'home-image bg-home bg-center bg-cover absolute -z-20 w-full h-screen transform'}></div>
        <div
          className={'home-text-box w-11/12 relative top-56 text-[6vh] font-bold font-custom grid grid-cols-[1fr,800px] grid-rows-[1fr,auto,40px] px-2 text-mywhite pl-5 '}>
          <p className={'highlighted-text leading-snug'}>Find Your <span
            className={'px-2 bg-orange border-2 border-transparent rounded-3xl bg-findshap bg-contain'}>Perfect</span> Companion!</p>
          <p className={'mb-5 sub-text row-start-2 font-custom font-bold text-xl capitalize pt-2'}>Discover your new
            best
            friend waiting to bring joy and love into your home today !</p>
          <button
            className={'capitalize   text-xl text-white row-start-3 flex gap-2 items-center bg-orange w-fit py-8 px-6 rounded-full cursor-pointer transition-all duration-700   hover:bg-dbleu  '}>Love
            Begins
            <div className={'rotate-90 text-2xl'}><MdOutlinePets /></div>
          </button>
        </div>
      </section>
      <Searchbar />
      <section className={'sec-2 relative about m-auto w-full bg-about  pt-40 pb-20 -top-[120px]  bg-cover bg-center'}>
        {/*<div className={'bg-about h-full w-full bg-cover bg-center absolute -z-40 max-sm:h-[1250px] max-md:h-[1100px] md:h-[1000px] lg:max-h-[1000px]'}></div>*/}

        <div className={'about-box rounded-xl bg-mywhite mt-12  m-auto bg-Aboutparent bg-center bg-contain w-9/12 p-12 h-full  grid grid-cols-[1.4fr,2fr] gap-[20px] max-md:grid-rows-[300px] max-md:grid-cols-1 max-md:p-2 max-md:w-[96%] '}>
          <div className={'box-image scale-x-1 rounded bg-Aboutchild relative bg-center bg-cover w-full h-11/12 grid-cols-1 bg-orange '}>
            <div className={'absolute-element grid justify-center grid-rows-3 gap-5 pt-4 bg-orange bg-findshap  absolute bottom-10 -right-16 w-[210px] h-[190px] rounded max-md:h-3/6 max-md:w-3/6 max-md:right-0 max-md:-bottom-10'}>
              <div className={'bg-navabouticon bg-contain bg-center bg-no-repeat'}></div>
              <p className={'pt-2 text-5xl text-center  font-custom font-bold text-white self-center'}>
                +27
              </p>
              <p className={'text-[14px] text-white font-bold font-custom self-center'}>
                PAWS AVAILABLE
              </p>
            </div>
          </div>
          <div className={'box-content grid-rows-[0.1fr,0.1fr,0.2fr,0.1fr,0.1fr,0.1fr] grid gap-1'}>
            <div className={'icon bg-paws w-4 h-4 bg-cover animate-bounce rotate-90'}></div>
            <p className={'sub-title font-extrabold font-custom tracking-wide text-orange '}>About Atlas</p>
            <p className={'highlited title text-dbleu font-custom font-black text-[30px] tracking-wide'}>Finding Forever Homes for Every Pet</p>
            <p className={'description text-dbleu font-custom pl-16 max-md:pl-0'}>
              Atlas, dedicated to Morocco, provides sanctuary to every animal within the nation's borders. Our mission: simplify adoption,
              enabling Moroccans to effortlessly find their ideal companion and take action for animal welfare
            </p>
            <div className={"marks pl-16 pt-2 max-md:pl-0"}>
              <p className={"mark1 flex gap-2 items-center p-2 capitalize"}><FaPaw className={"text-orange"} /> Empowering Moroccans</p>
              <p className={"mark1 flex gap-2 items-center p-2 capitalize"}><FaPaw className={"text-orange"} /> local solutions for local challenges</p>
              <p className={"mark1 flex gap-2 items-center p-2 capitalize"}><FaPaw className={"text-orange"} /> each has a chance for a better life</p>
            </div>
            <div className={"Co-founder max-md:pl-0 pl-20 pt-4 grid grid-cols-[auto,1fr] gap-x-3 font-custom font-bold text-dbleu grid-rows-2"}>
              <div className={"bg-avatar row-span-2 col-start-1 bg-center bg-cover rounded-full w-14 h-14 bg-dbleu"}></div>
              <p className={"name col-start-2 capitalize"}> oussama lmezouari</p>
              <p className={'role font-normal'}>Atlas Creator</p>
            </div>
            {/*Content text*/}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;