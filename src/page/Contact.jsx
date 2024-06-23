import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
const Contact = () => {
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
    <div className="flex justify-center my-20">
      <div>
        <h2 className=" text-5xl py-10 text-center">Get in <span className="secondary_color_text">Touch</span></h2>
        <div className="lg:flex justify-between items-center px-5">
          {/* <form  onSubmit={emailSend}>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" name='email' class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" name='name' class="form-control" id="name" placeholder="Name" />
                    </div>
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" className="form-control" name='Subject' id="subject" placeholder="Subject" />
                    </div>
                    <div className="form-group massage" >
                        <label htmlFor="massage">Massage</label>
                        <input type="text" name='massage' className="form-control " id="massage" placeholder="Massage" />
                    </div>
                    <button type="submit" className="btn btn-primary">Send Massage</button>
                </form> */}
                
          <div className="text-justify">
          <h1>HERE !</h1>
            <p className="text-xl">
              Feel free to get in touch with me. If you have any query to me or
              any kind of work you can send me a message from here. It will be
              my please to have your message
            </p>
            <ul className="py-5">
              <li
                className="flex gap-4 items-center text-xl font-bold w-full  rounded 
              shadow-md p-2 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10 border-2 rounded-full secondary_color_border p-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>

                <div className="flex gap-2 items-center">
                  <h6>E-mail:</h6>
                  <span>osmangoni0827@gmail.com</span>
                </div>
              </li>
              <li
                className="flex gap-4 items-center text-xl font-bold w-full  rounded 
              shadow-md p-2 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10 border-2 rounded-full secondary_color_border p-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                  />
                </svg>

                <div className="flex gap-2 items-center">
                  <h6>Phone:</h6>
                  <span>+880160776224</span>
                </div>
              </li>

              <li
                className="flex gap-4 items-center text-xl font-bold w-full  rounded 
             shadow-md p-2 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
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

                <div className="flex gap-2 items-center">
                  <h6>Location: </h6>
                  <span>Feni, Chittagong-Bangladesh</span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <form
              className=" text-black text-xl pt-5 min-w-[600px] p-5 border-l-2 ml-2"
              onSubmit={handleSubmit(emailSend)}
            >
              
                <div className="w-full my-2">
                  <label className="text-bold block" htmlFor="first_name">
                    Your Name
                  </label>
                  <input placeholder="Your Name" type="text" id="first_name" {...register("name")} />
                </div>
                <div className="w-full my-2">
                  <label className="text-bold block" htmlFor="email">
                    Your Email
                  </label>
                  <input placeholder="Your Email" type="email" id="email" {...register("email")} />
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
                  placeholder="Your Message"
                  type="text"
                  className="h-[200px]"
                  id="message"
                  {...register("message")}
                />
              </div>
              <div className="flex justify-center py-10">
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
    </div>
  );
};

export default Contact;
