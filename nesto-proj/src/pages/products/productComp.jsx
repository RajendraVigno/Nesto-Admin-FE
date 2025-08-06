import { Button, colors, TextField } from "@mui/material"
import FilterComp from "./filterComp"
import data from "../../mockData/products.json"
import Header from "../header/header"
import styled from 'styled-components';
import { useNavigate } from "react-router";
import { useState } from "react";



const Products = () => {
  const navigate = useNavigate()
  const [trimToggle, setTrimToggle] = useState(false)

  console.log(data)



  const Categories = [{
    heading: "Suggested for you",
    title: ["Rush deal", "Last minut deals", "5 star", "North Goa"]
  }]
  const collections = [{
    heading: "Price per night",
    title: ["₹ 0 - ₹ 1500", "₹ 1500 - ₹ 3000", "₹ 3000 - ₹ 6500", "₹ 6500 - ₹ 10000", "₹ 10000 - ₹ 15000",]
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
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* head section */}
      <Header />
      {/* body section */}
      <section className="flex bgAsh">

        {/* left side  */}
        <aside className="bgWhite w-[20%] hide-scrollbar p-2 ml-[5rem] mt-[1rem] mr-[1px]" style={{ height: "60rem", overflow: "auto" }}>
          <Background>
            <div>
              <div className="flex">
                <button type="button" class="borderOrange fontWait900 bgWhite fontSize12  p-2 w-full h-[2rem] py-1  px-5 me-2 mb-2  text-gray-900  rounded-lg  hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">EXPLORE ON MAP</button>
              </div>
            </div>
          </Background>
          <div className="" style={{marginBottom:"1rem"}}><TextField style={{height:"3rem"}} id="outlined-basic" label="search for locality/hotel name" variant="outlined" className="w-full" /></div>
          <FilterComp det={collections} />
          <FilterComp det={Categories} />
          <FilterComp det={hotelFacility} />
          <FilterComp det={accomidationType} />
          <FilterComp det={checkInFeautures} />

        </aside>


        {/* right side */}
        <section className=" w-[80%] hide-scrollbar p-2 mt-[1rem] mr-[5rem]" style={{ height: "60rem", overflow: "auto" }}>
          <div className="">
            <div>
              <div className="fontSize12"><span>Home > Hotels more in Goa</span></div>
              <div className=" py-3 flex">
                <h3 className="ml-2 mr-3 fontSize24">3128 Properties in Goa  </h3>
                <button type="button" class="borderOrange bgWhite align-center h-[2rem]  px-5 me-2 mb-2 text-sm font-medium text-gray-900  rounded-lg  hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Explore travel tips-></button>
              </div>
            </div>
            <div className="flex bgWhite justify-around items-center mb-3 py-2 ">
              <div className="flex items-center justify-between  fontWait900">
                <span>SORT BY</span>
                <button type="button" class="borderOrange bgWhite align-center  px-2 me-2 text-sm font-medium text-gray-900  rounded-lg  hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Popular</button>
              </div>
              <div><span className="fontWait900">User Rating </span><span>(Highest first)</span></div>
              <div><span className="fontWait900">Price</span> <span>(Highest first)</span></div>
              <div><span className="fontWait900">Price</span> <span>(lowest first)</span></div>
            </div>

            {data.map((details)=>{
              console.log(details)
              return <div className="flex border-2 bgWhite mb-3 cardHover">
              <div id="carouselExampleControls" class="carousel slide w-25 h-25 m-2 p-2" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active" onClick= {()=>navigate("/productDetails")}>
                    <img src={details.best_image} class="d-block w-100" alt="..." style={{height: "12rem"}}/>
                  </div>
                  {/* <div class="carousel-item">
                    <img src="https://play-lh.googleusercontent.com/R3oQgp4euQlsXUDaYuMes3K8JGtifoD-wrvHkq6q0xTYcROLiuYPqz3OBTZVWlrTq_k" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="https://cdn.pixabay.com/photo/2023/02/24/07/40/spiderman-7810368_1280.png" class="d-block w-100" alt="..." />
                  </div> */}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>

                <div className="flex mt-2 spacing-1"> 
                  <div><img src={details.hotel_images[0].url} class="d-block w-100" alt="..." /></div>
                  <div><img src={details.hotel_images[1].url} class="d-block w-100" alt="..." /></div>
                  <div><img src={details.hotel_images[2].url} class="d-block w-100" alt="..." /></div>
                  <div><img src={details.hotel_images[3].url} class="d-block w-100" alt="..." /></div>
                </div>
                
              </div>
 
              <div className="m-2 p-2 w-50">
                <div>
                  <p className={trimToggle ? "fontSize24": "trimText fontSize24"} onClick= {()=>navigate("/productDetails")}>{details.alternate_name} </p>
                <button className="ColorOrange" onClick={()=>setTrimToggle(!trimToggle)}>{ trimToggle ? "Read less..." : "Read more..."}</button>
                </div>
                
                <h3>*****</h3>
                <p><a href="">Colaungut</a>1.8 km drive to Calangute Beach</p>
                <button type="button" class="borderOrange bgWhite align-center h-[2rem]  px-3 me-2 mb-2 text-sm font-medium text-gray-900  rounded-lg  hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Couple friendly</button>
                <p className="fontSize12">Ideal spot near Calangute beach, Great breakfast buffet with live music, Cozy wooden cottages</p>
              </div>

              <div className="m-2 p-3 alignEnd">
                <div>
                  <h6 className="fontWait900 ColorOrange" style={{lineHeight: "0rem"}}>Very Good 4.0</h6>
                  <p>(7782 Ratings)</p>
                </div>
                <div>
                  <p style={{lineHeight: "0rem"}}><del>5,066</del></p>
                  <h5 style={{lineHeight: "0rem"}}>2615</h5>
                  <p className="fontSize12">+ ₹ 628 taxes & fees</p>
                  <p className="fontSize12">Per Night</p>
                </div>
                <div>
                  <p className="fontSize12 ColorOrange" onClick={()=>navigate("/login")}>Login to Book Now & Pay Later!</p>
                </div>
                <div>
                  <button  onClick={()=>navigate("/productDetails")} type="button" class="borderOrange bgWhite align-center h-[2rem]  px-3 me-2 mb-2 text-sm font-medium text-gray-900  rounded-lg  hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">More Details</button>
                </div>
              </div>
            </div>
            })}
          </div>
        </section>
      </section>
    </div>
  )
}

export default Products

const Background = styled.div`
  background-image: url("https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/mapEntryHover.png");
  background-size: cover;
  background-position: center;
  height: 8rem;
  font-family: "Inter, sans-serif" !important;
  display:flex;
  align-items:flex-end;
  justify-content:center
`;

