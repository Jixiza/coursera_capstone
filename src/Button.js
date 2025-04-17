

function Button(props) {

  const handleClick = () => {

    let buttonStatus = true;
 
    return props.buttonStatus(buttonStatus)
  }
  return (
    <div id="button" onClick={handleClick}>
          <span>{props.text}</span>
    </div>
  );
}


export default Button