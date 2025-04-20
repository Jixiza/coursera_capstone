

function Button(props) {

  const handleClick = () => {

    let buttonStatus = true;
 
    return props.buttonStatus(buttonStatus)
  }
  return (
    <button aria-label={ props.text} type={props.type}  id="button" onClick={handleClick} disabled={ props.disabled}>
      <span>{props.text}</span>
    </button>
    
  );
}


export default Button