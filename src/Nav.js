import logo from './assets/logo.svg';


function Nav() {
  return (
    <nav>
      <img src={logo} alt="Little Lemon logo with a name of the restaurant" />
        <ul>
              <li><a>Home</a></li>
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