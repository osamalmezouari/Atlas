import { GrShop } from "react-icons/gr";
function Navbar() {
  return (
    <div className={'container my m-auto'} style={{maxWidth:'1200px'}}>
      <div className={'nav-pc grid grid-cols-6 items-center px-2 font-custom text-wblue font-black'}>
        <div className={'navpart-one bg-logo bg-cover w-32 h-28 col-start-1'}></div>
        <div className={'navpart-two flex gap-5  col-start-2 col-span-4'}>
          <p className={'px-2 text '}>Home</p>
          <p className={'px-2 text'}>Adoption</p>
          <p className={'px-2 text'}>Contact</p>
        </div>
        <div className={'navpart-three col-start-6 flex gap-10'}>
          <div className={'text-3xl'}> <GrShop />
          </div>
          <button>Login</button>
        </div>
      </div>
    </div>

  );
}

export default Navbar;