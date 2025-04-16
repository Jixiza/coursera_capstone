import logo from './assets/logo.svg';
import { useState } from "react";


function Nav(props) {
  const [buttonStatus, setButtonStatus] = useState();
  const handleClick = () => {
    setButtonStatus(false)
    return props.buttonStatus(buttonStatus)
  }
  return (
    <nav>
      <img src={logo} alt="Little Lemon logo with a name of the restaurant" />
        <ul>
        <li><a  onClick={handleClick}>Home</a></li>
              <li><a>About</a></li>
              <li><a>Menu</a></li>
              <li><a>Reservation</a></li>
              <li><a>Order online</a></li>
              <li><a>Login</a></li>
              
        </ul>
    </nav>
  );
}


export default Nav