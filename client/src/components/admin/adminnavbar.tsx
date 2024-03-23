import {useNavigate} from "react-router-dom";

function Adminnavbar() {
    const navigate = useNavigate()
    return (
        <>
            <div className={"sidenav bg-white p-4 rounded max-w-[800px] m-auto h-max mb-5 overflow-clip"}>
                <div
                    className={"bg-dbleu cursor-pointer hover:bg-orange transition-all duration-500 p-3 rounded mb-3 text-white font-custom font-bold"}
                    onClick={() => navigate('/Atlas/Admin/ManageAdoptions')}
                >Manage
                    adoptions
                </div>
                <div
                    onClick={() => navigate('/Atlas/Admin/ManageUsers')}
                    className={"bg-dbleu cursor-pointer hover:bg-orange transition-all duration-500 p-3 rounded mb-3 text-white font-custom font-bold"}>
                    Manage users
                </div>
                <div
                    onClick={() => navigate('/Atlas/Admin/ManageReviews')}
                    className={"bg-dbleu cursor-pointer hover:bg-orange transition-all duration-500 p-3 rounded text-white font-custom font-bold"}>
                    Manage Reviews
                </div>
                <div
                    onClick={() => navigate('/Atlas/Admin/ManageRoles')}
                    className={"bg-dbleu cursor-pointer hover:bg-orange transition-all duration-500 p-3 rounded text-white font-custom font-bold"}>
                    Manage Roles
                </div>
            </div>
        </>
    );
}

export default Adminnavbar;