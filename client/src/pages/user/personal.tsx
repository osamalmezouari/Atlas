import Navbar from "../../components/navbar.tsx";
import { FaBars, FaEdit } from "react-icons/fa";

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
              <FaBars/></div>
          </div>
          <div className={"w-full mt-2 mb-6 h-[3px] bg-orange block rounded"}></div>
          {/*user will render here */}
          <form className={"grid grid-rows-4 max-w-[800px] grid-cols-[auto,1fr] gap-x-5 gap-y-5 m-auto"}>
            <div className={"avatar w-[120px] relative bg-avatar row-span-2 bg-cover bg-center rounded-xl"}>
              <FaEdit className={'absolute right-2 bottom-2 text-white cursor-pointer'}/>
            </div>
            <div
                className={"first-name col-span-2 flex bg-gray-200 rounded hover:bg-orange hover:text-white transition-all duration-1000"}>
              <input
                  className={"w-full text-dbleu font-bold h-12 rounded pl-2 border-transparent border-2 outline-none hover:border-orange transition-all duration-1000"}
                  placeholder={"First Name"}/><FaEdit
                className={"w-12 flex self-center  justify-center cursor-pointer"}/></div>
            <div
                className={"last-name col-span-2 flex bg-gray-200 rounded hover:bg-orange hover:text-white transition-all duration-1000"}>
              <input
                  className={"w-full text-dbleu font-bold h-12 rounded pl-2 border-transparent border-2 outline-none hover:border-orange transition-all duration-1000"}
                  placeholder={"Last Name"}/><FaEdit
                className={"w-12 flex self-center  justify-center cursor-pointer"}/></div>
            <div
                className={"email col-start-1 col-span-3 flex bg-gray-200 rounded hover:bg-orange hover:text-white transition-all duration-1000"}>
              <input
                  className={"w-full text-dbleu font-bold h-12 rounded pl-2 border-transparent border-2 outline-none hover:border-orange transition-all duration-1000"}
                  placeholder={"Email"}/><FaEdit className={"w-12 flex self-center  justify-center cursor-pointer"}/>
            </div>
            <div
                className={"password col-span-3 flex bg-gray-200 rounded hover:bg-orange hover:text-white transition-all duration-1000"}>
              <input
                  className={"w-full text-dbleu font-bold h-12 rounded pl-2 border-transparent border-2 outline-none hover:border-orange transition-all duration-1000"}
                  placeholder={"Password"}/><FaEdit className={"w-12 flex self-center  justify-center cursor-pointer"}/>
            </div>
          </form>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;