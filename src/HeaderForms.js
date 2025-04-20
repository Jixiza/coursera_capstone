
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
      <div >
        <BackButton buttonStatus={status} />
              <h2>Confirm your reservation</h2>
              <h3>Please check again your reseravtions info and send its details</h3>
       </div>
    </header>
  );
}


export default HeaderOrder