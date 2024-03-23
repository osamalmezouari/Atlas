import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () =>{
  return <>
    <section className={"sec-footer bg-footer bg-cover bg-center bg-no-repeat h-full "} id={'Contact'}>
      <div className={"dogright"}></div>
      <div
        className={"grid grid-cols-[200px,150px,150px] h-full max-w-[1000px] m-auto py-20 items-center justify-around max-md:grid-cols-1 max-md:gap-y-7 max-md:p-7"}>
        <div className={" grid gap-y-4"}>
          <div className={"bg-logo bg-center w-32 h-32 rounded-full bg-cover "}></div>
          <p className={"text-dbleu capitalize text-[14px] font-custom  "}>The best overall dog DNA test Embark Breed
            & Health Kit (view at Chewy) which provides overall dog you.</p>
          <div className={"flex gap-x-2 "}>
            <a href={"https://github.com/osamalmezouari"}><FaGithub
              className={"text-2xl text-dbleu hover:text-orange transition-all duration-500"} />
            </a>
            <a href={"https://www.linkedin.com/in/oussama-lmezouari-307a32298/"}> <FaLinkedin
              className={"text-2xl text-dbleu hover:text-orange transition-all duration-500"} /></a>
          </div>
        </div>
        <div className={"grid gap-y-3"}>
          <div className={"font-bold font-custom text-xl text-dbleu"}>Our Policies</div>
          <div>
            <p className={"text-dbleu capitalize text-[14px] font-custom  "}>Privacy Policy</p>
            <p className={"text-dbleu capitalize text-[14px] font-custom  "}>Terms and Conditions</p>
            <p className={"text-dbleu capitalize text-[14px] font-custom  "}>Editorial Policy</p>
            <p className={"text-dbleu capitalize text-[14px] font-custom  "}>Redressal Policy</p>
          </div>
        </div>
        <div className={"grid gap-y-3"}>
          <div className={"font-bold font-custom text-xl text-dbleu"}>Our Services
          </div>
          <div>
            <p className={"text-dbleu capitalize text-[14px] font-custom  "}>Our Breeder</p>
            <p className={"text-dbleu capitalize text-[14px] font-custom  "}>Our Adoption</p>
            <p className={"text-dbleu capitalize text-[14px] font-custom  "}>Redressal Policy</p>
            <p className={"text-dbleu capitalize text-[14px] font-custom  "}>Privacy Policy</p>
            <p>leave a review</p>
          </div>
        </div>
      </div>
      <div className={"w-full h-[26px]  bg-copyright relative bg-cover bg-center"}></div>
    </section>
    <div className={"w-full h-24 font-custom bg-dbleu relative text-center p-8 text-white "}>
      <div> AllCopyright © 2024 All Rights Reserved By Atlas
      </div>
    </div>
  </>
}
export default Footer