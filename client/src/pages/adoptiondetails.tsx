import Navbar from "../components/navbar.tsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {findOneAdoption} from "../features/adoption/adoptionSlice.ts";
import {AppDispatch} from "../app/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../Types/StoreState.ts";
import {FaBars, FaCartPlus, FaChevronCircleLeft, FaChevronCircleRight, FaShare} from "react-icons/fa";
import {MdEmail, MdFacebook, MdWhatsapp} from "react-icons/md";
import {CgHashtag} from "react-icons/cg";
import {FaXmark} from "react-icons/fa6";
import "../styles/adoptiondetails.css"


function Adoptiondetails() {
    const dispatch: AppDispatch = useDispatch()
    const {AdoptionId} = useParams()
    const OneAdoption = useSelector((state: StoreState) => state.Adoptions.OneAdoption);
    const loading = useSelector((state: StoreState) => state.Adoptions.OneAdoption.loading);

    if (!localStorage.getItem('CartItems')) {
        localStorage.setItem('CartItems', JSON.stringify([]));
    }
    const AddToCart = (ItemId : string) => {
        const ExistingItemsString = localStorage.getItem('CartItems');
        const ExistingItems : string [] | null = ExistingItemsString ? JSON.parse(ExistingItemsString) : [];
        const filtredExisstingItems : string[]= []
        ExistingItems?.push(ItemId)
        ExistingItems?.map((ItemId)=>{
            if (filtredExisstingItems.includes(ItemId))return
            filtredExisstingItems.push(ItemId)
        })
        localStorage.setItem('CartItems',JSON.stringify(filtredExisstingItems))
    }
    useEffect(() => {
        dispatch(findOneAdoption(AdoptionId))
    }, [dispatch, AdoptionId])
    return (
        <>
            <div className={`bg-white h-screen`}>
                <Navbar/>
                {!loading && OneAdoption ? <div
                    className={'grid grid-cols-2 max-md:grid-cols-1 pt-32  h-full  max-w-[1200px] max-md:px-10 gap-x-6 m-auto'}>
                    <div className={'grid-rows-[1.6fr,1fr]'}>
                        <div
                            className={'img w-full h-[400px] grid grid-rows-2 relative bg-cover bg-center rounded-xl border-2 border-orange'}
                            style={{backgroundImage: `url($)`}}>
                            <div className={'hash absolute bg-dbleu left-2 top-2 p-1 rounded text-white flex gap items-center font-custom gap-x-2'}><p><CgHashtag /></p>{2535}</div>
                            <button
                                // onClick={() => ReviewsHandler('left')}
                                className={'bg-slideicon absolute left-2 top-[46%] hover:w-12 hover:h-12 transition-all duration-300 cursor-pointer bg-contain bg-no-repeat bg-center w-10 h-10 self-center flex justify-center items-center text-white'}>
                                <FaChevronCircleLeft/>
                            </button>
                            <button
                                // onClick={() => ReviewsHandler('right')}
                                className={"bg-slideicon absolute right-2 top-[46%] hover:w-12 hover:h-12 transition-all duration-300 cursor-pointer bg-contain bg-no-repeat bg-center w-10 h-10 self-center flex justify-center items-center text-white "}>
                                <FaChevronCircleRight/></button>
                            <div className={'flex items-center gap-x-2 justify-center row-start-2 '}>
                                <div className={'col-start-1 w-28 h-28 border-2 rounded  bottom-2 right-[30%] border-orange'}></div>
                                <div className={'col-start-2 w-28 h-28 border-2 rounded  bottom-2 left-[30%] border-orange'}></div>
                            </div>
                        </div>
                        <div className={'properties p-2'}>
                            <div className={'flex items-center gap-x-2 p-2'}>
                                <div className={'properties-icon text-dbleu'}><FaBars/></div>
                                <p className={'capitalize font-custom font-bold text-dbleu'}>properties</p>
                            </div>
                            <div
                                className={'grid grid-cols-4 max-md:grid-cols-2 gap-x-2 justify-between text-center font-custom px-2 gap-y-3 mt-2'}>
                                <div className={'w-full propchild bg-blue-100  border-2 h-12 rounded  border-blue-400 '}>
                                    <p className={'capitalize text-blue-400 '}>name</p>
                                    <p className={'text-[12px] lowercase'}>{OneAdoption.data.animal_name}</p>
                                </div>
                                <div className={'w-full propchild bg-blue-100  border-2 h-12 rounded  border-blue-400 '}>
                                    <p className={'capitalize text-blue-400 '}>age</p>
                                    <p className={'text-[12px] lowercase'}>{OneAdoption.data.animal_age} year</p>
                                </div>
                                <div className={'w-full propchild bg-blue-100  border-2 h-12 rounded  border-blue-400 '}>
                                    <p className={'capitalize text-blue-400 '}>class</p>
                                    <p className={'text-[12px] lowercase'}>{OneAdoption.data.animal_class}</p>
                                </div>
                                <div className={'w-full propchild bg-blue-100  border-2 h-12 rounded  border-blue-400 '}>
                                    <p className={'capitalize text-blue-400 '}>Castrate</p>
                                    <p className={'text-[12px] lowercase'}>{OneAdoption.data.castrate ? "Yes" : "No"}</p>
                                </div>
                                <div className={'w-full propchild bg-blue-100  border-2 h-12 rounded  border-blue-400 '}>
                                    <p className={'capitalize text-blue-400 '}>City</p>
                                    <p className={'text-[12px] lowercase'}>{OneAdoption.data.location}</p>
                                </div>
                                <div className={'w-full propchild bg-blue-100  border-2 h-12 rounded  border-blue-400 '}>
                                    <p className={'capitalize text-blue-400 '}>Breed</p>
                                    <p className={'text-[12px] lowercase'}>{OneAdoption.data.animal_race}</p>
                                </div>
                                <div className={'w-full propchild bg-blue-100  border-2 h-12 rounded  border-blue-400 '}>
                                    <p className={'capitalize text-blue-400 '}>Vaccinated</p>
                                    <p className={'text-[12px] lowercase'}>{OneAdoption.data.Vaccinated ? "Yes" : "No"}</p>
                                </div>
                                <div className={'w-full propchild bg-blue-100  border-2 h-12 rounded  border-blue-400 '}>
                                    <p className={'capitalize text-blue-400 '}>Health</p>
                                    <p className={'text-[12px] lowercase'}>{OneAdoption.data.health}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'info-side pt-6 grid gap-x-3 grid-cols-[1fr,0.1fr] '}>
                        <div className={''}>
                            <p className={'font-custom mb-5 font-extrabold text-dbleu capitalize text-2xl'}>{OneAdoption.data.animal_name} Information</p>
                            <p className={'mb-5'}>{OneAdoption.data.description}</p>
                            <div className={'likes-and-loves flex w-32 gap-x-3 h-12 '}>
                                <div className={'flex gap-x-2 items-center font-custom font-bold'}>
                                    <div className={'bg-blacklove w-6 h-6 bg-center bg-cover cursor-pointer'}></div>
                                    <p>100</p></div>

                                <div className={'flex gap-x-2 items-center font-custom font-bold'}>
                                    <div className={'bg-blacklike w-6 h-6 bg-center bg-cover cursor-pointer'}></div>
                                    <p>100</p></div>
                            </div>
                                <div className={'h-[0.1px] rounded-xl w-full bg-dbleu mt-5'}></div>
                                <div
                                    className={"w-full h-max user-details col-start-3 col-span bg-white p-5 rounded relative border-2 mt-10 border-orange "}>
                                    <div className={'grid grid-cols-[auto,1fr] gap-x-3 font-bold'}>
                                        <div
                                            className={"row-span-2 w-12 h-12 bg-avatar bg-center bg-cover rounded-full "}></div>
                                        <p className={'capitalize font-normal'}> {OneAdoption.data?.user?.firstname + " " + OneAdoption.data?.user?.lastname}</p>
                                        <p className={'font-normal text-orange '}>{"Member"}</p>
                                    </div>
                                    {/*<div className={'p-2'}>*/}
                                    {/*    <p className={'font-custom capitalize flex gap-x-1 font-bold'}>total adoptions : <p className={''}>{26}</p></p>*/}
                                    {/*    <p className={'font-custom capitalize flex gap-x-1 font-bold'}>adoptions confirmed : <p>{26}</p></p>*/}
                                    {/*</div>*/}
                                    <div className={'grid grid-cols-[1fr,auto,auto,auto] gap-x-1 mt-2  right-3'}>
                                        <div className={'w-full text-white  rounded px-2 flex items-center  font-bold bg-dbleu'}> Get in touch </div>
                                        <a href={OneAdoption.data?.user?.facebook} className={'text-dbleu hover:text-orange transition-all duration-500 cursor-pointer bg-dbleu rounded relative h-8 flex items-center p-2'}><MdFacebook className={'bg-white rounded'}/></a>
                                        <a href={OneAdoption.data?.user?.WhatsApp} className={'text-dbleu hover:text-orange transition-all duration-500 cursor-pointer bg-dbleu rounded relative h-8 flex items-center p-2'}><MdWhatsapp
                                            className={'bg-white rounded'}/></a>
                                        <a href={OneAdoption.data?.user?.email}
                                           className={'text-dbleu hover:text-orange transition-all duration-500 cursor-pointer bg-dbleu rounded relative h-8 flex items-center p-2'}><MdEmail
                                            className={'bg-white rounded'}/></a>

                                    </div>
                                </div>
                        </div>
                        <div className={'flex-col h-52 w-full '}>
                            <div
                                className={'bg-dbleu w-8 text-white h-8 items-center justify-center flex rounded-full'}>
                                <FaXmark/></div>
                            <div
                                className={'bg-dbleu w-8 mt-2 text-white h-8 items-center justify-center flex rounded-full'}>
                                <FaShare/></div>
                            <div
                                onClick={()=>AddToCart(OneAdoption?.data?.id)}
                                className={'bg-dbleu w-8 mt-2 text-white h-8 items-center justify-center flex rounded-full'}>
                                <FaCartPlus/></div>
                        </div>
                    </div>
                </div> : <div className={'loading'}>
                    <div className={"w-full h-6 bg-revshap bg-cover bg-center relative -top-6 rotate-180"}></div>
                    <div className={'m-auto h-[70vh] bg-white flex justify-center items-center '}>
                        <div className={"bg-loading bg-center bg-cover w-[300px] h-[300px] "}></div>
                    </div>
                    <div className={"w-full h-6 bg-revshap bg-cover bg-center relative top-6"}></div>
                </div>}

            </div>
            {/*<Footer/>*/}
        </>
    );
}

export default Adoptiondetails;


