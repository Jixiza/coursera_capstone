import Footer from './Footer.js';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import './App.css';

function App() {
  const pressed = true;
  return (
    <>
      <Nav />
      <Header />
      <Main opt1={ pressed}/>
      <Footer />
    </>
  );
}

export default App;
