import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
  return (
           <section className="flex justify-stretch h-[4rem]" >

        <div className="flex flex-row items-center w-[10rem] justify-center">
          <h1 class="ColorOrange weight900">NESTO</h1>
        </div>

        <div className=" flex">
          <div className=" flex">
            <form class="w-[400px] mx-auto">
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-1 pointer-events-none">
                  <svg class="w-4  text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" class="mt-[6px] h-[1rem] block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Around Me" required />
                <button type="submit" class="bgOrange text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Near me</button>
              </div>
            </form>

            <div className=" flex border-1 border-solid w-[15rem] justify-center py-3">
              <p className="">Wed, 19 JUL - Thu, 20 JUL</p>
            </div>
            <div className=" flex border-1 border-solid w-[10rem] justify-center py-3">
              <p className="" >1 Room, 1 Guest</p>
            </div>
            <div className="bgPeach flex border-1 border-solid w-[7rem] justify-center py-3">
              <button className="">Search</button>
            </div>
          </div>
        </div>

        <div className=" flex w-[15rem] justify-evenly py-3 items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
          <div>
            <FontAwesomeIcon icon={faCircleUser} />
            <button>Login / Signup</button>
          </div>
        </div>

       </section>

  );
};

export default Header;

