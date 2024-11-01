import { FaStar } from "react-icons/fa";
import {FormEvent, useRef} from "react";
import axios from "axios";

function Subscribe() {
    const EmailRef = useRef<HTMLInputElement>(null)
    const SubmitHandler = async (e : FormEvent) => {
        e.preventDefault()
        const Subscriber = {
            email : EmailRef?.current?.value
        }
        try {
            const res = await axios.post(`http://localhost:3000/users/newSubscribe`,Subscriber);
            return console.log(res.status);
        } catch (err) {
            return console.log(err);
        }
    }

  return (
      <section className={" h-[450px] bg-rev flex max-md:p-1 justify-center items-center  p-12 "}>
        <form
            onSubmit={(e)=> SubmitHandler(e) }
          className={'bg-subscribe max-w-[1200px] p-16 max-md:p-5 h-max bg-cover grid grid-cols-[1fr,1fr,0.4fr] max-md:grid-cols-4 max-md:grid-rows-3 max-md:gap-y-4 grid-rows-1 w-full bg-orange items-center rounded-xl gap-x-3 '}>
          <div className={'max-md:col-span-4 '}>
            <p className={'text-4xl font-custom font-extrabold text-white '}>Newsletter For</p>
            <p className={'flex items-center gap-x-2 text-white'}><FaStar />Do Not Show Your Email.</p>
          </div>
          <input type={'email'}
                 required={true}
                 ref={EmailRef}
                 className={'h-[63px] outline-none pl-4 max-md:row-start-2 max-md:col-span-4 border-2 border-transparent transition-all duration-500 hover:border-dbleu rounded-br-[35px] rounded-tl-[10px] rounded-bl-[10px] rounded-tr-[10px] max-md:rounded '}
                 placeholder={'Enter Your Email ...'} />
          <button
              type={"submit"}
            className={'bg-white h-[63px] text-orange font-bold max-md:col-span-2 max-md:row-start-3 max-md:col-start-2  capitalize font-custom relative -left-1 hover:bg-dbleu hover:text-white transition-all duration-700 p-2 rounded-br-[10px] rounded-tl-[35px] rounded-bl-[10px] rounded-tr-[10px] max-md:rounded '}>subscribe
          </button>
        </form>
      </section>
  );
}

export default Subscribe;