import { useState } from "react";
import FormField from "./FormField";
import Button from "./Button"

function FormsReserve(props) {

    const [formData, setFormData] = useState({
        name: "Name",
        email: "name@email.com",
        phone: "",
    })

    const isNameValid = () => formData.name !== ""
    const isEmailValid = () => formData.email !== ""

    const invalidNameErrorMessage = '"Name" is a required field';
    const invalidEmailErrorMessage = '"E-mail" is a required field';

const [submit,setSubmit] = useState("forms")
    const goHome = (e) => {
        if (e === true) {
            setSubmit("home");
        }
    }

    const areAllFieldsValid = () =>  isNameValid()
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Your reservation submited")


        props.buttonStatus(submit);
    }
    let tmp;
    let tmp1;
  
        if (areAllFieldsValid())
            tmp = "true"
        else if (!areAllFieldsValid())
            tmp = "false"
        else
            tmp = "undefined"
    
    
            if (isNameValid())
            tmp1 = "true"
        else if (!isNameValid())
            tmp1 = "false"
        else
            tmp1 = "undefined"

    return (
        <main>
            <section>
                <p>Date of your reservation: { props.data.date}</p>
                <p>Time of your reservation: { props.data.time}</p>
                <p>Number of invited persons: { props.data.persons}</p>
                <p>Chosen occasion: { props.data.occasion}</p>
            </section>
            <section>
                <p>We would ask for your name, e-mail and phone number so we can contact you in case of any changes</p>
                <p>all = {tmp}</p>
                <p>name = { tmp1}</p>
                <form onSubmit={handleSubmit}>

                    <FormField
                        id="selectorInfo"
        label="Please enter your name" 
        htmlFor="name" 
        hasError={!isNameValid()} 
        errorMessage={invalidNameErrorMessage}
      >
        <input 
          type="text" 
          id="name" 
        name="name"
            placeholder="name"                    
          maxLength={30} 
          value={formData.name} 
          required={true} 
          onChange={e => setFormData({...formData, name: e.target.value})}
        />
      </FormField>

                    {/* <label for="name">Please enter your name</label>
                    <input type="text" id="name" required={true} placeholder="Name" /> */}
                    

                    <FormField 
        label="Please enter your email" 
        htmlFor="email" 
        hasError={!isEmailValid()} 
        errorMessage={invalidEmailErrorMessage}
      >
        <input 
          type="email" 
          id="email" 
          name="email" 
                    placeholder="E-mail"
          value={formData.email} 
          required={true} 
          onChange={e => setFormData({...formData, email: e.target.value})}
        />
      </FormField>
                    {/* <label for="email">Please enter your e-mail</label>
                    <input type="email" id="email" required={true} placeholder="E-mail" /> */}
                    

                    <label  for="phoneNum">Please enter your phone number (optional)</label>
                    <input type="tel" id="phoneNum" placeholder="Phome humber"/>
                    <Button text="Confirm" type="submit" buttonStatus={goHome}  disabled={!areAllFieldsValid()}/>
                </form>
            </section>
        </main>
    )
}

export default FormsReserve