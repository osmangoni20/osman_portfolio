import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const { register, handleSubmit } = useForm();
  const emailSend = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_csd5vqk",
        "template_bcco4fk",
        e.target,
        "user_hBPzm8aK7wRUkSbU50AAW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="md:my-15 md:p-4 my-5">
        <div className="pb-10">
        <h2 className="text-center text-4xl md:text-5xl pb-5">Contact Me</h2>
        <p className="text-center text-md ">Bellow ar the details to reach out to me !</p>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center">
        <div>
          <ul className="py-5 pl-5 w-full flex flex-wrap justify-center gap-4">
            <li
              className="text-center"
            >
                <span className=" text-xl font-bold p-5 inline-block rounded-full
              shadow-md  text-white ghost_color_bg">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-10 border-2 rounded-full secondary_color_border p-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
                </span>
                <h4>E-mail Address</h4>
                <span>osmangoni0827@gmail.com</span>
           
            </li>
            <li
              className="text-center"
            >
                <span className=" text-xl font-bold p-5 inline-block rounded-full
              shadow-md  text-white ghost_color_bg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-10 border-2 rounded-full secondary_color_border p-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                />
              </svg>
</span>
             
                <h4>Phone Number</h4>
                <span>+880160776224</span>
          
            </li>

            <li
              className="text-center"
            >
                <span className=" text-xl font-bold p-5 inline-block rounded-full
              shadow-md  text-white ghost_color_bg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-10 border-2 rounded-full secondary_color_border p-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
</span>
            
                <h4>Location </h4>
                <span>Feni, Chittagong-Bangladesh</span>
            
            </li>
          </ul>
        </div>
        <div>
          <form
            className="pt-5 md:min-w-[600px] md:p-5 lg:border-l-2 ml-2"
            onSubmit={handleSubmit(emailSend)}
          >
            <div className="w-full my-2">
              <label className="text-bold block" htmlFor="first_name">
                Your Name
              </label>
              <input
                placeholder="Your Name"
                type="text"
                id="first_name"
                {...register("name")}
              />
            </div>
            <div className="w-full my-2">
              <label className="text-bold block" htmlFor="email">
                Your Email
              </label>
              <input
                placeholder="Your Email"
                type="email"
                id="email"
                {...register("email")}
              />
            </div>
            <div className="w-full my-2">
              <label className="text-bold block" htmlFor="subject">
                Subject
              </label>
              <input
                placeholder="Subject"
                type="text"
                id="subject"
                {...register("subject")}
              />
            </div>
            <div className="w-full my-2">
              <label className="text-bold block" htmlFor="message">
                Your Message
              </label>
              <textarea
              className="h-[200px]"
                placeholder="Your Message"
                type="text"
                id="message"
                {...register("message")}
              />
            </div>
            <div className="flex justify-center">
              <input
                type="submit"
                value={"Send Message"}
                className="btn_outline cursor-pointer text-white p-3 rounded-lg"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
