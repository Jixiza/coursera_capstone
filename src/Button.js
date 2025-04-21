

function Button(props) {

  const handleClick = () => {

    let buttonStatus = true;
 
    return props.buttonStatus(buttonStatus)
  }
  return (
    <a><button aria-label={ props.text} type={props.type}  id="button" onClick={handleClick} disabled={ props.disabled}>
      <span>{props.text}</span>
    </button></a>
   
  );
}


export default Button