const AnnouncementBanner = () => {
  return (
    <div className="w-full bg-[#23283e]">
      <div className="wrapper w-full flex justify-between md:items-center items-start md:px-[40px] py-[16px] px-[10px]">
        <div className="w-full">
          <div className="content flex md:flex-row flex-col items-center gap-[24px] justify-center">
            <div className="content-text flex items-center text-white">
              <p className="md:text-[20px] text-[12px]">
                {
                  "[Webinar] Meet Your Customers Where They Are: The Power of Omnichannel CX"
                }
              </p>
            </div>
            <div className="flex items-center gap-x-[24px]">
              <div className="calendar-btn flex items-center gap-x-[8px] text-white bg-gradient-to-r from-white/10 to-transparent px-[10px] py-[6px] rounded-full">
                <img
                  width={20}
                  height={20}
                  src="https://www.nextiva.com/wp-content/themes/nextiva-2024-v2/assets/images/calendar.svg"
                  alt="Calendar"
                />
                <span>February 27</span>
              </div>
              <div className="register-btn text-white text-[12px] font-semibold">
                <a
                  className="flex items-center group"
                  href="https://hubs.li/Q036vNF30"
                  target=""
                  title="Register now"
                >
                  Register now{" "}
                  <svg
                    viewBox="0 0 20 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    className="relative left-0 ml-2 group-hover:left-[0.5rem] transition-all duration-200 ease-in-out"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.7197 0.21967C11.0126 -0.0732233 11.4874 -0.0732233 11.7803 0.21967L19.2803 7.71967C19.5732 8.01256 19.5732 8.48744 19.2803 8.78033L11.7803 16.2803C11.4874 16.5732 11.0126 16.5732 10.7197 16.2803C10.4268 15.9874 10.4268 15.5126 10.7197 15.2197L16.9393 9H0.75C0.335786 9 0 8.66421 0 8.25C0 7.83579 0.335786 7.5 0.75 7.5H16.9393L10.7197 1.28033C10.4268 0.987437 10.4268 0.512563 10.7197 0.21967Z"
                      fill="white"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="close-icon mb!-0">
          <svg
            viewBox="0 0 24 24"
            width={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L12 10.9393L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L13.0607 12L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L12 13.0607L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L10.9393 12L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
