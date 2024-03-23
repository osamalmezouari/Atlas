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
        </div>
      </div>
    </div>
  );
}

export default Manage_adoptions;