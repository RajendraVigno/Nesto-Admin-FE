import React from 'react';
import Dropdown from './dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const Confirmation = () => {
    return (
        <div>
            <div className="border border-2 static ... flex justify-between">
                <h1 class="ColorOrange weight900 p-2 m-2">NESTO</h1>
                <div className='flex'>
                    <div className='m-2'>
                    <Dropdown data={{heading: "English"}}/>
                </div>
                <div className='m-2'>
                    <Dropdown  data={{heading: <FontAwesomeIcon icon={faCircleUser} />}}/>
                </div>
                </div>
            </div>
            <div className='p-3 m-5'>
                <h3>Great! Your stay is confirmed.</h3>
                <p>You will soon receive an email confirmation on rajendra@gmail.com</p>
                <button type="button" class="borderOrange h-[3rem] py-2.5 px-5 me-2 mb-2 rounded-lg text-sm font-medium text-gray-900 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Print</button>
                <div className='border-2'>
                    <div className='flex justify-between p-3'>
                        <div>
                            <h6>Booking ID</h6>
                            <p>OT061068</p>
                        </div>
                        <div>
                            <p>Booked by rajendra on Thu, 24 Jul 2025</p>
                        </div>
                    </div>
                    <hr />
                    <div className='flex justify-between p-3'>
                        <div>
                            <h6>Super Hotel O Ramaraopet Near Kakinada Beach</h6>
                            <h6>The Best INN</h6>
                            <p>70-18-25/1C/401, Revenue Ward Number 30, Rangarao Nagar, Gudarigunta, Kakinada</p>
                            <p>Hotel Direction</p>
                            <p>Landmark:</p>
                        </div>
                        <div>
                            <img className="h-40 w-40" src='https://htl-img-res-new.s3.ap-south-1.amazonaws.com/1308/20231115/main.jpg' />
                        </div>
                    </div>
                    <hr />
                    <div className='flex justify-between p-3'>
                        <div>
                            <p>Primary Guest</p>
                            <h6>rajendra</h6>
                            <p>Mobile Number</p>
                            <h6>6300358759</h6>
                            <p>Email Address</p>
                            <h6>rajendra@gmail.com</h6>
                        </div>
                        <div>
                            <p>Check In</p>
                            <h6>2025-07-24</h6>
                            <p>Check Out</p>
                            <h6>2025-07-25</h6>
                        </div>
                        <div>
                            <p>Check In Time</p>
                            <h6>12:00 PM</h6>
                            <p>Check Out Time</p>
                            <h6>11:00 AM11:00 AM</h6> 
                        </div>
                        <div className='w-[20%]'>
                            <div>
                                <h2>1 Night</h2>
                            </div>
                            <div className='flex'>
                                <div>
                                    <p>1 Guest</p>
                                </div>
                                <div>
                                    <p>1 Room</p>
                                    <p>Classic</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <h5 className=' p-3'>Payment Details</h5>
                    <div className='m-2 p-3'>
                    <Dropdown  data={{heading: "Total payble ammount"}}/>
                </div>
                    <div className='flex  p-3'>
                        <div className='w-[75%]'>
                            <p>Your payment option is "Pay At Hotel". You will receive a call from us closer to the check-in date to confirm your arrival. In case of no response, the booking may be cancelled. Pay ₹758 online now for a smoother check-in experience.</p>
                        </div>
                        <div className='w-[25%]'>
                           <button type="button" class="borderOrange h-[3rem] py-2.5 px-5 me-2 mb-2 text-sm rounded-lg font-medium text-gray-900 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Pay now</button>
                        </div>
                    </div>
                    <div className='flex justify-between p-3'>
                        <div>
                            <h6><b>Things to Know</b></h6>
                        </div>
                        <div className='w-50'>
                            <p>Something not right? <span className='ColorOrange'>Chat with us</span> for help. </p>
                            <p className='ColorOrange'>Cancel Booking</p>
                            <p className='ColorOrange'>Read NESTO's Terms and Condition</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;

