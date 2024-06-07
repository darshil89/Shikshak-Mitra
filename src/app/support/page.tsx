import React, { FC } from "react";
import 'animate.css';

interface SupportProps {}

const Support: FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white p-6 animate__animated animate__fadeIn">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold animate__animated animate__bounceInDown">Get in Touch</h1>
          <p className="mt-2 animate__animated animate__fadeIn animate__delay-1s">In hac habitasse platea dictumst</p>
        </div>
       
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="md:w-1/2 p-4 animate__animated animate__fadeInLeft">
            <p className="mb-8">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.
            </p>
            <div className="mb-6 flex items-center animate__animated animate__fadeInUp animate__delay-1s">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" className="h-6 w-6">
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                  <path
                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                  </path>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Our Address</h2>
                <p>1230 Maecenas Street Donec Road</p>
                <p>New York, EEUU</p>
              </div>
            </div>
            <div className="mb-6 flex items-center animate__animated animate__fadeInUp animate__delay-1s">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" className="h-6 w-6">
                  <path
                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                  </path>
                  <path d="M15 7a2 2 0 0 1 2 2"></path>
                  <path d="M15 3a6 6 0 0 1 6 6"></path>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Contact</h2>
                <p>Mobile: +1 (123) 456-7890</p>
                <p>Mail: tailxnet@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center animate__animated animate__fadeInUp animate__delay-1s">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" className="h-6 w-6">
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M12 7v5l3 3"></path>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Working hours</h2>
                <p>Monday - Friday: 08:00 - 17:00</p>
                <p>Saturday & Sunday: 08:00 - 12:00</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-4 flex flex-col items-center md:items-end animate__animated animate__fadeInRight">
            <div className="max-w-md w-full">
              <h2 className="text-2xl font-semibold mb-6 text-left md:text-left animate__animated animate__fadeIn animate__delay-1s">Ready to Get Started?</h2>
              <form className="w-full">
                <div className="mb-4">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md bg-gray-800 text-gray-300 sm:mb-0"
                 />
                </div>
                <div className="mb-4">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md bg-gray-800 text-gray-300 sm:mb-0"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Write your message..."
                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md bg-gray-800 text-gray-300 sm:mb-0"
                  ></textarea>
                </div>
                <button type="submit" className="w-full p-3 rounded bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
