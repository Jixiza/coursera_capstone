

function Button(props) {

  const handleClick = () => {

    let buttonStatus = true;
 
    return props.buttonStatus(buttonStatus)
  }
  return (
    <button type={ props.type} id="button" onClick={handleClick}>
          <span>{props.text}</span>
    </button>
  );
}


export default Button