
// import './App.css';
import Footer from '../footer/footer';
import Header from '../header/header';
function Landing() {
  return (
   
    <div className="App">
      <div id='root'></div>
      <Header/>
      <div style={{backgroundColor:'white' , height:'2px'}}></div>
      {/* <h1>Welcome to Booking Hotels</h1> */}
      <img style={{width:'100%',height:'10%'}} src={""} alt="horse" />
      <div style={{backgroundColor:'white' , height:'2px'}}></div>
      <img style={{width:'100%',height:'10%'}} src={""} alt="horse" />
      <Footer/>;
    </div>
  );
}
export default Landing;
