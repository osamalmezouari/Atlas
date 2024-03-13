import Navbar from "../../components/navbar.tsx";
import { FaBars, FaEdit } from "react-icons/fa";
import { AiFillDelete} from "react-icons/ai";

function  Manage_users() {
  return (
    <div className={'bg-about h-[110vh]'}>
      <Navbar /> {/*remove the login button and add the sign the profile button*/}
      <div className={'personal-content relative top-32 p-6 flex gap-x-5 max-w-[800px] m-auto'}>
        <div className={'page-content w-full h-full'}>
          <div className={'grid grid-cols-[1fr,auto,auto] gap-x-2 items-center justify-between bg-white p-4 rounded'}>
            <h1 className={"text-xl font-custom capitalize font-bold text-dbleu"}>users</h1>
            <div
              className={'bg-dbleu p-2 h-max rounded text-white cursor-pointer hover:bg-orange transition-all duration-500'}>
              <FaBars />
            </div>
          </div>
          <div className={"w-full mt-2 mb-6 h-[3px] bg-orange block rounded"}></div>
          <div className={"sidenav bg-white p-4 rounded max-w-[800px] m-auto h-max mb-5 overflow-clip"}>
            <div
              className={"bg-dbleu cursor-pointer hover:bg-orange transition-all duration-500 p-3 rounded mb-3 text-white font-custom font-bold"}>Manage
              adoptions
            </div>
            <div
              className={"bg-dbleu cursor-pointer hover:bg-orange transition-all duration-500 p-3 rounded mb-3 text-white font-custom font-bold"}>
              Manage users
            </div>
            <div
              className={"bg-dbleu cursor-pointer hover:bg-orange transition-all duration-500 p-3 rounded text-white font-custom font-bold"}>
              Manage Reviews
            </div>
          </div>
          <table className={"table-of-adoptions max-h-[200px] overflow-x-scroll border-b-2 border-white w-full  "}>
            <tr
              className={"text-center min-w-[200px] bg-white h-10 p-4 rounded-tl rounded-tr font-bold font-custom capitalize text-dbleu"}>
              <td>first name</td>
              <td>last name</td>
              <td>Role</td>
              <td>Active</td>
              <td>email</td>
              <td>actions</td>
            </tr>
              <tr
                className={"bg-gray-300 h-12 text-center border-b-2 border-white font-bold font-custom capitalize text-dbleu "}>
                <td className={"text-mywhite cursor-pointer"}>oussama</td>
                <td className={"text-mywhite cursor-pointer"}>lmezouari</td>
                <td className={"text-mywhite cursor-pointer"}>Admin</td>
                <td className={"text-mywhite  cursor-pointer "}>True</td>
                <td className={"normal-case"}>test@gmail.com</td>
                <td>
                  <div className={"flex items-center justify-center gap-x-2"}>
                    <AiFillDelete className={" w-6 h-4 bg-red-500 text-white p-1 rounded-full cursor-pointer"} />
                    <FaEdit className={"w-6 h-4 bg-green-400 p-1 rounded-full text-white cursor-pointer"} />
                  </div>
                </td>
              </tr>
          </table>


          {/*edit user form*/}
          {/*<form*/}
          {/*  className={"bg-rev bg-contain m-auto grid grid-cols-2 gap-2 max-w-[800px] h-full rounded-xl p-4 hover:shadow-2xl transition-all duration-1000 border-orange border-2 "}>*/}
          {/*  <input*/}
          {/*    className={"row-start-1 col-start-1 pl-2 outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}*/}
          {/*    type={"text"} placeholder={"First Name"}></input>*/}
          {/*  <input*/}
          {/*    className={"row-start-1 col-start-2 col-span-2 pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}*/}
          {/*    type={"text"} placeholder={"Last Name"}></input>*/}
          {/*  <input*/}
          {/*    className={"row-start-2 col-span-2 pl-2 outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}*/}
          {/*    type={"email"} placeholder={"Email"}></input>*/}
          {/*  <input*/}
          {/*    className={"row-start-3 col-span-2 pl-2 outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}*/}
          {/*    type={"password"} placeholder={"Password"}></input>*/}
          {/*  <button*/}
          {/*    className={'capitalize col-span-2  border-2 rounded text-dbleu hover:text-white hover:bg-orange transition-all duration-500 border-orange h-12 row-start-5 bg-findshap bg-contain'}*/}
          {/*    type={'submit'}> Edit*/}
          {/*  </button>*/}
          {/*</form>*/}
        </div>
      </div>
    </div>
  );
}

export default Manage_users;