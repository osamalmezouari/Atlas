import Navbar from "../../components/navbar.tsx";
import { MdOutlinePets } from "react-icons/md";
import Searchbar from "../../components/searchbar.tsx";
import ('../../styles/index.css')

function Landing() {
  return (
    <div>
      <Navbar />
      <section className={'sec-1 relative'} style={{height:"calc(100vh - 60px)"}}>
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
      <section className={'sec-2 m-auto w-full'}>
        <div className={'bg-about h-screen w-full bg-cover bg-center absolute -z-40'}></div>
        <Searchbar />
      </section>
    </div>
  );
}

export default Landing;