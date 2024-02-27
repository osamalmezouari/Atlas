
function Searchbar() {
  return (
    <div className={'searchbar pb-5 px-2 grid grid-cols-[300px,300px] grid-rows-2 mb-12 w-max m-auto text-white rounded-2xl '}>
      <div className={'bg-orange col-span-2 rounded-tl-xl rounded-tr-xl text-center font-custom text-xl capitalize font-bold pt-5 tracking-wide  bg-findshap bg-contain w-full bg-center h-full '}> Discover your forever companion with just a click !</div>
      <div className={' row-start-2 bg-dbleu items-center col-span-2 grid grid-cols-[1fr,auto,1fr] gap-2 justify-between p-2  rounded-bl-xl rounded-br-xl '}>
        <select className={"cursor-pointer rounded outline-none w-ful h-12  border-2 border-transparent hover:border-orange transition-all duration-500"}>
          <option className={""}>fff</option>
        </select>
        <div className={'w-1 h-7 rounded bg-orange'}></div>
        <select className={"cursor-pointer rounded outline-none w-ful h-12  border-2 border-transparent hover:border-orange transition-all duration-500"}>
          <option className={""}>fff</option>
        </select>
      </div>
    </div>
  );
}

export default Searchbar;