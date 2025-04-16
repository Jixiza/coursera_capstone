import Footer from './Footer.js';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import { useState } from "react";
import './App.css';

function App() {
  const [orderButton, setOrderButton] = useState(false)
 
  return (
    <>
      <Nav buttonStatus={e => setOrderButton(e) }/>
      <Header buttonStatus={e => setOrderButton(e) }/>
      <Main opt1={ orderButton}/>
      <Footer />
    </>
  );
}

export default App;
