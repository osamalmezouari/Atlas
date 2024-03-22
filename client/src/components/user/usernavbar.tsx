import {useNavigate} from "react-router-dom";

function Usernavbar() {
    const navigate = useNavigate()
    return (
        <>
            <div className={"sidenav bg-white p-4 rounded max-w-[800px] m-auto h-max mb-5 overflow-clip"}>
                <div
                    onClick={()=>navigate('/Atlas/MyProfile')}
                    className={"bg-dbleu cursor-pointer hover:bg-orange transition-all duration-500 p-3 rounded mb-3 text-white font-custom font-bold"}>Personal
                    Information
                </div>
                <div
                    className={"bg-dbleu cursor-pointer hover:bg-orange transition-all duration-500 p-3 rounded mb-3 text-white font-custom font-bold"}
                    onClick={()=>navigate('/Atlas/MyAdoptions')}
                >My
                    Adoptions
                </div>
            </div>
        </>
    );
}

export default Usernavbar;