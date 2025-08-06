import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingSummary = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="border border-2 static ...">
                <h1 class="ColorOrange weight900 p-2 m-2">NESTO</h1>
            </div>
            <div class="p-2 ml-[3rem]">
                <h5 className='ColorOrange'>Modify your booking</h5>
            </div>
            <div className='flex p-3 ml-[3rem]'>
                <div className='w-[60%] m-2 p-2'>
                    <div className='border-2 mb-5 h-20  flex items-center bgPeach'>
                        <h6 className='ml-5'>Yay! you just saved ₹1084 on this booking!</h6>
                    </div>
                    <div className='border-2 p-2 m-2'>
                        <div className='ml-5'>
                            <h4>1. Enter your details</h4>
                            <p>We will use these details to share your booking information</p>
                        </div>
                        <div className='flex flex-wrap justify-evenly ml-5 mb-10'>
                            <div className='flex justify-around w-[100%]'>
                                <div class="">
                                    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                    <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-half p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div class="mb-6">
                                    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                    <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-half p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                            </div>
                            <form>
                                <div class="flex mr-5 justify-evenly w-[100%]">
                                    <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">your number</label>
                                    <button id="dropdown-button" data-dropdown-toggle="dropdown" class="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 dark:border-gray-700 dark:text-white rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">+91<svg class="w-2 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg></button>
                                    <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                            <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
                                            </li>
                                            <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
                                            </li>
                                            <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
                                            </li>
                                            <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="relative w-half">
                                        <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search" required />
                                    </div>
                                </div>
                            </form>
                            {/* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" disabled>Send passcode</button> */}
                        <button onClick={()=>navigate("/paymentSummary")} type="button" class="borderOrange h-[3rem] py-2.5 px-5 me-2 mb-2 text-sm font-medium rounded-lg text-gray-900   hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Send passcode</button>
                        </div>
                    </div>
                </div>
                <div className='w-[40%] m-2 p-2'>
                    <div className="">
                        <div className="border-2">
                            <div className="flex justify-between ml-3">
                                <div className="w-[60%] m-2 p-2">
                                    <h5>Super Hotel O Ramaraopet Near Kakinada Beach</h5>
                                    <p>(8.5 ratings). Exelent</p>
                                    <p><b>1 Night</b></p>
                                </div>
                                <div className="flex justify-around w-[40%] m-2">
                                    <img className="h-[60%] w-[50%]" src="https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill" />
                                </div>
                            </div>
                            <div className='flex mb-2'>
                                <div className=" flex border-1 border-solid w-[50%] justify-center py-3">
                                    <p className="">Wed, 19 JUL - Thu, 20 JUL</p>
                                </div>
                                <div className=" flex border-1 border-solid w-[50%] justify-center py-3">
                                    <p className="" >1 Room, 1 Guest</p></div>
                            </div>
                            <div className=" flex border-1 border-solid p-2 py-3">
                                <p className="ml-5">Classic</p>
                            </div>
                            <div className='flex m-2 p-2 justify-around'>
                                <div>
                                    <p>Room price for 1 Night X 1 Guest</p>
                                    <p>Instant discount</p>
                                    <p>55% Coupon Discount</p>
                                </div>
                                <div>
                                    <p>₹2879</p>
                                    <p>-₹908</p>
                                    <p>-₹1084</p>
                                </div>
                            </div>
                            <hr></hr>
                            <div className='flex justify-around'>
                                <div>
                                    <p>Payable Amount</p>
                                </div>
                                <div>
                                    <h2>₹887</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingSummary;

