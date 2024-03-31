import Navbar from "../components/navbar.tsx";
import { MdOutlinePets } from "react-icons/md";
import Searchbar from "../components/searchbar.tsx";
import { FaChevronCircleLeft, FaChevronCircleRight , FaPaw, FaPlus } from "react-icons/fa";
import Footer from "../components/footer.tsx";
import Subscribe from "../components/subscribe.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../app/store.ts";
import {StoreState} from "../../Types/StoreState.ts";
import {FindUserStatistics} from "../features/adoption/userSlice.ts";
import {FindAdoptionAdoptedStatistics, FindAdoptionNewStatistics} from "../features/adoption/adoptionSlice.ts";
import {FindAllReviews, FindReviewsStatistics} from "../features/adoption/reviewSlice.ts";
import ('../styles/index.css')

function Landing() {
  const dispatch : AppDispatch = useDispatch()
  const navigate = useNavigate()
  const [ReviewCount,setReviewCount]= useState<number>(0)
  const [FaqsActive,setActiveFaqs] = useState<
      {
        faqOne:boolean,
        faqTwo:boolean,
        faqThree:boolean,
        faqFour:boolean,
      }
  >({
    faqOne: false,
    faqTwo:false,
    faqThree:false,
    faqFour:false
  })
  useEffect(() => {
    dispatch(FindReviewsStatistics())
    dispatch(FindUserStatistics())
    dispatch(FindAdoptionNewStatistics())
    dispatch(FindAdoptionAdoptedStatistics())
    dispatch(FindAllReviews())
  }, [dispatch]);
  const ReviewsMetrics = useSelector((state : StoreState) => state.Reviews.FindReviewsStatistics.data)
  const MembersMetrics = useSelector((state : StoreState) => state.Users.FindUserStatistics.data)
  const NewlyAdoptionsMetrics = useSelector((state :StoreState)=>state.Adoptions.FindAdoptionNewStatistics.data)
  const AdoptedAdoptionsMetrics = useSelector((state :StoreState)=>state.Adoptions.FindAdoptionAdoptedStatistics.data)
  const locationsNotFiltered : string [] = useSelector((state : StoreState)=> state.Adoptions.AllLocations)
  const allReviews = useSelector((state:StoreState)=>state.Reviews.FindAllReviews.data)
  const locations : string [] = []
  locationsNotFiltered.map((location)=>{
    if (locations.includes(location)) {
      return location;
    }
    return locations.push(location)
  })
  const ReviewsHandler = (side : string) => {
    if (side === 'left'){
      if (ReviewCount === 0){
        setReviewCount(allReviews.length - 1)
      }
      else if (ReviewCount > 0){
        setReviewCount(ReviewCount - 1)
      }
    }
    else if(side === 'right'){
      if (ReviewCount === allReviews.length - 1){
        setReviewCount(0)
      }
      else if (ReviewCount < allReviews.length  )
      setReviewCount(ReviewCount + 1)
    }
  }
  const HandlerFaqs = (Faq:string)=> {
     setActiveFaqs({
      ...FaqsActive,
      [Faq]:!FaqsActive[Faq]
    })
  }


  return (
    <div>
      <Navbar />
      <section className={'sec-1 home relative z-70'} style={{ height: "calc(100vh)" }} id={"Home"}>
        <div className={'home-image bg-home bg-center bg-cover absolute -z-20 w-full h-screen transform'}></div>
        <div
          className={'home-text-box w-11/12 relative top-56 text-[6vh] font-bold font-custom grid grid-cols-[1fr,800px] grid-rows-[1fr,auto,40px] px-2 text-mywhite pl-5 '}>
          <p className={'highlighted-text leading-snug '}>Find Your <span
            className={'px-2 bg-orange border-2 border-transparent rounded-3xl bg-findshap bg-contain'}>Perfect</span> Companion!
          </p>
          <p className={'mb-5 sub-text row-start-2 font-custom font-bold text-xl capitalize pt-2'}>Discover your new
            best
            friend waiting to bring joy and love into your home today !</p>
          <button
              onClick={()=>navigate("/Atlas/Adoptions")}
            className={'capitalize   text-xl text-white row-start-3 flex gap-2 items-center bg-orange w-fit py-8 px-6 rounded-full cursor-pointer transition-all duration-700   hover:bg-dbleu  '}>Love
            Begins
            <div className={'rotate-90 text-2xl'}><MdOutlinePets /></div>
          </button>
        </div>
      </section>
      <section className={'sec-2 relative about mx-auto w-full bg-about pb-20 bg-cover bg-center'} id={'About'}>
        <div className={"searchbar relative  w-9/12  -top-16 z-50 pb-5 p-2 grid grid-rows-[auto,1fr] mx-auto text-white rounded-2xl mr-auto max-md:m-0 max-md:w-full"}>
          <Searchbar />
        </div>

        {/*<div className={'bg-about h-full w-full bg-cover bg-center absolute -z-40 max-sm:h-[1250px] max-md:h-[1100px] md:h-[1000px] lg:max-h-[1000px]'}></div>*/}
        <div
          className={'about-box rounded-xl  m-auto bg-Aboutparent bg-center bg-contain w-9/12 p-12 h-max  grid grid-cols-[1.4fr,2fr] gap-[20px] max-md:grid-rows-[300px] max-md:grid-cols-1 max-md:p-2 max-md:w-11/12  '}>
          <div
            className={'box-image scale-x-1 rounded bg-Aboutchild relative bg-center bg-cover w-full h-11/12 grid-cols-1 bg-orange max-md:bg-Aboutchildmd  '}>
            <div
              className={'absolute-element grid justify-center grid-rows-3 gap-5 pt-4 bg-orange bg-findshap  absolute bottom-10 -right-16 w-[210px] h-[190px] rounded max-md:h-3/6 max-md:w-3/6 max-md:right-0 max-md:-bottom-10'}>
              <div className={'bg-navabouticon bg-contain bg-center bg-no-repeat'}></div>
              <p className={'pt-2 text-[3em] text-center  font-custom font-bold text-white self-center'}>+{locations.length}</p>
              <p className={'text-[14px] text-white font-bold font-custom self-center'}>
                CITIES AVAILABLE
              </p>
            </div>
          </div>
          <div className={'box-content grid-rows-[0.1fr,0.1fr,0.2fr,0.1fr,0.1fr,0.1fr] grid gap-1'}>
            <div className={'icon bg-paws w-4 h-4 bg-cover animate-bounce rotate-90'}></div>
            <p className={'sub-title font-extrabold font-custom tracking-wide text-orange '}>About Atlas</p>
            <p className={'highlited title text-dbleu font-custom font-black text-[30px] tracking-wide'}>Finding Forever
              Homes for Every Pet</p>
            <p className={'description text-dbleu font-custom pl-16 max-md:pl-0'}>
              Atlas, dedicated to Morocco, provides sanctuary to every animal within the nation's borders. Our mission
              simplify adoption,
              enabling Moroccans to effortlessly find their ideal companion and take action for animal welfare
            </p>
            <div className={"marks pl-16 pt-2 max-md:pl-0"}>
              <p className={"mark1 flex gap-2 items-center p-2 capitalize"}><FaPaw
                className={"text-orange"} /> Empowering Moroccans</p>
              <p className={"mark1 flex gap-2 items-center p-2 capitalize"}><FaPaw className={"text-orange"} /> local solutions for local challenges</p>
              <p className={"mark1 flex gap-2 items-center p-2 capitalize"}><FaPaw className={"text-orange"} /> each has a chance for a better life</p>
            </div>
            <div
              className={"Co-founder max-md:pl-0 pl-20 pt-4 grid grid-cols-[auto,1fr] gap-x-3 font-custom font-bold text-dbleu grid-rows-2"}>
              <div
                className={"bg-avatar row-span-2 col-start-1 bg-cover bg-top rounded-full w-14 h-14 bg-dbleu"}></div>
              <p className={"name col-start-2 capitalize"}> oussama lmezouari</p>
              <p className={'role font-normal'}>Atlas Creator</p>
            </div>
          </div>
        </div>
        <div
            className={"box-container grid w-9/12 max-md:w-full max-md:p-2 m-auto gap-y-2  max-md:grid-cols-2 grid-cols-4 max-md:mt-20 gap-x-2  pt-12  "}>
          <div
              className={"box-1 border-2 bg-white h-56 rounded-2xl grid grid-rows-[40px,1fr,2px,1fr,40px] p-4 gap-y-1 items-center justify-center  bg-contain bg-center hover:drop-shadow-2xl transition hover:-top-1 duration-700 cursor-pointer   "}>
            <p
                className={'text-6xl font-custom self-baseline font-bold row-start-2 bg-blueshap bg-clip-text text-wblue text-center   '}>+{NewlyAdoptionsMetrics.length}</p>
            <p
                className={'text-xl font-custom self-start font-bold row-start-4 text-center bg-orange rounded-xl text-white p-2  bg-findshap'}>
              AVAILABLE</p>
          </div>
          <div
              className={"box-1 max-md:col-start-2 border-2 bg-white w-full h-56 rounded-2xl grid grid-rows-[40px,1fr,2px,1fr,40px] p-4 gap-y-1 items-center justify-center bg-contain bg-center hover:drop-shadow-2xl transition hover:-top-1 duration-500 cursor-pointer   "}>
            <p
                className={'text-6xl font-custom self-baseline font-bold row-start-2 bg-blueshap bg-clip-text text-wblue text-center'}>+{ReviewsMetrics.length}</p>
            <p
                className={'text-xl font-custom self-start font-bold row-start-4 text-center bg-orange rounded-xl text-white p-2 uppercase  bg-findshap'}> Reviews
              </p>
          </div>
          <div
              className={"box-1 border-2 bg-white w-full h-56 rounded-2xl grid grid-rows-[40px,1fr,2px,1fr,40px] p-4 gap-y-1 items-center justify-center bg-contain bg-center hover:drop-shadow-2xl transition hover:-top-1 duration-500 cursor-pointer   "}>
            <p
                className={'text-6xl font-custom self-baseline font-bold row-start-2 bg-blueshap bg-clip-text text-wblue text-center  '}>+{AdoptedAdoptionsMetrics.length}</p>

            <p
                className={'text-xl font-custom self-start font-bold row-start-4 text-center bg-orange rounded-xl text-white p-2  bg-findshap'}>
              ADOPTED</p>
          </div>
          <div
              className={"box-1 border-2 bg-white  w-full h-56 rounded-2xl grid grid-rows-[40px,1fr,2px,1fr,40px]  p-4 gap-y-1 items-center justify-center bg-contain bg-center hover:drop-shadow-2xl transition hover:-top-1 duration-500 cursor-pointer   "}>
            <p
                className={'text-6xl font-custom self-baseline font-bold row-start-2 bg-blueshap bg-clip-text text-wblue text-center  '}>+{MembersMetrics.length}</p>
            <p
                className={'text-xl font-custom self-start font-bold row-start-4 text-center bg-orange rounded-xl text-white p-2  bg-findshap'}> MEMBERS</p>
          </div>
        </div>
      </section>
      <div className={"w-full h-6 bg-revshap bg-cover bg-center relative -top-6 rotate-180"}></div>
      <section className={"sec-3 relative rev h-full bg-top bg-rev bg-cover flex flex-col justify-center "}>
        <div className={'text text-center grid grid-rows-[auto,0.1fr,1fr,auto] gap-3 '}>
          <div className={'icon bg-paws w-4 h-4 bg-cover animate-bounce rotate-90 mx-auto'}></div>
          <p className={'capitalize w-full text-orange font-custom text-xl font-bold'}> Testimonials</p>
          <div>
            <p className={'capitalize w-full text-4xl font-bold text-dbleu font-custom'}>Our Happy Clients</p>
            <p
                className={'capitalize  px-2 w-6/12 mx-auto pt-4  font-normal tracking-wide text-dbleu font-custom max-md:w-full'}>  Radiant Rays of Triumph: The Epic Odyssey of Our Esteemed Client's Quest for Unwavering Happiness, Brimming with Unforgettable Moments, Profound Insights, and Everlasting Gratitude
            </p>
          </div>
        </div>
        <div
          className={'reviews-list min-w-[700px] mt-20 h-max py-2 relative grid grid-cols-[auto,1fr,auto] gap-x-3 mx-auto max-md:grid-rows-1  max-md:min-w-full  max-md:px-2 '}>
          <button
              onClick={()=>ReviewsHandler('left')}
            className={'bg-slideicon hover:w-12 hover:h-12 transition-all duration-300 cursor-pointer col-start-1 bg-contain bg-no-repeat bg-center w-10 h-10 self-center flex justify-center items-center text-white'}>
            <FaChevronCircleLeft /></button>
          <div
            className={"one max-md:h-max max-md:m-auto col-start-2 px-4 py-2  max-md:w-full bg-white rounded-lg bg-about grid items-center grid-rows-[20px,40px,1fr] place-items-center"}>
            <div
              className={"cyrcle row-start-1 w-16 h-16 rounded-full bg-white absolute -top-[30px] flex justify-center items-center"}>
              <div className={"bg-avatar w-12 h-12 bg-cover rounded-full"}></div>
            </div>
            <p className={"capitalize font-bold row-start-2 pt-3 "}>{allReviews[ReviewCount]?.user?.firstname + " " + allReviews[ReviewCount]?.user?.lastname}</p>
            <p className={'capitalize row-start-3 py-2 self-center w-10/12 text-center '}>{allReviews[ReviewCount]?.comment}</p>
          </div>
          <button
              onClick={()=>ReviewsHandler('right')}
            className={"bg-slideicon hover:w-12 hover:h-12 transition-all duration-300 cursor-pointer col-start-3 bg-contain bg-no-repeat bg-center w-10 h-10 self-center flex justify-center items-center text-white "}>
            <FaChevronCircleRight /></button>
        </div>
        {/*<div className={'m-auto grid grid-cols-5 w-max gap-x-3 mb-[20px]'}>*/}
        {/*  <button className={'border w-8 h-4 bg-orange  rounded'}></button>*/}
        {/*  <button className={'border w-8 h-4 bg-white rounded'}></button>*/}
        {/*  <button className={'border w-8 h-4 bg-white rounded'}></button>*/}
        {/*  <button className={'border w-8 h-4 bg-white rounded'}></button>*/}
        {/*  <button className={'border w-8 h-4 bg-white rounded'}></button>*/}
        {/*</div>*/}
      </section>
      <div className={"w-full  top-14 h-[16px] bg-revshap bg-cover bg-center relative"}></div>
      <section className={'faq mt-10 tracking-l transition-all duration-600  h-full py-16 bg-mysky flex pt-12 justify-center '}>
        <div className={'text text-center grid grid-rows-[auto,0.1fr,auto,20px,1fr] gap-3 '}>
          <div className={'icon bg-paws w-4 h-4 bg-cover animate-bounce rotate-90 mx-auto'}></div>
          <p className={'capitalize w-full text-orange font-custom text-xl font-bold'}> FA Question</p>
          <div>
            <p className={'w-full text-4xl font-bold text-dbleu font-custom'}>Get the Answers You Need</p>
          </div>
          <div className={'faqs row-start-5 px-2 grid gap-y-3 max-w-[1000px]'}>
            <div className={'faq-1 bg-white p-4 rounded'}>
              <div className={"grid grid-cols-[1fr,40px] justify-between items-center gap-x-6"}>
                <p className={"text-xl text-start font-extrabold font-custom capitalize text-dbleu"}>
                  How can I post an animal for adoption on this platform ?
                </p>
                <button
                    onClick={()=>HandlerFaqs('faqOne')}
                  className={"bg-slideicon cursor-pointer bg-contain bg-no-repeat bg-center w-full h-8 self-center col-start-2 flex justify-center items-center text-white"}>
                  <FaPlus /></button>
              </div>
              {FaqsActive.faqOne && <div className={'text-start font-noraml tracking-wide w-10/12 '}>
                Posting an animal on our Atlas platform is incredibly straightforward. Simply click on the profile icon, then locate and click the 'Add' button. It's as simple as that!
              </div>}
            </div>
            <div className={"faq-1 bg-white p-4 rounded"}>
              <div className={"grid grid-cols-[1fr,40px] justify-between items-center gap-x-6"}>
              <p className={'text-xl text-start font-extrabold font-custom capitalize text-dbleu'}>
                  Can I search for animals available for adoption without creating an account ?
                </p>
                <button
                    onClick={()=>HandlerFaqs('faqTwo')}
                  className={'bg-slideicon cursor-pointer bg-contain bg-no-repeat bg-center w-full h-8 self-center col-start-2 flex justify-center items-center text-white'}>
                  <FaPlus /></button>
              </div>
              {FaqsActive.faqTwo && <div
                  className={'text-start font-noraml tracking-wide w-10/12 '}
              >Searching for animals is conveniently accessible directly from the navigation bar, even without the need to log in or sign up. Simply navigate to the 'Adoptions' section, where you can effortlessly search for animals of interest, filtering by both animal type and city location. </div>}
            </div>
            <div className={'faq-1 bg-white p-4 rounded'}>
              <div className={"grid grid-cols-[1fr,40px] justify-between items-center gap-x-6"}>
                <p className={"text-xl text-start font-extrabold font-custom capitalize text-dbleu"}>
                  What social apps can I use to contact the users who have posted animals for adoption ?
                </p>
                <button
                    onClick={()=>HandlerFaqs('faqThree')}
                  className={"bg-slideicon cursor-pointer bg-contain bg-no-repeat bg-center w-full h-8 self-center col-start-2 flex justify-center items-center text-white"}>
                  <FaPlus /></button>
              </div>
              {FaqsActive.faqThree && <div className={'text-start font-noraml tracking-wide w-10/12 '}>For contacting users posting animals for adoption, utilize email along with social media platforms like Facebook and messaging apps such as
                WhatsApp, leveraging multiple channels for effective outreach.</div>}
            </div>
            <div className={"faq-1 bg-white p-4 rounded"}>
              <div className={"grid grid-cols-[1fr,40px] justify-between items-center gap-x-6"}>
                <p className={"text-xl text-start font-extrabold font-custom capitalize text-dbleu"}>
                  Are there any fees associated with posting or adopting animals on this platform ?
                </p>
                <button
                    onClick={()=>HandlerFaqs('faqFour')}
                  className={"bg-slideicon cursor-pointer bg-contain bg-no-repeat bg-center w-full h-8 self-center col-start-2 flex justify-center items-center text-white"}>
                  <FaPlus /></button>
              </div>
              {FaqsActive.faqFour && <div className={'text-start font-noraml tracking-wide w-10/12 '}>On this platform, there are no fees associated with either posting animals for adoption or adopting them. We operate with a clear mission to save animals, hence, there are no charges or advertisements involved</div>}
            </div>
          </div>
        </div>
      </section>
      {/*<div*/}
      {/*  className={"w-full h-6 bg-mysky bg-devshap bg-cover bg-center relative brightness-0 flex items-center justify-center"}*/}
      {/*  style={{ filter: "saturate(150%)" }}></div>*/}
      {/*<section className={"dev-sec h-40 w-full bg-myblack flex items-center justify-center gap-x-12 px-4"}>*/}
      {/*  <div className={"bg-React w-24 h-24 bg-contain bg-no-repeat bg-center"}></div>*/}
      {/*  <div className={"bg-tailwind w-24 h-24 bg-contain bg-no-repeat bg-center"}></div>*/}
      {/*  <div className={"bg-NestJS w-24 h-24 bg-contain bg-no-repeat bg-center"}></div>*/}
      {/*  <div className={"bg-MySql w-24 h-24 bg-contain bg-no-repeat bg-center"}></div>*/}
      {/*</section>*/}
      {/*<div className={"w-full rotate-[180deg] h-6 bg-devshap bg-cover bg-center relative"}></div>*/}
      <div className={"w-full  bg-mysky rotate-180 -top-[10px] h-[16px] bg-revshap bg-cover bg-center relative"}></div>
      <Subscribe />
      <div className={"w-full top-4 h-[16px] bg-revshap bg-cover bg-center relative"}></div>
      <Footer />
    </div>
  );
}

export default Landing;