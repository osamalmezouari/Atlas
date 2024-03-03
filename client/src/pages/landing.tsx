import Navbar from "../components/navbar.tsx";
import { MdOutlinePets } from "react-icons/md";
import Searchbar from "../components/searchbar.tsx";
import { FaChevronCircleLeft, FaChevronCircleRight, FaGithub, FaLinkedin, FaPaw, FaPlus, FaStar } from "react-icons/fa";
import ('../styles/index.css')

function Landing() {
  return (
    <div>
      <Navbar />
      <section className={'sec-1 home relative z-70'} style={{ height: "calc(100vh)" }}>
        <div className={'home-image bg-home bg-center bg-cover absolute -z-20 w-full h-screen transform'}></div>
        <div
          className={'home-text-box w-11/12 relative top-56 text-[6vh] font-bold font-custom grid grid-cols-[1fr,800px] grid-rows-[1fr,auto,40px] px-2 text-mywhite pl-5 '}>
          <p className={'highlighted-text leading-snug'}>Find Your <span
            className={'px-2 bg-orange border-2 border-transparent rounded-3xl bg-findshap bg-contain'}>Perfect</span> Companion!
          </p>
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
      <section className={'sec-2 relative about mx-auto w-full bg-about pb-20 bg-cover bg-center'}>
        <Searchbar />
        {/*<div className={'bg-about h-full w-full bg-cover bg-center absolute -z-40 max-sm:h-[1250px] max-md:h-[1100px] md:h-[1000px] lg:max-h-[1000px]'}></div>*/}
        <div
          className={'about-box rounded-xl bg-mywhite mt-12  m-auto bg-Aboutparent bg-center bg-contain w-9/12 p-12 h-max  grid grid-cols-[1.4fr,2fr] gap-[20px] max-md:grid-rows-[300px] max-md:grid-cols-1 max-md:p-2 max-md:w-[96%] ,max-w-7xl '}>
          <div
            className={'box-image scale-x-1 rounded bg-Aboutchild relative bg-center bg-cover w-full h-11/12 grid-cols-1 bg-orange max-md:bg-Aboutchildmd  '}>
            <div
              className={'absolute-element grid justify-center grid-rows-3 gap-5 pt-4 bg-orange bg-findshap  absolute bottom-10 -right-16 w-[210px] h-[190px] rounded max-md:h-3/6 max-md:w-3/6 max-md:right-0 max-md:-bottom-10'}>
              <div className={'bg-navabouticon bg-contain bg-center bg-no-repeat'}></div>
              <p className={'pt-2 text-[3em] text-center  font-custom font-bold text-white self-center'}>
                +24
              </p>
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
              Atlas, dedicated to Morocco, provides sanctuary to every animal within the nation's borders. Our mission:
              simplify adoption,
              enabling Moroccans to effortlessly find their ideal companion and take action for animal welfare
            </p>
            <div className={"marks pl-16 pt-2 max-md:pl-0"}>
              <p className={"mark1 flex gap-2 items-center p-2 capitalize"}><FaPaw
                className={"text-orange"} /> Empowering Moroccans</p>
              <p className={"mark1 flex gap-2 items-center p-2 capitalize"}><FaPaw className={"text-orange"} /> local
                solutions for local challenges</p>
              <p className={"mark1 flex gap-2 items-center p-2 capitalize"}><FaPaw className={"text-orange"} /> each has
                a chance for a better life</p>
            </div>
            <div
              className={"Co-founder max-md:pl-0 pl-20 pt-4 grid grid-cols-[auto,1fr] gap-x-3 font-custom font-bold text-dbleu grid-rows-2"}>
              <div
                className={"bg-avatar row-span-2 col-start-1 bg-center bg-cover rounded-full w-14 h-14 bg-dbleu"}></div>
              <p className={"name col-start-2 capitalize"}> oussama lmezouari</p>
              <p className={'role font-normal'}>Atlas Creator</p>
            </div>
          </div>
        </div>
        <div
          className={"box-container flex flex-nowrap gap-x-6 max-sm:flex-wrap max-sm:gap-y-4 w-7/12 pt-12 max-md:w-full max-md:px-2 mx-auto "}>
          <div
            className={"box-1 bg-white w-full h-56 rounded-2xl grid grid-rows-[40px,1fr,2px,1fr,40px] p-4 gap-y-1 items-center justify-center bg-findshap bg-contain bg-center hover:drop-shadow-2xl transition hover:-top-1 duration-700 cursor-pointer relative   "}>
            <p
              className={'text-6xl font-custom self-baseline font-bold row-start-2 bg-blueshap bg-clip-text text-wblue text-center  '}>+235</p>
            {/*<div className={'w-full h-[0.4px] bg-orange '}></div>*/}
            <p
              className={'text-xl font-custom self-start font-bold row-start-4 text-center bg-orange rounded-xl text-white p-2  bg-findshap'}> PAWS
              AVAILABLE</p>
          </div>
          <div
            className={"box-1 bg-white w-full h-56 rounded-2xl grid grid-rows-[40px,1fr,2px,1fr,40px] p-4 gap-y-1 items-center justify-center bg-findshap bg-contain bg-center hover:drop-shadow-2xl transition hover:-top-1 duration-500 cursor-pointer relative  "}>
            <p
              className={'text-6xl font-custom self-baseline font-bold row-start-2 bg-blueshap bg-clip-text text-wblue text-center  '}>+235</p>
            {/*<div className={'w-full h-[0.4px] bg-orange '}></div>*/}
            <p
              className={'text-xl font-custom self-start font-bold row-start-4 text-center bg-orange rounded-xl text-white p-2  bg-findshap'}> PAWS
              ADOPTED</p>
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
              className={'capitalize  px-2 w-6/12 mx-auto pt-4  font-normal tracking-wide text-dbleu font-custom max-md:w-full'}>The
              best overall dog DNA test is
              Embark Breed & Health Kit (view at Chewy), which provides you with a breed brwn and information Most
              dogs
            </p>
          </div>
        </div>
        <div
          className={'reviews-list max-w-[700px] mt-20 h-max py-2 relative grid grid-cols-[auto,1fr,auto] gap-x-3 mx-auto max-md:grid-rows-1 max-md:grid-cols-1 max-md:min-w-full  max-md:px-2 '}>
          <div
            className={'bg-slideicon cursor-pointer col-start-1 bg-contain bg-no-repeat bg-center w-10 h-10 self-center flex justify-center items-center text-white max-md:hidden '}>
            <FaChevronCircleLeft /></div>
          <div
            className={"one max-md:h-max max-md:m-auto col-start-2 px-4 py-2 w-full max-md:w-10/12 bg-white rounded-lg bg-about grid items-center grid-rows-[20px,40px,1fr] place-items-center"}>
            <div
              className={"cyrcle row-start-1 w-16 h-16 rounded-full bg-white absolute -top-[30px] flex justify-center items-center"}>
              <div className={"bg-avatar w-12 h-12 bg-cover rounded-full"}></div>
            </div>
            <p className={"capitalize font-bold row-start-2 pt-3"}>oussama lmezouari</p>
            <p className={'capitalize row-start-3 self-center w-10/12 text-center '}>Explore design projects on
              platforms like Dribbble and Behance. Many designers showcase their work, including color schemes used</p>
          </div>
          <div
            className={"bg-slideicon cursor-pointer col-start-3 bg-contain bg-no-repeat bg-center w-10 h-10 self-center flex justify-center items-center text-white max-md:hidden"}>
            <FaChevronCircleRight /></div>
        </div>
        <div className={'m-auto grid grid-cols-5 w-max gap-x-3 mb-[20px]'}>
          <button className={'border w-8 h-4 bg-orange  rounded'}></button>
          <button className={'border w-8 h-4 bg-white rounded'}></button>
          <button className={'border w-8 h-4 bg-white rounded'}></button>
          <button className={'border w-8 h-4 bg-white rounded'}></button>
          <button className={'border w-8 h-4 bg-white rounded'}></button>
        </div>
      </section>
      <div className={"w-full  top-14 h-[16px] bg-revshap bg-cover bg-center relative"}></div>
      <section className={'faq mt-10  h-full py-16 bg-mysky flex pt-12 justify-center '}>
        <div className={'text text-center grid grid-rows-[auto,0.1fr,auto,20px,1fr] gap-3 '}>
          <div className={'icon bg-paws w-4 h-4 bg-cover animate-bounce rotate-90 mx-auto'}></div>
          <p className={'capitalize w-full text-orange font-custom text-xl font-bold'}> FA Question</p>
          <div>
            <p className={'w-full text-4xl font-bold text-dbleu font-custom'}>Get the Answers You Need</p>
          </div>
          <div className={'faqs row-start-5 px-2 grid gap-y-3'}>
            <div className={'faq-1 bg-white p-4 rounded'}>
              <div className={"grid grid-cols-[1fr,40px] justify-between items-center gap-x-6"}>
                <p className={"text-xl text-start font-extrabold font-custom capitalize text-dbleu"}>
                  How can I post an animal for adoption on this platform ?
                </p>
                <div
                  className={"bg-slideicon cursor-pointer bg-contain bg-no-repeat bg-center w-full h-8 self-center col-start-2 flex justify-center items-center text-white"}>
                  <FaPlus /></div>
              </div>
              <div></div>
            </div>
            <div className={"faq-1 bg-white p-4 rounded"}>
              <div className={"grid grid-cols-[1fr,40px] justify-between items-center gap-x-6"}>
              <p className={'text-xl text-start font-extrabold font-custom capitalize text-dbleu'}>
                  Can I search for animals available for adoption without creating an account ?
                </p>
                <div
                  className={'bg-slideicon cursor-pointer bg-contain bg-no-repeat bg-center w-full h-8 self-center col-start-2 flex justify-center items-center text-white'}>
                  <FaPlus /></div>
              </div>
              <div></div>
            </div>
            <div className={'faq-1 bg-white p-4 rounded'}>
              <div className={"grid grid-cols-[1fr,40px] justify-between items-center gap-x-6"}>
                <p className={"text-xl text-start font-extrabold font-custom capitalize text-dbleu"}>
                  What social apps can I use to contact the users who have posted animals for adoption ?
                </p>
                <div
                  className={"bg-slideicon cursor-pointer bg-contain bg-no-repeat bg-center w-full h-8 self-center col-start-2 flex justify-center items-center text-white"}>
                  <FaPlus /></div>
              </div>
              <div></div>
            </div>
            <div className={"faq-1 bg-white p-4 rounded"}>
              <div className={"grid grid-cols-[1fr,40px] justify-between items-center gap-x-6"}>
                <p className={"text-xl text-start font-extrabold font-custom capitalize text-dbleu"}>
                  Are there any fees associated with posting or adopting animals on this platform ?
                </p>
                <div
                  className={"bg-slideicon cursor-pointer bg-contain bg-no-repeat bg-center w-full h-8 self-center col-start-2 flex justify-center items-center text-white"}>
                  <FaPlus /></div>
              </div>
              <div></div>
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
      <section className={" h-[450px] bg-rev flex max-md:p-1 justify-center items-center  p-12 "}>
        <div
          className={'bg-subscribe max-w-[1200px] p-16 max-md:p-5 h-max bg-cover grid grid-cols-[1fr,1fr,0.4fr] max-md:grid-cols-4 max-md:grid-rows-3 max-md:gap-y-4 grid-rows-1 w-full bg-orange items-center rounded-xl gap-x-3 '}>
          <div className={'max-md:col-span-4 '}>
            <p className={'text-4xl font-custom font-extrabold text-white '}>Newsletter For</p>
            <p className={'flex items-center gap-x-2 text-white'}><FaStar />Do Not Show Your Email.</p>
          </div>
          <input type={'text'}
                 className={'h-[63px] outline-none pl-4 max-md:row-start-2 max-md:col-span-4 border-2 border-transparent transition-all duration-500 hover:border-dbleu rounded-br-[35px] rounded-tl-[10px] rounded-bl-[10px] rounded-tr-[10px] max-md:rounded '}
                 placeholder={'Enter Your Email ...'} />
          <button
            className={'bg-white h-[63px] text-orange font-bold max-md:col-span-2 max-md:row-start-3 max-md:col-start-2  capitalize font-custom relative -left-1 hover:bg-dbleu hover:text-white transition-all duration-700 p-2 rounded-br-[10px] rounded-tl-[35px] rounded-bl-[10px] rounded-tr-[10px] max-md:rounded '}>subscribe
          </button>
        </div>
      </section>
      <div className={"w-full top-4 h-[16px] bg-revshap bg-cover bg-center relative"}></div>
      <section className={"sec-footer bg-footer bg-cover bg-center bg-no-repeat h-full "}>
        <div className={"dogright"}></div>
        <div
          className={"grid grid-cols-[200px,150px,150px] h-full max-w-[1000px] m-auto py-20 items-center justify-around max-md:grid-cols-1 max-md:gap-y-7 max-md:p-7"}>
          <div className={" grid gap-y-4"}>
            <div className={"bg-logo bg-center w-32 h-32 rounded-full bg-cover "}></div>
            <p className={"text-dbleu capitalize text-[14px] font-custom  "}>The best overall dog DNA test Embark Breed
              & Health Kit (view at Chewy) which provides overall dog you.</p>
            <div className={"flex gap-x-2 "}>
              <a href={"https://github.com/osamalmezouari"}><FaGithub className={"text-2xl text-dbleu hover:text-orange transition-all duration-500"} />
              </a>
              <a href={"https://www.linkedin.com/in/oussama-lmezouari-307a32298/"}> <FaLinkedin
                className={"text-2xl text-dbleu hover:text-orange transition-all duration-500"} /></a>
            </div>
          </div>
          <div className={"grid gap-y-3"}>
            <div className={"font-bold font-custom text-xl text-dbleu"}>Our Policies</div>
            <div>
              <p className={"text-dbleu capitalize text-[14px] font-custom  "}>Privacy Policy</p>
              <p className={"text-dbleu capitalize text-[14px] font-custom  "}>Terms and Conditions</p>
              <p className={"text-dbleu capitalize text-[14px] font-custom  "}>Editorial Policy</p>
              <p className={"text-dbleu capitalize text-[14px] font-custom  "}>Redressal Policy</p>
            </div>
          </div>
          <div className={"grid gap-y-3"}>
            <div className={"font-bold font-custom text-xl text-dbleu"}>Our Services
            </div>
            <div>
              <p className={"text-dbleu capitalize text-[14px] font-custom  "}>Our Breeder</p>
              <p className={"text-dbleu capitalize text-[14px] font-custom  "}>Our Adoption</p>
              <p className={"text-dbleu capitalize text-[14px] font-custom  "}>Redressal Policy</p>
              <p className={"text-dbleu capitalize text-[14px] font-custom  "}>Privacy Policy</p>
            </div>
          </div>
        </div>
        <div className={"w-full h-[26px]  bg-copyright relative bg-cover bg-center"}></div>
      </section>
      <div className={"w-full h-24 font-custom bg-dbleu relative text-center p-8 text-white "}>
        <div> AllCopyright © 2024 All Rights Reserved By Atlas
        </div>
      </div>
    </div>
  );
}

export default Landing;