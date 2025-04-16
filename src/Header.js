import homepage_photo from "./assets/restauranfood.jpg"; 
import Button from "./Button.js";

function Header() {
  return (
    <header>
      <div>
       <h1>Little Lemon</h1>
      <h3>Chicago</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
      industry. Lorem Ipsum has been the industry's standard dummy 
          text ever since the 1500s</p>
        <Button text="Order table"/> 
      </div>
                    <img src={ homepage_photo} alt="4 pieces of bread with seasoning are lying on the plate that staff member is holding"/>
       

    </header>
  );
}


export default Header