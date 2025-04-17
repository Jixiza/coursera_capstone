 import logo from './assets/white_logo.svg';




function Footer(props) {

     const goHome = () => {
    let buttonStatus = "home";
    return props.buttonStatus(buttonStatus)
  }
   const goOrder = () => {
    let buttonStatus = "order";
    return props.buttonStatus(buttonStatus)
  }
  return (
    <footer>
          <img src={logo} alt="Little Lemon logo" />
          <div>
              <h3>Dormant navigation</h3>
            <ul>
              <li><a href="#navigation" onClick={goHome}>Home</a></li>
              <li><a href="#about" onClick={goHome}>About</a></li>
              <li><a href="#highlights" onClick={goHome}>Menu</a></li>
              <li><a href="#order" onClick={goOrder}>Reservation</a></li>
              <li><a href="#highlights" onClick={goHome}>Order online</a></li>
              <li><a>Login</a></li>
              
        </ul>
          </div>
          <div>
              <h3>Contacts</h3>
                  <ul>
              <li>Address: Chicago</li>
              <li>Phone number: xx-xxx-xxx-xx</li>
              <li>Email: MyLemon@littlelemon.com</li>
 
              
        </ul>
          </div>
          <div>
            <h3>Social-media</h3>
            <ul>
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
              
        </ul>
        </div>
    </footer>
  );
}


export default Footer