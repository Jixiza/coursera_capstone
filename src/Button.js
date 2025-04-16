import { useState } from "react";

function Button(props) {
    const [buttonStatus, setButtonStatus] = useState();
  const handleClick = () => {
    setButtonStatus(true)
    alert("you have clicked")
    return props.buttonStatus(buttonStatus)
  }
  return (
    <div id="button" onClick={handleClick}>
          <span>{props.text}</span>
    </div>
  );
}


export default Button