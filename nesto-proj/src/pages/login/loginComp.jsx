import { useState } from "react"
import { useFormik } from 'formik';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const LoginComp = () => {
  const formik = useFormik({
    initialValues: {
      mobileNumber: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  const [] = useState()
  return (
    <Background>
      <div class="flex align-center py-3 container">
        <a href="https://www.google.com" target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
          >
          <h1 className="ColorOrange">NESTO</h1></a>
        <h4 class="text-white container py-2">Hotels and homes across 800 cities, 24+ countries</h4>
      </div>

      <div className="d-flex flex-row justify-content-between" style={{padding: "100px"}}>
        
        <div class=" p-5 align-items-center d-flex">
          <div className="" style={{ width: "500px" }}>
            <h2 class="text-white" style={{fontSize: "50px"}}>There’s a smarter way to OYO around</h2>
            <p class="text-white">Sign up with your phone number and get exclusive access to discounts and savings on OYO stays and with our many travel partners.</p>
          </div>
        </div>

        <div class=" bg-white" style={{width: "450px", borderRadius:"10px"}}>
          <div class="p-1 ps-4 align-item-center flex bgPeach">
            <FontAwesomeIcon icon={faGear}/>
            <p>Sign up & Get ₹500 OYO Money</p>
          </div>
          <div className=" d-flex flex-column p-4 gap-3 ">
            <h1>Login / Signup</h1>
            <h6>Please enter your phone number to continue</h6>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">+91</button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div role="separator" class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
              <input type="text" class="form-control" aria-label="Text input with dropdown button" />
            </div>
            <button type="button" class="bgPeach  btn w-50">Verify Number</button>
            <p>Prefer to Sign in with password instead?<span><a href="" class="ColorOrange">Click here</a></span></p>
          </div>
        </div>

      </div>
    </Background>

  )
}

export default LoginComp

const Background = styled.div`
  background-image: url("https://plus.unsplash.com/premium_photo-1663126637580-ff22a73f9bfc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBiZWRyb29tfGVufDB8fDB8fHww");
  background-size: cover;
  background-position: center;
  height: 100vh;
  font-family: "Inter, sans-serif" !important
`;
