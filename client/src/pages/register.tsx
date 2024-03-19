import Navbar from "../components/navbar.tsx";

function Register() {
  return (
    <div className={' bg-about bg-no-repeat bg-center font-custom capitalize font-bold '}>
      <Navbar/>{/*remove the cart and the dream */}
      <div className={'relative flex justify-center items-center h-screen max-md:pt-20 max-md:p-2 ' }>
        <form
          className={"bg-rev bg-contain grid grid-rows-6 grid-cols-2 gap-x-1 w-[450px] h-[450px] rounded-xl p-4 hover:shadow-2xl transition-all duration-1000 border-orange border-2 "}>
          <div className={"text-orange col-start-1 row-start-1 col-span-2 text-4xl text-center "}> Sign up</div>
          {/*<div className={'bg-about w-[140px] h-[140px] rounded-full absolute top-20 flex items-center justify-center '}><div className={'bg-logo bg-cover bg-center border-2 border-orange w-[125px] h-[125px] rounded-full  '}></div></div>*/}
          <input
            className={"row-start-2 col-start-1 pl-2 outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
            type={"text"} placeholder={"First Name"}></input>
          <input
            className={"row-start-2 col-start-2 col-span-2 pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
            type={"text"} placeholder={"Last Name"}></input>
          <input
            className={"row-start-3 col-span-2 pl-2 outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
            type={"email"} placeholder={"Email"}></input>
          <input
            className={"row-start-4 col-span-2 pl-2 outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
            type={"password"} placeholder={"Password"}></input>
          <input
            className={"row-start-5 col-span-2 col-start-1 pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
            type={"password"} placeholder={"Confirm Password"}></input>
          <button
            className={"capitalize row-start-6 col-span-2  border-2 rounded text-dbleu hover:text-white hover:bg-orange transition-all duration-500 border-orange h-12 bg-findshap bg-contain"}
            type={"submit"}> login
          </button>

          <div className={"row-start-7 col-span-2"}>
            <div className={"flex justify-between text-[12px] pb-2"}><p>you have an account ? </p> <a
              className={"text-dbleu cursor-pointer underline"}>Log in</a></div>
            <div className={"flex justify-between text-[12px]"}><p>Read the Roles</p> <a
              className={"text-dbleu cursor-pointer underline"}>Important</a></div>
          </div>
        </form>
        {/*<div className={'img bg-login bg-cover bg-center w-full h-full border-wblue border-4 rounded-2xl bg-no-repeat'}></div>*/}
      </div>
    </div>
  );
}

export default Register;