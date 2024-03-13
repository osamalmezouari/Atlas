import Navbar from "../../components/navbar.tsx";
import { FaBars } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

function Cart() {
  return (
    <div className={'bg-about h-[1000px]'}>
      <Navbar /> {/*remove the login button and add the sign the profile button*/}
      <div className={'personal-content relative top-32 p-6 flex gap-x-5 max-w-[800px] m-auto'}>
        <div className={'page-content w-full h-full'}>
          <div className={'flex items-center justify-between bg-white p-4 rounded'}>
            <h1 className={"text-xl font-custom capitalize font-bold text-dbleu"}>My Pets Cart</h1>
            <div
              className={'h-full bg-dbleu p-2 rounded text-white cursor-pointer hover:bg-orange transition-all duration-500'}>
              <FaBars /></div>
          </div>
          <div className={"w-full mt-2 mb-6 h-[3px] bg-orange block rounded"}></div>
          <div className={"sidenav bg-white p-4 rounded max-w-[800px] m-auto h-max mb-5 overflow-clip"}>
            <div
              className={"bg-dbleu cursor-pointer hover:bg-orange transition-all duration-500 p-3 rounded mb-3 text-white font-custom font-bold"}>Personal
              Information
            </div>
            <div
              className={"bg-dbleu cursor-pointer hover:bg-orange transition-all duration-500 p-3 rounded mb-3 text-white font-custom font-bold"}>My
              Adoptions
            </div>
            <div
              className={"bg-dbleu cursor-pointer hover:bg-orange transition-all duration-500 p-3 rounded mb-3 text-white font-custom font-bold"}>My
              Paws Cart
            </div>
            <div
              className={"bg-dbleu cursor-pointer hover:bg-orange transition-all duration-500 p-3 rounded mb-3 text-white font-custom font-bold"}>My
              Dream Pets
            </div>
          </div>
          <div className={'grid grid-cols-2 max-md:grid-cols-1 gap-3'}>
            <div
              className={'w-full bg-white h-full p-2 grid items-center grid-cols-1 gap-y-3 grid-rows-[auto,auto,auto]'}>
              <div className={'bg-adoptionlist w-full bg-center bg-cover rounded h-[180px]'}></div>
              <div className={"text-dbleu w-full grid gap-y-2 font-custom font-bold"}>
                <div className={"grid grid-cols-[80px,1fr] gap-x-3"}><span
                  className={"font-bold text-white bg-orange rounded p-1 text-center text-[12px]"}>Name </span>
                  <p>Mars</p></div>
                <div className={"grid grid-cols-[80px,1fr] gap-x-3"}><span
                  className={"font-bold text-white bg-orange rounded p-1 text-center text-[12px]"}>By </span><p>oussama
                  lmezouari</p></div>
                <div className={"grid grid-cols-[80px,1fr] gap-x-3"}><span
                  className={"font-bold text-white bg-orange rounded p-1 text-center text-[12px]"}>City </span>
                  <p>Rabat</p></div>
              </div>
              <button className={"text-dbleu flex justify-between"}>
                <p></p>
                <AiFillDelete
                  className={'self-end text-dbleu w-8 h-8 rounded border-2 border-dbleu hover:bg-orange hover:border-orange hover:text-white transition-all duration-500 cursor-pointer '} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;