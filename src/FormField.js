
const FormField = ({ children, label, htmlFor, hasError, errorMessage }) => {
  // let styleInfo;
  // {hasError && errorMessage ? styleInfo="selectorInfoGen" : styleInfo="selectorInfoBlankGen"}
          // {/*  <p data-testid="error-message" id="infoText">{errorMessage}</p> : null} */}
  let tmp;
// {hasError && errorMessage ? tmp = errorMessage : null}
  
  if (hasError && errorMessage)
    tmp = errorMessage
  return (
    <div >
      <p id="formErrorMsg">{tmp}</p>
      <label htmlFor={htmlFor} >{label}</label>
      {children}
    </div>
  );
};

export default FormField;
