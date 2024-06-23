const Service = () => {
  return (
    <div id={'service'} >
      <div>
        <h2 className="text-center text-5xl py-12">What I Do</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="card w-96 shadow-xl border-2 secondary_color_border">
            <div className="card-body text-center">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
              </div>
              <h2
                className="text-center font-semibold
              text-3xl"
              >
                Web Design & Development
              </h2>
              <p>
                I promise to transform your business through modern technology.
                Using my knowledge of various Technology such as HTML, Css,
                Javascript to build digital solutions for users. I will build a
                web application that would work incredibly for you as well as
                your customers.
              </p>
            </div>
          </div>
          <div className="card w-96  shadow-xl border-2 primary_color_border">
            <div className="card-body text-center">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>
              <h2 className="text-center font-semibold text-3xl">
                E-commerce Website
              </h2>
              <p>
                My e-commerce website design will attract more customers and
                boost sales. I will help you build a high conversion funnel,
                scallable, secure and responsive for all device e-commerce
                website that will stand tal in the crowd.
              </p>
            </div>
          </div>
          <div className="card w-96 shadow-xl border-2 secondary_color_border">
            <div className="card-body text-center">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </div>
              <h2 className="text-center font-semibold text-3xl">
                Responsive Website Design
              </h2>
              <p>
                I use my knowledge to build Responsive Website Such as digital
                solutions for users. I will provide you top-notch landing page
                design services to maximize the effect of your page on the users
                and boost sales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
