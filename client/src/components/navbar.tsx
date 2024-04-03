import {FaBars, FaHome, FaUser} from "react-icons/fa";
import { useEffect, useState } from "react";
import { BsInfoSquareFill } from "react-icons/bs";
import { FaShieldCat } from "react-icons/fa6";
import { RiMessage3Fill } from "react-icons/ri";
import { GrShop } from "react-icons/gr";
import {useNavigate} from "react-router-dom";
function Navbar() {
  const [NavState,setNavstate] = useState<{
    showNav:string,
    showNavele:boolean
  }>({
    showNav:'pc',
    showNavele :false
  })
  const navigate = useNavigate()

  useEffect(()=>{
    const CheckscreenWidth = () => {
      const innerWidth = window.innerWidth
      if (innerWidth >= 850){
          setNavstate((prev)=>{
            return {
              ...prev,
              showNav :'pc'
            }
          })
      }
      else {
        setNavstate((prev)=>{
          return {
            ...prev,
            showNav :'phone'
          }
        })
      }
    }
    CheckscreenWidth()
    window.addEventListener('resize', CheckscreenWidth);
    return  () => window.removeEventListener('resize',CheckscreenWidth)
  },[window.innerWidth])
  return (
    <div>
      {NavState.showNav === "pc" ?
        <nav
          className={" nav-pc  flex justify-between bg-white items-center z-[100] px-2 font-custom text-wblue font-black fixed w-full m-auto"}>
          <div className={"navpart-one bg-logo bg-cover w-36 h-24 bg-center col-start-1"}></div>
          <div className={"navpart-two flex gap-5  col-start-2 col-span-4 "}>
              <a className={"px-2 text hover:text-orange cursor-pointer transition-all duration-500"} onClick={()=>navigate('/Atlas')} >Home</a>
            <a className={"px-2 text hover:text-orange cursor-pointer transition-all duration-500"} href={'#About' }>About</a>
            <p className={"px-2 text hover:text-orange cursor-pointer transition-all duration-500"} onClick={()=>navigate('/Atlas/Adoptions')} >Adoption</p>
            {/*feature <p className={"px-2 text hover:text-orange cursor-pointer transition-all duration-500"}>Lost Paws </p>*/}
            <a className={"px-2 text hover:text-orange cursor-pointer transition-all duration-500"} href={'#Contact' }>Contact</a>
          </div>
          <div className={"navpart-three col-start-6 flex gap-2 border-l-2 px-4 pl-3 items-center"}>
            {/*Feature <div className={"text-3xl cursor-pointer"}><GiSelfLove /></div>*/}
            <button className={"w-max bg-orange text-white p-3 rounded cursor-pointer transition-all duration-500 hover:bg-dbleu"} onClick={() => navigate('/Atlas/PawsCart')}><GrShop/></button>
            {/*<button*/}
            {/*  onClick={()=>navigate('/Atlas/login')}*/}
            {/*  className={"w-24 bg-orange text-white py-2 rounded cursor-pointer transition-all duration-500 hover:bg-dbleu"}>Login*/}
            {/*</button>*/}
            <button
                className={"w-max bg-orange text-white p-3 rounded cursor-pointer transition-all duration-500 hover:bg-dbleu"}
                onClick={() => navigate('/Atlas/MyProfile')}><FaUser/>
            </button>
          </div>
          <div
              className={"navshap-when-nav-hidden w-full left-0 h-16 bg-navshap bg-cover bg-center absolute top-12 -z-10"}></div>
        </nav>
          : ""}
      {NavState.showNav === "phone" ?
          <nav className={"nav-phone "}>
          <div
            className={"  flex justify-between bg-white items-center z-[100] px-2 font-custom text-wblue font-black fixed w-full m-auto"}>
            <div className={"navpart-one bg-logo bg-cover w-36 h-24 bg-center col-start-1"}></div>
            <div className={"navpart-three col-start-6 flex gap-2 pl-5 items-center"}>
              {/*<button*/}
              {/*    onClick={() => navigate('/Atlas/login')}*/}
              {/*    className={"w-24 bg-orange text-white py-2 rounded cursor-pointer transition-all duration-500 hover:bg-dbleu"}>Login*/}
              {/*</button>*/}
              <button
                  className={"w-max bg-orange text-white p-3 rounded cursor-pointer transition-all duration-500 hover:bg-dbleu"}
                  onClick={() => navigate('/Atlas/MyProfile')}><FaUser/>
              </button>
              <button className={"w-max bg-orange text-white p-3 rounded cursor-pointer transition-all duration-500 hover:bg-dbleu"} onClick={() => {
                setNavstate(prev => {
                  return {
                    ...prev,
                    showNavele: !prev.showNavele
                  };
                })
              }}><FaBars/></button>
            </div>
          </div>
          <div
              className={"fixed  py-6 w-full z-[60] bg-orange text-white bg-findshap top-[-500px] transition-all duration-700 ease-in-out"}
              style={NavState.showNavele ? { top: "90px" } : {}}>
            <a
                onClick={()=>navigate('/Atlas')}
                href={'#Home'}
              className={"  p-2 font-custom font-bold text cursor-pointer transition-all duration-500 flex gap-6 hover:pl-7 hover:bg-dbleu rounded mx-2"}
            >

              <FaHome className={"text-xl "} />Home</a>
            <a
              className={"p-2 font-custom font-bold text cursor-pointer transition-all duration-500 flex gap-6 hover:pl-7 hover:bg-dbleu rounded mx-2"}
              href={'#About'}
            >
              <BsInfoSquareFill />About</a>
            <p
              className={"p-2 font-custom font-bold text cursor-pointer transition-all duration-500 flex gap-6 hover:pl-7 hover:bg-dbleu rounded mx-2"}
              onClick={()=>navigate('/Atlas/Adoptions')}
            >
              <FaShieldCat /> Adoption</p>
            <a
              className={"p-2 font-custom font-bold text cursor-pointer transition-all duration-500 flex gap-6 hover:pl-7 hover:bg-dbleu rounded mx-2"}
              href={'#Contact'}
            >
              <RiMessage3Fill /> Contact</a>
            <p
                onClick={()=>navigate('/Atlas/PawsCart')}
              className={"p-2 font-custom font-bold text cursor-pointer transition-all duration-500 flex gap-6 hover:pl-7 hover:bg-dbleu rounded mx-2"}>
              <GrShop /> Paws Cart
            </p>
            {/*<p*/}
            {/*  className={"p-2 font-custom font-bold text  cursor-pointer transition-all duration-500 flex gap-6 hover:pl-7 hover:bg-dbleu rounded mx-2"}>*/}
            {/*  <GiSelfLove />Dream Pets*/}
            {/*</p>*/}
            <div className={" w-full h-8 bg-navshap bg-cover bg-center relative top-10 -z-10 "}></div>
          </div>
          <div className={" w-full h-16 bg-navshap bg-cover bg-center absolute top-12  "}></div>
        </nav>
        : ''}
    </div>

  );
}

export default Navbar;