import arrow from "./assets/arrow.svg"

function BackButton(props) {
      const handleClick = () => {

    let buttonStatus = true;
 
    return props.buttonStatus(buttonStatus)
  }
    return(
    <div id="arrow" onClick={handleClick}>
        <img src={ arrow} alt="green arrow in yellow circle"/>
    </div>
    )
}

export default BackButton