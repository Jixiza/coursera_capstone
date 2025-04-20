
const FormField = ({ children, label, htmlFor, hasError, errorMessage }) => {
  // let styleInfo;
  // {hasError && errorMessage ? styleInfo="selectorInfoGen" : styleInfo="selectorInfoBlankGen"}
  return (
    <div >
      {hasError && errorMessage ? 
        <p data-testid="error-message" id="infoText">{errorMessage}</p> : null}
      {/* <p id={ styleInfo}>test</p> */}
      <label htmlFor={htmlFor} >{label}</label>
      {children}
    </div>
  );
};

export default FormField;
