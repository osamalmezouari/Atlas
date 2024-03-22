
function Editpassword() {
    return (
        <>
            <form
                className={"bg-rev bg-contain m-auto grid grid-cols-3 gap-2 max-w-[800px] h-full rounded-xl p-4 hover:shadow-2xl transition-all duration-1000 border-orange border-2 max-md:grid-cols-1 max-md:grid-rows-3 "}>
                <input
                    className={"col-start-1 pl-2 outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
                    type={"text"} placeholder={"old password"}></input>
                <input
                    className={" col-start-2 max-md:col-start-1 pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
                    type={"text"} placeholder={"new password"}></input>
                <input
                    className={"col-start-3 max-md:col-start-1 pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
                    type={"email"} placeholder={"confirm password"}></input>
                <button
                    className={'capitalize col-span-3 max-md:col-span-1  border-2 rounded text-dbleu hover:text-white hover:bg-orange transition-all duration-500 border-orange h-12 bg-findshap bg-contain'}
                    type={'submit'}> Edit
                </button>
            </form>
        </>
    );
}

export default Editpassword;