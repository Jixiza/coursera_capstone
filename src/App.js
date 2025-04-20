import Footer from './Footer.js';
import Header from './Header.js';
import Nav from './Nav.js';
import Home from './Home.js';
import Order from './Order.js';
import FormsReserve from './FormsReserve';
import Nothing from './Nothing.js';
import { useState } from "react";
import './App.css';
import HeaderOrder from './HeaderOrder.js';




  
function App() {
  const [orderButton, setOrderButton] = useState("home");
  function handleClick(e){
    return setOrderButton(e) 
  }

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    persons: "0",
    occasion: "none",
});

  let block1;
  let block2;
  if (orderButton === "home") {
    block1 = <Header buttonStatus={e => setOrderButton(e)} />
    block2 = <Home buttonStatus={e => setOrderButton(e)} />
  } else if (orderButton === "order") {
    block1 = <HeaderOrder buttonStatus={e => setOrderButton(e)} />
    block2 = <Order buttonStatus={e => setOrderButton(e)} dataLift={setFormData}/>
  } else if(orderButton === "nothing"){
    block2 = <Nothing />
   }
 
  
  return (
    <>
      <Nav buttonStatus={handleClick} />
      {block1}
      {block2}
      <Footer buttonStatus={handleClick}/>
     </>

  )
}

export default App;
