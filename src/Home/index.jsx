import React from 'react';

const Home = () => {
  return (
    <>
      <div className="min-h-screen box-border p-0 m-0">
        <nav className="min-h-screen">
          <div className="ml-10">
            <div>
              <img className="h-16 ml-10" src="Food.png.png" alt="" />
              <div className="text-2xl ml-4">
                <h1 className="text-green-500 float-left font-bold font-sans">
                  Master
                </h1>
                <h1 className="text-yellow-400 float-left font-bold">Foods</h1>
              </div>
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div className="mr-16">
              <ul className="flex justify-end gap-16 font-semibold">
                <li className=" hover:bg-[#d9f688] h-12 w-16 text-center rounded-tl-xl rounded-br-xl duration-300">
                  Home
                </li>
                <li className="hover:bg-[#d9f688] h-12 w-16 text-center rounded-tl-xl rounded-br-xl duration-300">
                  About
                </li>
                <li className="hover:bg-[#d9f688] h-12 w-16 text-center rounded-tl-xl rounded-br-xl duration-300">
                  Contact
                </li>
                <div className="font-normal inline-block mr-5 ml-6 text-black hover:duration-300 hover:font-semibold">
                  <p>SignUp</p>
                </div>
              </ul>
            </div>
          </div>
          <div>
            <h1>Master Foods delivery within 15 mins</h1>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Home;
