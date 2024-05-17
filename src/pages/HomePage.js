import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cat from "../assets/cat.jpg";
import Dog from "../assets/dog.jpg";
import Bird from "../assets/bird.jpg";


const images = [
  { src: Cat, alt: "Cat", path: "/cats" },
  { src: Dog, alt: "Dog", path: "/dogs" },
  { src: Bird, alt: "Bird", path: "/birds" },
];

export const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleImageClick = (path) => {
    navigate(path);
  };

  return (
    <main>
      
      <section id="indicators-carousel" className="relative w-full my-16" data-carousel="static">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => handleImageClick(image.path)}
            >
              <img
                src={image.src}
                className="block w-full h-full object-cover cursor-pointer"
                alt={image.alt}
              />
            </div>
          ))}
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 bottom-5 left-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
              aria-current={index === currentIndex}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={goToPrevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={goToNextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </section>



      <section className="mb-32 text-center">
    <h2 className="mb-20 text-3xl font-bold">About Us</h2>

    <div className="grid lg:grid-cols-3 lg:gap-x-12">
      <div className="mb-12 lg:mb-0">
        <div
          className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex justify-center">
            <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md text-lime-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-semibold">Support 24/7</h5>
            <p>
              Laudantium totam quas cumque pariatur at doloremque hic quos
              quia eius. Reiciendis optio minus mollitia rerum labore
              facilis inventore voluptatem ad, quae quia sint.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 lg:mb-0">
        <div
          className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex justify-center">
            <div className="text-lime-600 -mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-semibold">Safe and solid</h5>
            <p>
              Eum nostrum fugit numquam, voluptates veniam neque quibusdam
              ullam aspernatur odio soluta, quisquam dolore animi mollitia a
              omnis praesentium, expedita nobis!
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div
          className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex justify-center">
            <div className="text-lime-600 -mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-semibold">Extremely fast</h5>
            <p>
              Enim cupiditate, minus nulla dolor cumque iure eveniet facere
              ullam beatae hic voluptatibus dolores exercitationem? Facilis
              debitis aspernatur amet nisi?
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <div className="container my-24 mx-auto md:px-6">

  <section className="mb-32">
    <div className="flex justify-center">
      <div className="text-center md:max-w-xl lg:max-w-3xl">
        <h2 className="mb-12 px-6 text-3xl font-bold">Contact us</h2>
      </div>
    </div>

    <div className="flex flex-wrap">
      <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
        <form>
          <div className="relative mb-6 bg-slate-50" data-te-input-wrapper-init>
            <input type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput90" placeholder="Name" />
            <label
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >Name
            </label>
          </div>
          <div className="relative mb-6 bg-slate-50" data-te-input-wrapper-init>
            <input type="email"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput91" placeholder="Email address" />
            <label
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >Email address
            </label>
          </div>
          <div className="relative mb-6 bg-slate-50" data-te-input-wrapper-init>
            <textarea
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
            <label 
              className=" pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Message</label>
          </div>
          
          <button type="button" data-te-ripple-init data-te-ripple-color="light"
            className="mb-6 inline-block w-full rounded bg-lime-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Send
          </button>
        </form>
      </div>
      <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary text-lime-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold dark:text-white">
                  Technical support
                </p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  support@example.com
                </p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  +1 234-567-89
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary text-lime-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold dark:text-white">
                  Sales questions
                </p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  sales@example.com
                </p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  +1 234-567-89
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="align-start flex">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary text-lime-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold dark:text-white">Press</p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  press@example.com
                </p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  +1 234-567-89
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="align-start flex">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary text-lime-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold dark:text-white">Bug report</p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  bugs@example.com
                </p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  +1 234-567-89
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


    </main>
  );
};
