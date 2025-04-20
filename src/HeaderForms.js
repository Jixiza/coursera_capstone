
import BackButton from "./BackButton";


function HeaderOrder(props) {

  const status = (e) => {

    let buttonStatus;
    if (e === true) {
       buttonStatus = "order";
    }
    else {
       buttonStatus = "";
    }
    
    return props.buttonStatus(buttonStatus)
  }



  return (
    <header>
      <div id="formHeader">
        <BackButton buttonStatus={status} />
              <h2>Confirm your reservation</h2>
              <h4>Please check again your reseravtions info and send its details</h4>
       </div>
    </header>
  );
}


export default HeaderOrder