import { GrShop } from "react-icons/gr";
import { SiWish } from "react-icons/si";
import { GiSelfLove } from "react-icons/gi";
function Navbar() {
  return (
    <div>
      <nav className={' nav-pc flex justify-between bg-white items-center z-30 px-2 font-custom text-wblue font-black absolute w-full m-auto'}>
        <div className={'navpart-one bg-logo bg-cover w-36 h-24 bg-center col-start-1'}></div>
        <div className={"navpart-two flex gap-5  col-start-2 col-span-4 "}>
          <p className={"px-2 text hover:text-orange cursor-pointer"}>Home</p>
          <p className={"px-2 text hover:text-orange cursor-pointer "}>About</p>
          <p className={"px-2 text hover:text-orange cursor-pointer"}>Adoption</p>
          <p className={"px-2 text hover:text-orange cursor-pointer "}>Contact</p>
        </div>
        <div className={"navpart-three col-start-6 flex gap-10 border-l-4 px-4 pl-5 items-center"}>
          <div className={"text-3xl cursor-pointer"}><GiSelfLove /></div>
          <div className={"text-3xl cursor-pointer"}><GrShop /></div>
          <button className={"w-24 bg-orange text-white py-2 rounded cursor-pointer"}>Login</button>
        </div>
      </nav>
      <div className={"navshap w-full h-16 bg-navshap bg-cover bg-center absolute top-12 -z-10 "}></div>
    </div>

  );
}

export default Navbar;