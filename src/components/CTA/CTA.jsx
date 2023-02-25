import React from 'react';

export default function CTA() {
  return (
    <div>
      {/* Container for demo purpose */}
      <div className="container my-24 px-6 mx-auto border ">
        {/* Section: Design Block */}
        <div className="mb-32 text-gray-800 text-center lg:text-left">
          <div className="flex flex-wrap justify-center">
            <div className="justify-between  grow-0 shrink-0 basis-auto w-full lg:w-10/12 px-3">
              <div className="flex lg:grid-cols-2 gap-x-6 items-center justify-between">
                <div className="mb-10 lg:mb-0">
                  <h2 className="text-3xl font-bold">
                    Cari jasa Foto Pernikahan ? atau jasa cinematografi?
                    <br />
                    <span className="text-blue-600">Hubungi Kami</span>
                  </h2>
                </div>
                <div className="mb-6 md:mb-0">
                  <div className=" md:flex flex-row">
                    <a href="#" className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                      Booking Sekarang -{'>'}
                    </a>
                    {/* <button
                      type="submit"
                      className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Booking Sekarang
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section: Design Block */}
      </div>
      {/* Container for demo purpose */}
    </div>
  );
}
