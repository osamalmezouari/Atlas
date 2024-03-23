
function Editadoption() {
    return (
        <>
            <form
                className={"bg-rev font-custom font-bold bg-contain grid grid-rows grid-cols-3 gap-2 max-w-[750px] h-full rounded-xl p-4 hover:shadow-2xl transition-all duration-1000 border-orange border-2 "}>
                {/*<div className={'bg-about w-[140px] h-[140px] rounded-full absolute top-20 flex items-center justify-center '}><div className={'bg-logo bg-cover bg-center border-2 border-orange w-[125px] h-[125px] rounded-full  '}></div></div>*/}
                <input
                    className={" pl-2 outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
                    type={"text"} name={'name'} placeholder={"Name"}></input>
                <select
                    className={"pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
                    name={"class"}>
                    <option>Class</option>
                    <option>Cat</option>
                    <option>Dog</option>
                    <option>Bird</option>
                    <option>Rabbit</option>
                    <option>Hamster</option>
                </select>
                <select
                    className={"pl-2 outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
                >
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <input
                    className={"pl-2 outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
                    type={"text"} name={'Race'} placeholder={"Race"}></input>
                <input
                    className={"row-start-3 col-start-1 pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
                    type={"number"} name={'Age'} placeholder={"Age"}></input>
                <select
                    className={"pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
                    name={"Castrate"}>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                <select
                    className={"pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
                >
                    <option>Good</option>
                    <option>Fair</option>
                    <option>Poor</option>
                </select>
                <select
                    className={"pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}>
                    <option>Vaccinated</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                <input
                    className={"pl-2  outline-none h-12 border-2  hover:border-dbleu duration-500 transition-all rounded"}
                    type={"number"} name={'Weight'} placeholder={"Weight"}></input>
                <input
                    className={"col-span-3 min-h-[120px] max-h-[120px] p-2  outline-none border-2  hover:border-dbleu duration-500 transition-all rounded"}
                    placeholder={"Description"} name={'Description'}></input>
                <div
                    className={"localisation bg-map bg-cover col-span-3 pl-2  outline-none h-[120px] border-2  hover:border-dbleu duration-500 transition-all rounded"}
                >
                </div>
                <input
                    className={"pl-2  outline-none h-[120px] border-2  hover:border-dbleu duration-500 transition-all rounded"}
                    name={'imageone'}
                    type={'file'}
                >
                </input>
                <input
                    className={"pl-2  outline-none h-[120px] border-2  hover:border-dbleu duration-500 transition-all rounded"}
                    type={'file'}
                    name={'imagetwo'}
                >
                </input>
                <input
                    className={"pl-2  outline-none h-[120px] border-2  hover:border-dbleu duration-500 transition-all rounded"}
                    name={'imagethree'}
                    type={'file'}
                >
                </input>
                <button
                    className={'row-start-10 col-span-3 capitalize border-2 rounded text-dbleu hover:text-white hover:bg-orange transition-all duration-500 border-orange h-12 bg-findshap bg-contain'}
                    type={'submit'}> Confirm
                </button>
                <div className={'row-start-9 col-span-3'}>
                    <div className={'flex justify-between text-[12px]'}><p>Read the Roles</p> <a
                        className={'text-dbleu cursor-pointer underline'}>before you add a adoption</a></div>
                </div>
            </form>
        </>
    );
}

export default Editadoption;