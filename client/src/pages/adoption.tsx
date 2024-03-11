import Navbar from '../components/navbar'
import Searchbar from '../components/searchbar'
import AdoptionListBox from '../components/adoption_list_box'
import Footer from "../components/footer.tsx";
import Subscribe from "../components/subscribe.tsx";

export default function Adoption() {

    return (
      <div className={'bg-about'}>
          <Navbar /> {/*remove the login and display the profile */}
          <div className={'grid grid-rows-[500px,auto,1fr] '}>
              <div className={'pathcontainer  bg-path bg-center bg-cover relative'}>
                  <div className={'relative px-16 flex items-center m-auto top-44 max-md:px-1'}>
                      <div>
                          <p
                            className={"pathname bg-orange text-[9vh] font-custom font-bold text-white px-3 rounded-xl mb-4 "}>
                              Adoption
                          </p>
                          <p className={"fullpath flex gap-x-3"}>
                              <p className={'text-orange font-bold uppercase'}>Home</p>
                              <p className={'text-dbleu font-bold uppercase'}>| Adoption</p>
                          </p>
                      </div>
                  </div>

              </div>
              <div className={"relative -top-16"}>
                  <div
                    className={"searchbar row-start-1 w-9/12 z-50 pb-5 p-2 grid grid-rows-[auto,1fr] mx-auto text-white rounded-2xl mr-auto max-md:m-0 max-md:w-full"}>
                      <Searchbar />
                  </div>
              </div>
              <div
                className={"adoptionlistbox container w-9/12 grid m-auto gap-y-14 gap-x-3 max-md:w-full max-md:p-1 py-8"}
                style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}
              >
                  <div className={'w-full'}>
                      <AdoptionListBox />
                  </div>
                  <div>
                      <AdoptionListBox />
                  </div>
                  <div>
                      <AdoptionListBox />
                  </div>
                  <div>
                      <AdoptionListBox />
                  </div>
                  <div>
                      <AdoptionListBox />
                  </div>
                  <div>
                      <AdoptionListBox />
                  </div>

              </div>
          </div>
          <div className={"w-full h-6 bg-revshap bg-cover bg-center relative rotate-180"}></div>
          <Subscribe />
          <div className={"w-full h-6 bg-revshap bg-cover bg-center relative"}></div>
          <Footer />
      </div>
    )
}
