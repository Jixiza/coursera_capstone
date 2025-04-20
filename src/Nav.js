import logo from './assets/logo.svg';



function Nav(props) {

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
    <nav id="navigation">
      <img src={logo} alt="Little Lemon logo with a name of the restaurant" />
        <ul>
        <li><a aria-label="homepage" href="#navigation" onClick={goHome}>Home</a></li>
              <li><a aria-label="about section" href="#about" onClick={goHome}>About</a></li>
              <li><a aria-label="our menu" href="#highlights" onClick={goHome}>Menu</a></li>
              <li><a aria-label="reservation page" href="#order" onClick={goOrder}>Reservation</a></li>
              <li><a aria-label="order online" href="#highlights" onClick={goHome}>Order online</a></li>
              <li><a aria-label="login page" href="#none" onClick={goNone} >Login</a></li>
              
        </ul>
    </nav>
  );
}


export default Nav