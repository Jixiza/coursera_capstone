import header_photo from "./assets/table_restaurant.jpg";
import BackButton from "./BackButton";
import Button from "./Button.js";


function HeaderOrder(props) {

  const status = (e) => {

    let buttonStatus;
    if (e === true) {
       buttonStatus = "home";
    }
    else {
       buttonStatus = "";
    }
    
    return props.buttonStatus(buttonStatus)
  }



  return (
    <header>
      <div id="headerOrder">
        <img id="headerImg" src={ header_photo} alt="table standing outside with served dishes and glasses for two persons"/>
        <BackButton buttonStatus={status} />
    
       </div>
    </header>
  );
}


export default HeaderOrder