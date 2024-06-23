/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Typical from "react-typical";

const Intro = () => {
  return (
    <div>
      <div className="md:pl-10 md:text-left text-center ">
        <h1 className="py-3">
          <span className="block py-3">I'm</span>
          <span className=" secondary_color_text ">Mohammad Osman Goni</span>
        </h1>
        <h2 className="text-xl md:text-4xl">
          <Typical
            loop={Infinity}
            wrapper="b"
            className="text-xl md:text-4xl"
            delayMs="5000"
            steps={[
              "Web Developer",
              2000,
              "Frontend Developer",
              2000,
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "Javascript Programmer",
              2000,
            ]}
          />
        </h2>
        <p className="text-justify">
          I'm a passionateFull Stack MERN developer.My core skills are based on
          JavaScript and I love to do most of the programme using JavaScript and
          TypeScript. I love to make the web more open to the world.
        </p>
        <div className=" btn_outline my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>

          <Link
            to={
              "https://drive.google.com/uc?export=download&id=1jbKqWxMbkw9Bn3tEtNBrUzCQzlceqoSi"
            }
          >
            Download Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
