import '../styles/App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./landing.tsx";
import Login from "./login.tsx";
import Register from "./register.tsx";
import Adoption from "./adoption.tsx";
import Cart from "./user/cart.tsx";
import Personal from "./user/personal.tsx";
import My_adoptions from "./user/my_adoptions.tsx";
import Manage_adoptions from "./admin/manage_adoptions.tsx";
import Manage_users from "./admin/manage_users.tsx";
import Manage_Reviews from "./admin/manage_reviews.tsx";
import Manage_roles from "./admin/manage_roles.tsx";
import Adoptiondetails from "./adoptiondetails.tsx";


function App() {

  return  (
    <>
    <BrowserRouter>
      <Routes>
        <Route path={'/Atlas'} element={<Landing />} ></Route>
        <Route path={'/Atlas/Login'} element={<Login />}></Route>
        <Route path={'/Atlas/Register'} element={<Register/>} ></Route>
        <Route path={"/Atlas/Adoptions"} element={<Adoption />} />
        {/*adoption list and details*/}
        <Route path={"/Atlas/Adoptions/:AdoptionId"} element={<Adoptiondetails />} />
        <Route path={'/Atlas/PawsCart'} element={<Cart />}></Route>
        {/*login user routing*/}
        <Route path={'/Atlas/MyProfile'} element={<Personal />}/>
        <Route path={'/Atlas/MyAdoptions'} element={<My_adoptions />}/>
        {/*admin routes*/}
        <Route path={'/Atlas/Admin/ManageAdoptions'} element={<Manage_adoptions />}/>
        <Route path={'/Atlas/Admin/ManageUsers' } element={<Manage_users />}/>
        <Route path={'/Atlas/Admin/ManageReviews'} element={<Manage_Reviews />}/>
        <Route path={'/Atlas/Admin/ManageRoles'} element={<Manage_roles />}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
