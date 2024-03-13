import Navbar from "../../components/navbar.tsx";
import { FaBars } from "react-icons/fa";
import { AiFillDelete} from "react-icons/ai";

function  Manage_adoptions() {
  return (
    <div className={'bg-about h-screen'}>
      <Navbar /> {/*remove the login button and add the sign the profile button*/}
      <div className={'personal-content relative top-32 p-6 flex gap-x-5 max-w-[800px] m-auto'}>
        <div className={'page-content w-full h-full'}>
          <div className={'grid grid-cols-[1fr,auto,auto] gap-x-2 items-center justify-between bg-white p-4 rounded'}>
            <h1 className={"text-xl font-custom capitalize font-bold text-dbleu"}>list of Adoptions</h1>
            <div
              className={'bg-dbleu font-custom font-bold px-2 py-1 text-white rounded cursor-pointer hover:bg-orange transition-all duration-500'}>Add
            </div>
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
          <table className={"table-of-adoptions  max-h-[200px] overflow-y-scroll border-b-2 border-white w-full "}>
            <tr
              className={"text-center bg-white h-10 p-4 rounded-tl rounded-tr font-bold font-custom capitalize text-dbleu"}>
              <td>name</td>
              <td>email</td>
              <td>actions</td>
            </tr>
            {/*render the elements from the database*/}
              <tr
                className={"bg-gray-300 h-12 text-center border-b-2 border-white font-bold font-custom capitalize text-dbleu "}>
                <td className={'text-mywhite underline cursor-pointer'}>Mars</td>
                <td className={'normal-case'}>test@gmail.com</td>
                <td>
                  <div className={'flex items-center justify-center gap-x-2'}>
                    <AiFillDelete className={' w-6 h-4 bg-red-500 text-white p-1 rounded-full cursor-pointer'} />
                  </div>
                </td>
              </tr>

          </table>
          {/*add adoption */}
          {/*<form*/}
          {/*  className={"bg-rev font-custom font-bold bg-contain grid grid-rows grid-cols-3 gap-2 max-w-[750px] h-full rounded-xl p-4 hover:shadow-2xl transition-all duration-1000 border-orange border-2 "}>*/}
          {/*  /!*<div className={'bg-about w-[140px] h-[140px] rounded-full absolute top-20 flex items-center justify-center '}><div className={'bg-logo bg-cover bg-center border-2 border-orange w-[125px] h-[125px] rounded-full  '}></div></div>*!/*/}
          {/*  <input*/}
          {/*    className={" pl-2 outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}*/}
          {/*    type={"text"} name={'name'} placeholder={"Name"}></input>*/}
          {/*  <select*/}
          {/*    className={"pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}*/}
          {/*    name={"class"}>*/}
          {/*    <option>Class</option>*/}
          {/*    <option>Cat</option>*/}
          {/*    <option>Dog</option>*/}
          {/*    <option>Bird</option>*/}
          {/*    <option>Rabbit</option>*/}
          {/*    <option>Hamster</option>*/}
          {/*  </select>*/}
          {/*  <select*/}
          {/*    className={"pl-2 outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}*/}
          {/*  >*/}
          {/*    <option>Gender</option>*/}
          {/*    <option>Male</option>*/}
          {/*    <option>Female</option>*/}
          {/*  </select>*/}
          {/*  <input*/}
          {/*    className={"pl-2 outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}*/}
          {/*    type={"text"} name={'Race'} placeholder={"Race"}></input>*/}
          {/*  <input*/}
          {/*    className={"row-start-3 col-start-1 pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}*/}
          {/*    type={"number"} name={'Age'} placeholder={"Age"}></input>*/}
          {/*  <select*/}
          {/*    className={"pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}*/}
          {/*    name={"Castrate"}>*/}
          {/*    <option>Yes</option>*/}
          {/*    <option>No</option>*/}
          {/*  </select>*/}
          {/*  <select*/}
          {/*    className={"pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}*/}
          {/*  >*/}
          {/*    <option>Good</option>*/}
          {/*    <option>Fair</option>*/}
          {/*    <option>Poor</option>*/}
          {/*  </select>*/}
          {/*  <select*/}
          {/*    className={"pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}>*/}
          {/*    <option>Vaccinated</option>*/}
          {/*    <option>Yes</option>*/}
          {/*    <option>No</option>*/}
          {/*  </select>*/}

          {/*  <input*/}
          {/*    className={"pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}*/}
          {/*    type={"number"} name={'Weight'} placeholder={"Weight"}></input>*/}
          {/*  <textarea*/}
          {/*    className={"col-span-3 min-h-[120px] max-h-[120px] p-2  outline-none border-2  hover:border-dbleu duration-500 transition-all rounded"}*/}
          {/*    placeholder={"Description"} name={'Description'} aria-valuemax={'350'}></textarea>*/}
          {/*  <div*/}
          {/*    className={"localisation bg-map bg-cover col-span-3 pl-2  outline-none h-[120px] border-2  hover:border-dbleu duration-500 transition-all rounded"}*/}
          {/*  >*/}
          {/*  </div>*/}
          {/*  <input*/}
          {/*    className={"pl-2  outline-none h-[120px] border-2  hover:border-dbleu duration-500 transition-all rounded"}*/}
          {/*    name={'imageone'}*/}
          {/*    type={'file'}*/}
          {/*  >*/}
          {/*  </input>*/}
          {/*  <input*/}
          {/*    className={"pl-2  outline-none h-[120px] border-2  hover:border-dbleu duration-500 transition-all rounded"}*/}
          {/*    type={'file'}*/}
          {/*    name={'imagetwo'}*/}
          {/*  >*/}
          {/*  </input>*/}
          {/*  <input*/}
          {/*    className={"pl-2  outline-none h-[120px] border-2  hover:border-dbleu duration-500 transition-all rounded"}*/}
          {/*    name={'imagethree'}*/}
          {/*    type={'file'}*/}
          {/*  >*/}
          {/*  </input>*/}
          {/*  <button*/}
          {/*    className={'row-start-10 col-span-3 capitalize border-2 rounded text-dbleu hover:text-white hover:bg-orange transition-all duration-500 border-orange h-12 bg-findshap bg-contain'}*/}
          {/*    type={'submit'}> Confirm*/}
          {/*  </button>*/}
          {/*  <div className={'row-start-9 col-span-3'}>*/}
          {/*    <div className={'flex justify-between text-[12px]'}><p>Read the Roles</p> <a*/}
          {/*      className={'text-dbleu cursor-pointer underline'}>before you add a adoption</a></div>*/}
          {/*  </div>*/}
          {/*</form>*/}
        </div>
      </div>
    </div>
  );
}

export default Manage_adoptions;