import { Button } from "@mui/material"
import FilterComp from "./filterComp"
import data from "../../mockData/products.json"
import Header from "../header/header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear } from "@fortawesome/free-solid-svg-icons"


const Products = () => {
  console.log(data)

  const Categories = [{
    heading: "Categories",
    title: ["Family Nestos", "Your friendly neighood stay",]
  }]
  const collections = [{
    heading: "Collections",
    title: ["Family Nestos", "Your friendly neighood RoomService", "For group travelrer", "Local ids accepted", "nestos well come couples",]
  }]
  const hotelFacility = [{
    heading: "HotelFacility",
    title: ["Fridze", "TV", "bed"]
  }]
  const accomidationType = [{
    heading: "AccomidationType",
    title: ["nesto  home", "hotel"]
  }]

  const checkInFeautures = [{
    heading: "Check-in features",
    title: ["Pay At Hotel",]
  }]

  return (
    <div style={{fontFamily: "Inter, sans-serif"}}>
      {/* head section */}
      <Header />
      {/* body section */}
      <section className="flex">

        {/* left side  */}
        <aside className="border w-[25%] hide-scrollbar m-2 p-2" style={{height: "60rem", overflow: "auto"}}> 
          <div className="ml-[2rem]">
            <div className="flex justify-between p-2">
              <h2>Filters</h2>
              <p className="ColorOrange text-[red]">Clear all</p>
            </div>
            <p>Popular locations in Hyderabad, Telangana, India</p>

          </div>

          <div class="relative mb-6 flex justify-center">
            <label for="labels-range-input" class="sr-only">Labels range</label>
            <input id="labels-range-input" type="range" value="1000" min="100" max="1500" class="w-[15rem]  h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
            <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-10 -bottom-6">Min ($100)</span>
            <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-10 -bottom-6">Max ($1500)</span>
          </div>
          <hr />
          <FilterComp det={collections} />
          <FilterComp det={Categories} />
          <FilterComp det={hotelFacility} />
          <FilterComp det={accomidationType} />
          <FilterComp det={checkInFeautures} />

        </aside>


        {/* right side */}
        <section className="border w-[75%] hide-scrollbar " style={{height: "60rem", overflow: "auto"}}>
          <div>
            {/* top */}
            <div className="flex">
              <div className="w-1/2 py-3">
                <h3 className="ml-2">54 NESTOs in Around me</h3>
              </div>
              <div className="flex w-1/4 justify-evenly items-start py-3">
                <p>Map View</p>
                <label class="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer"  />
                  <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex w-1/4 justify-evenly items-start py-3">
                <p>Sort By</p>
                <form class="max-w-sm">
                  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Popularity</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </form>
              </div>
            </div>
            {/* offer */}
            <div className="border w-[30%]">
              <p className="ml-2">Up to 80% off. Valid untill31st December 2025.</p>
            </div>
          </div>

          {/* card */}
          {data?.map((detaisl, ind) => {
            console.log(detaisl)
            return <>
              <div className="flex m-2">
                <div id="carouselExampleControls" style={{ overflow: "hidden" }} class="carousel slide  w-50" data-ride="carousel">
                  <div class="carousel-inner h-30">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src={detaisl.best_image} />
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?cs=srgb&dl=architecture-building-chairs-2034335.jpg&fm=jpg" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?cs=srgb&dl=architecture-building-chairs-2034335.jpg&fm=jpg" alt="Third slide" />
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                <div>
                  <div class="">
                    <img class="w-20 h-20" style={{ height: "4rem", margin: "4px" }} src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?cs=srgb&dl=architecture-building-chairs-2034335.jpg&fm=jpg" alt="First slide" />
                  </div>
                  <div class="">
                    <img class="w-20 h-20" style={{ height: "4rem", margin: "4px" }} src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?cs=srgb&dl=architecture-building-chairs-2034335.jpg&fm=jpg" alt="First slide" />
                  </div>
                  <div class="">
                    <img class="w-20 h-20" style={{ height: "4rem", margin: "4px" }} src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?cs=srgb&dl=architecture-building-chairs-2034335.jpg&fm=jpg" alt="First slide" />
                  </div>
                  <div class="">
                    <img class="w-20 h-20" style={{ height: "4rem", margin: "4px" }} src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?cs=srgb&dl=architecture-building-chairs-2034335.jpg&fm=jpg" alt="First slide" />
                  </div>
                </div>
                <div>
                  <div className="ml-3">
                    <div className="flex">
                      <div className="w-[22rem]">
                        <h6>{detaisl.name}</h6>
                        <p>{detaisl.address}</p>
                      </div>
                      <div class="w-[10rem]">
                        <p style={{ fontSize: "small", color: "#ff6d00" }}>18 people booked this hotel in last 6 hours</p>
                      </div>
                    </div>
                    <div>
                      <p>(21 Ratings)·Excellent</p>
                      <p className="flex justify-content-between">
                        <span >parking facity</span>
                        <span>divin area</span>
                        <span>free wifi</span>
                        <span>+12 more</span>
                      </p>
                    </div>
                    <div className="flex">
                      <div>
                        <h3>1933</h3><span>+ ₹285 taxes & fees · per room per night</span>
                      </div>
                      <div className="flex items-end">
                        <button type="button" class="borderOrange h-[3rem] py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900  rounded-lg  hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ViewDetails</button>
                        <button type="button" class="borderOrange h-[3rem] focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">BookNow</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </>
          })}
        </section>
      </section>
    </div>
  )
}

export default Products

