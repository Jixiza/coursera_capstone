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
  const goNone = () => {
    let buttonStatus = "nothing";
    return props.buttonStatus(buttonStatus)
  }

  return (
    <footer>
          <img src={logo} alt="Little Lemon logo" />
          <div>
              <h3>Dormant navigation</h3>
            <ul>
              <li><a aria-label="homepage" href="#navigation" onClick={goHome}>Home</a></li>
              <li><a aria-label="about section" href="#about" onClick={goHome}>About</a></li>
              <li><a aria-label="our menu" href="#highlights" onClick={goHome}>Menu</a></li>
              <li><a aria-label="reservation page" href="#order" onClick={goOrder}>Reservation</a></li>
              <li><a aria-label="order online" href="#highlights" onClick={goHome}>Order online</a></li>
              <li><a aria-label="login page" href="#none" onClick={goNone} >Login</a></li>
              
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
              <li><a aria-label="to facebook page" href="https://facebook.com">Facebook</a></li>
              <li><a aria-label="to twitter page" href="https://twitter.com">Twitter</a></li>
              <li><a aria-label="to instagram page" href="https://instagram.com">Instagram</a></li>
              
        </ul>
        </div>
    </footer>
  );
}


export default Footer