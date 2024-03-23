
function Adduser() {
    return (
        <>
            <form
                className={"bg-rev bg-contain m-auto grid grid-cols-3 gap-2 max-w-[800px] h-full rounded-xl p-4 hover:shadow-2xl transition-all duration-1000 border-orange border-2 "}>
                <input
                    className={"row-start-1 col-start-1 pl-2 outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
                    type={"text"} placeholder={"First Name"}></input>
                <input
                    className={"row-start-1 col-start-2 pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
                    type={"text"} placeholder={"Last Name"}></input>
                <input
                    className={"row-start-1 col-start-3 pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
                    type={"text"} placeholder={"Role"}></input>
                <input
                    className={"row-start-2 col-span-3 pl-2 outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
                    type={"email"} placeholder={"Email"}></input>
                <input
                    className={"row-start-3 col-span-3 pl-2 outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
                    type={"password"} placeholder={"Password"}></input>
                <button
                    className={'capitalize col-span-3  border-2 rounded text-dbleu hover:text-white hover:bg-orange transition-all duration-500 border-orange h-12 row-start-5 bg-findshap bg-contain'}
                    type={'submit'}> Edit
                </button>
            </form>
        </>
    );
}

export default Adduser;