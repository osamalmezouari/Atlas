import Navbar from '../components/navbar';
import Searchbar from '../components/searchbar';
import Footer from '../components/footer.tsx';
import Subscribe from '../components/subscribe.tsx';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StoreState} from '../../Types/StoreState.ts';
import {TbWorld} from 'react-icons/tb';
import {IoCalendarOutline} from 'react-icons/io5';
import {CiSettings} from 'react-icons/ci';
import {useNavigate} from 'react-router-dom';
import {Adoption} from '../../Types/Adoption.ts';
import {FaArrowAltCircleRight} from 'react-icons/fa';
import {findFilteredAdoptions} from "../features/adoption/adoptionSlice.ts";
import {AppDispatch} from "../app/store.ts";


export default function Adoption() {
    const navigate = useNavigate();
    const dispatch : AppDispatch = useDispatch()
    const AdoptionsState = useSelector((state: StoreState) => state.Adoptions);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;


    const totalAdoptions = AdoptionsState.FilteredAdoptions?.data?.length;
    const totalPages = Math.ceil(totalAdoptions / itemsPerPage);

    const handlePaginationClick = (page: number) => {
        setCurrentPage(page);
    };

    const handleNextPageClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    useEffect(() => {
        dispatch(findFilteredAdoptions({classParam:"all",locationParam:"all"}))
    }, [dispatch]);

    return (
        <div className={'bg-mysky'}>
            <Navbar/>
            <div className={'grid grid-rows-[600px,auto,auto,1fr] '}>
                <div className={'pathcontainer  bg-path bg-center bg-cover relative'}>
                    <div className={'relative px-16 flex items-center m-auto top-44 max-md:px-1'}>
                        <div>
                            <p className={'pathname bg-orange text-[4vw] w-max font-custom font-bold text-white px-3 rounded-xl mb-4 '}>
                                {''}
                                Adoption{''}
                            </p>
                            <p className={'fullpath flex gap-x-3'}>
                                <p className={'text-orange font-bold uppercase'}>Home</p>
                                <p className={'text-white font-bold uppercase'}>| Adoption</p>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={'relative -top-16'}>
                    <div
                        className={'searchbar row-start-1 w-9/12 z-50 pb-5 p-2 grid grid-rows-[auto,1fr] mx-auto text-white rounded-2xl mr-auto max-md:m-0 max-md:w-full'}>
                        <Searchbar/>
                    </div>
                </div>
                <div className={'text text-center grid grid-rows-[auto,0.1fr,1fr,auto] gap-3  mb-8'}>
                    <div className={'icon bg-paws w-4 h-4 bg-cover animate-bounce rotate-90 mx-auto'}></div>
                    <p className={'capitalize w-full text-orange font-extrabold font-custom text-xl '}> Meet the
                        animals </p>
                    <div>
                        <p className={'capitalize w-full text-4xl font-extrabold text-dbleu font-custom'}>Paws
                            Waiting for Adoption</p>
                        <p className={'capitalize  px-2 w-6/12 mx-auto pt-4  font-extrabold  tracking-wide text-white font-custom max-md:w-full'}>
                            The best overall dog DNA test is Embark Breed & Health Kit (view at Chewy), which provides
                            you with a breed brwn and information Most dogs
                        </p>
                    </div>
                </div>

                <div
                    className={'adoptionlistbox container w-9/12 grid m-auto gap-y-3 gap-x-3 max-md:w-full max-md:p-1 pb-8'}
                    style={{gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'}}>
                    {AdoptionsState.FilteredAdoptions.loading ? <div className={'bg-loading rounded-2xl bg-center bg-cover w-[300px] h-[300px]'}></div>
                        :
                        AdoptionsState.FilteredAdoptions?.data.length ?
                            AdoptionsState.FilteredAdoptions?.data?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((SingleAdoption: Adoption) => (
                            <div key={SingleAdoption.id} className={'w-full border-orange '}>
                                <div
                                    className={'img drop-shadow-xl border-[2px]  -z-10 bg-cover w-full m-auto bg-center rounded-t-xl h-[350px]'}
                                    style={{backgroundImage: `url(${SingleAdoption?.image[0]?.Cloudurl})`}}></div>
                                <div
                                    className={'adoption_info drop-shadow-xl border-[2px]  w-full m-auto rounded-b-xl relative bg-white px-2 py-4 bg-findshap bg-contain'}>
                                    <div className={'flex justify-between items-center  '}>
                                        <p
                                            className={'name text-center font-custom font-bold text-3xl text-dbleu p-2 hover:text-orange transition-all duration-700 cursor-pointer '}>
                                            {SingleAdoption?.animal_name}
                                        </p>
                                        <button
                                            className={'text-white font-bold bg-orange h-max p-1 rounded hover:bg-dbleu capitalize transition-all duration-500'}
                                            onClick={() => navigate(`/Atlas/Adoptions/${SingleAdoption.id}`)}>
                                            love Begin
                                        </button>
                                    </div>
                                    <div className={'flex justify-between pt-4'}>
                                        <p className={'breed font-bold grid grid-cols-[auto,1fr] gap-x-1 items-center text-[14px] text-gray-600'}>
                                            <CiSettings/>
                                            {SingleAdoption?.animal_race}
                                        </p>
                                        <p className={'birth font-bold grid grid-cols-[auto,1fr] gap-x-1 items-center text-[14px] text-gray-600'}>
                                            <IoCalendarOutline/>
                                            Age : {SingleAdoption?.animal_age} year
                                        </p>
                                    </div>
                                    <div className={'h-[0.1px] m-auto mt-2 mb-2 bg-gray-600 w-11/12'}></div>
                                    <div className={'flex justify-between'}>
                                        <p className={'city font-bold capitalize grid grid-cols-[auto,1fr] gap-x-1 items-center text-[14px] text-gray-600'}>
                                            <TbWorld/>
                                            {SingleAdoption?.location}
                                        </p>
                                        <p className={'price font-bold text-gray-600'}>Total Price : Free</p>
                                    </div>
                                </div>
                            </div>
                        )) : <>
                                <div
                                    className={"text-center col-span-3 text-dbleu font-extrabold text-3xl capitalize font-custom flex items-center justify-center gap-x-3 "}>
                                    <p className={'underline'}>sorry No matching result</p><p className={'text-5xl'}>...
                                    😢</p>
                                </div>
                            </>
                    }
                </div>
            </div>
            <div className={'flex justify-center gap-x-2 my-6'}>
                {Array.from({
                    length: totalPages
                }, (_, index) => (
                    <div
                        key={index + 1}
                        className={'bg-white border-2 border-orange hover:bg-orange hover:text-white font-bold transition-all duration-500 w-p px-2 text-dbleu rounded'}
                        onClick={() => handlePaginationClick(index + 1)}>
                        {index + 1}
                    </div>
                ))}
                {currentPage < totalPages && (
                    <div
                        className={'bg-white border-2 border-orange hover:bg-orange hover:text-white font-bold transition-all duration-500 w-p px-2 text-dbleu rounded flex items-center '}
                        onClick={handleNextPageClick}>
                        <FaArrowAltCircleRight/>
                    </div>
                )}
            </div>
            <Subscribe/>
            <Footer/>
        </div>
    );
}


//
// {AdoptionsState.loading ? (
//     <div className={'bg-loading bg-center bg-cover w-[300px] h-[300px]'}></div>
// ) : (
//
//     ))
// )}

