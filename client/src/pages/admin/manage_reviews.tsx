import Navbar from "../../components/navbar.tsx";
import { FaBars, FaEdit } from "react-icons/fa";
import { AiFillDelete} from "react-icons/ai";

function  Manage_Reviews() {
  return (
    <div className={'bg-about h-screen'}>
      <Navbar /> {/*remove the login button and add the sign the profile button*/}
      <div className={'personal-content relative top-32 p-6 flex gap-x-5 max-w-[800px] m-auto'}>
        <div className={'page-content w-full h-full'}>
          <div className={'grid grid-cols-[1fr,auto,auto] gap-x-2 items-center justify-between bg-white p-4 rounded'}>
            <h1 className={"text-xl font-custom capitalize font-bold text-dbleu"}>Reviews</h1>
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
              <td>Email</td>
              <td>Review</td>
              <td>actions</td>
            </tr>
            {/*render the elements from the database*/
              <tr className={"bg-gray-300 h-12 text-center border-b-2 border-white font-bold font-custom capitalize text-dbleu "}>
                <td className={'text-mywhite underline cursor-pointer'}>test@gmail.com</td>
                <td className={'normal-case'}>lorem lorem lorem lorem lorem lore lorem lorem</td>
                <td>
                  <div className={'flex items-center justify-center gap-x-2'}>
                    <AiFillDelete className={' w-6 h-4 bg-red-500 text-white p-1 rounded-full cursor-pointer'} />
                    <FaEdit className={'w-6 h-4 bg-green-400 p-1 rounded-full text-white cursor-pointer'} />
                  </div>
                </td>
              </tr>
            }
          </table>
        </div>
      </div>
    </div>
  );
}

export default Manage_Reviews;