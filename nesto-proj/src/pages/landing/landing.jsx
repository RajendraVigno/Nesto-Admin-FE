
// import './App.css';
import { fireEvent } from '@testing-library/dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Landing() {
  return (

    <div className="App">
      {/* <div id='root'></div> */}
      <Header path={{ path: "login" }} />
      {/* <div style={{backgroundColor:'white' , height:'2px'}}></div> */}
      {/* <h1>Welcome to Booking Hotels</h1> */}
      {/* <img style={{width:'100%',height:'10%'}} src={""} alt="horse" /> */}
      {/* <div style={{backgroundColor:'white' , height:'2px'}}></div> */}
      {/* <img style={{width:'100%',height:'10%'}} src={""} alt="horse" /> */}
      <div>
        <section className="flex justify-around h-[4rem]" >
          <div className=" flex justify-center">
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
        </section>
        <section className='p-5'>
          <img src="https://assets.oyoroomscdn.com/cmsMedia/8832fad8-25a1-4a70-a28f-6116811c625b.jpg" alt="" />
        </section>
        <section className='p-5'>
          <img src="https://assets.oyoroomscdn.com/cmsMedia/33e8565d-f803-49ab-9269-a4bc97cd835d.jpg" alt="" />
        </section>
        <section className='p-5'>
          <div className='border-2 flex justify-between items-center p-4'>
            <div className='flex w-50  '>
              <div>
                <FontAwesomeIcon icon={faFireFlameCurved} style={{height: "4rem"}}/>
                 {/* <FontAwesomeIcon icon={faCircleExclamation}/>  */}
              </div>
              <div style={{ textAlign: "start", marginLeft: "7rem" }}>
                <h2 className='fontWait900'>Get access to exclusive deals</h2>
                <p>Only the best deals reach your inbox</p>
              </div>
            </div>
            <div className='flex '>
              <div class="mb-6">
                <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <button type="button" class="borderOrange h-[3rem] py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900  rounded-lg  hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Search</button>
            </div>
          </div>
        </section>
        <section className='bgAsh'>
          <div className='flex'>
            <div className='w-50'>
              <img src="https://assets.oyoroomscdn.com/cmsMedia/b44cad94-daf3-4989-b4d6-8b22487c589a.png" alt="" />
            </div>
            <div className='w-50 p-5'>
              <div className=''>
                <h3 className='fontWait900'>There's an NESTO around. Always.</h3>
                <p>More Destinations. More Ease. More Affordable.</p>
              </div>
              <div className='flex p-5 ml-[20%]'>
                <div>
                  <h2>35+</h2>
                  <p>Countries</p>
                </div>
                <div>
                  <h2>174,000++</h2>
                  <p>Hotels & Homes</p>
                </div>
              </div>
              <div className='flex flex-nowrap p-4'>
                  <li>Indonesia</li>
                  <li>Malaysia</li>
                  <li>Denmark</li>
                  <li>US</li>
                  <li>UK</li>
                  <li>Netherlands</li>
              </div>
            </div>
          </div>

        </section>
      </div>
      <Footer />;
    </div>
  );
}
export default Landing;
