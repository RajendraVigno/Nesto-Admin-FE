import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSummary = () => {
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
                        <div className='ml-5 flex justify-between p-3 py-2'>
                            <h4>1. Yours Details</h4>
                            <p>Modify</p>
                        </div>
                        <div className='flex'>
                            <div className='ml-10 mr-3'>
                                <p>rajendra</p>
                            </div>
                            <div className='mr-3'>
                                <p>rajendra@gmail.com</p>
                            </div>
                            <div className=''>
                                <p>1234123443</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 p-2 m-2'>
                        <div>
                            <h6>choose payment method to pay</h6>
                            <p>100% safe and secure payments</p>
                        </div>
                        <div className='flex'>
                            <div className='w-[30%] p-3'>
                                <div className='border-3 m-2 p-2'>
                                    <h5>Pay at Hotel</h5>
                                </div>
                                <div className='border-3 m-2 p-2'>
                                    <p>pay now</p>
                                </div>
                            </div>
                            <div className='w-[70%] text-center'>
                                <p>no payment needed today</p>
                                <p>
                                    we will confirm your stay without any charge.pay directly ar the hotelduring your stay
                                </p>
                                  <button onClick={()=>navigate("/confirmation")} type="button" class="borderOrange h-[3rem] py-2.5 px-5 me-2 mb-2 text-sm font-medium rounded-lg text-gray-900  hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Boook Now</button>
                            </div>
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

export default PaymentSummary;

