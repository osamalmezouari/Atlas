import Navbar from "../../components/navbar.tsx";
import { FaBars,  } from "react-icons/fa";

function Personal() {
  return (
    <div className={'bg-about h-screen'}>
      <Navbar /> {/*remove the login button and add the sign the profile button*/}
      <div className={'personal-content relative top-32 p-6 flex gap-x-5 max-w-[800px] m-auto'}>
        <div className={'page-content w-full h-full'}>
          <div className={'flex items-center justify-between bg-white p-4 rounded'}>
            <h1 className={"text-xl font-custom capitalize font-bold text-dbleu"}>Personal info</h1>
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
          {/*  <form className={"grid grid-rows-4 max-w-[800px] grid-cols-[auto,1fr] gap-x-5 gap-y-5 m-auto"}>*/}
          {/*    <div className={"avatar w-[120px] relative bg-avatar row-span-2 bg-cover bg-center rounded-xl"}>*/}
          {/*      <FaEdit className={'absolute right-2 bottom-2 text-white cursor-pointer'} />*/}
          {/*    </div>*/}
          {/*    <div*/}
          {/*      className={"first-name col-span-2 flex bg-gray-200 rounded hover:bg-orange hover:text-white transition-all duration-1000"}>*/}
          {/*      <input*/}
          {/*        className={"w-full text-dbleu font-bold h-12 rounded pl-2 border-transparent border-2 outline-none hover:border-orange transition-all duration-1000"}*/}
          {/*        placeholder={"First Name"} /><FaEdit*/}
          {/*      className={"w-12 flex self-center  justify-center cursor-pointer"} /></div>*/}
          {/*    <div*/}
          {/*      className={"last-name col-span-2 flex bg-gray-200 rounded hover:bg-orange hover:text-white transition-all duration-1000"}>*/}
          {/*      <input*/}
          {/*        className={"w-full text-dbleu font-bold h-12 rounded pl-2 border-transparent border-2 outline-none hover:border-orange transition-all duration-1000"}*/}
          {/*        placeholder={"Last Name"} /><FaEdit*/}
          {/*      className={"w-12 flex self-center  justify-center cursor-pointer"} /></div>*/}
          {/*    <div*/}
          {/*      className={"email col-start-1 col-span-3 flex bg-gray-200 rounded hover:bg-orange hover:text-white transition-all duration-1000"}>*/}
          {/*      <input*/}
          {/*        className={"w-full text-dbleu font-bold h-12 rounded pl-2 border-transparent border-2 outline-none hover:border-orange transition-all duration-1000"}*/}
          {/*        placeholder={"Email"} /><FaEdit className={"w-12 flex self-center  justify-center cursor-pointer"} />*/}
          {/*    </div>*/}
          {/*    <div*/}
          {/*      className={"password col-span-3 flex bg-gray-200 rounded hover:bg-orange hover:text-white transition-all duration-1000"}>*/}
          {/*      <input*/}
          {/*        className={"w-full text-dbleu font-bold h-12 rounded pl-2 border-transparent border-2 outline-none hover:border-orange transition-all duration-1000"}*/}
          {/*        placeholder={"Password"} /><FaEdit className={"w-12 flex self-center  justify-center cursor-pointer"} />*/}
          {/*    </div>*/}
          {/*</form>*/}

          {/*Edit email*/}
          {/*<form*/}
          {/*  className={"bg-rev bg-contain m-auto grid grid-cols-3 gap-2 max-w-[800px] h-full rounded-xl p-4 hover:shadow-2xl transition-all duration-1000 border-orange border-2 max-md:grid-cols-1 max-md:grid-rows-3 "}>*/}
          {/*  <input*/}
          {/*    className={"col-start-1 pl-2 outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}*/}
          {/*    type={"text"} placeholder={"old email"}></input>*/}
          {/*  <input*/}
          {/*    className={" col-start-2 max-md:col-start-1 pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}*/}
          {/*    type={"text"} placeholder={"new email"}></input>*/}
          {/*  <input*/}
          {/*    className={"col-start-3 max-md:col-start-1 pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}*/}
          {/*    type={"email"} placeholder={"code verifcatoion"}></input>*/}
          {/*  <button*/}
          {/*    className={'capitalize col-span-3 max-md:col-span-1  border-2 rounded text-dbleu hover:text-white hover:bg-orange transition-all duration-500 border-orange h-12 bg-findshap bg-contain'}*/}
          {/*    type={'submit'}> Edit*/}
          {/*  </button>*/}
          {/*</form>*/}
          {/*Edit password*/}
          <form
            className={"bg-rev bg-contain m-auto grid grid-cols-3 gap-2 max-w-[800px] h-full rounded-xl p-4 hover:shadow-2xl transition-all duration-1000 border-orange border-2 max-md:grid-cols-1 max-md:grid-rows-3 "}>
            <input
              className={"col-start-1 pl-2 outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
              type={"text"} placeholder={"old password"}></input>
            <input
              className={" col-start-2 max-md:col-start-1 pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
              type={"text"} placeholder={"new password"}></input>
            <input
              className={"col-start-3 max-md:col-start-1 pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
              type={"email"} placeholder={"confirm password"}></input>
            <button
              className={'capitalize col-span-3 max-md:col-span-1  border-2 rounded text-dbleu hover:text-white hover:bg-orange transition-all duration-500 border-orange h-12 bg-findshap bg-contain'}
              type={'submit'}> Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Personal;