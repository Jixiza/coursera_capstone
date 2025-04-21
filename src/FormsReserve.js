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
    const isPhoneValid = () => formData.phone.length < 15

    const invalidNameErrorMessage = '"Name" is a required field!';
    const invalidEmailErrorMessage = '"E-mail" is a required field!';
    const invalidPhoneErrorMessage = 'Please use an existing phone number';

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
    // let tmp;
    // let tmp1;
  
    //     if (areAllFieldsValid())
    //         tmp = "true"
    //     else if (!areAllFieldsValid())
    //         tmp = "false"
    //     else
    //         tmp = "undefined"
    
    
    //         if (isNameValid())
    //         tmp1 = "true"
    //     else if (!isNameValid())
    //         tmp1 = "false"
    //     else
    //         tmp1 = "undefined"

    return (
        <main>
            <section id="userData">
                <div>
                {/* <p><span> Date of your reservation:</span><span> { props.data.date}</span></p>
                <p><span>Time of your reservation:</span><span> { props.data.time}</span></p>
                <p><span>Number of invited persons:</span><span> { props.data.persons}</span></p>
                    <p><span>Chosen occasion:</span><span> {props.data.occasion}</span></p> */}
                    <p> Date of your reservation: </p>
                <p>Time of your reservation:</p>
                <p>Number of invited persons: </p>
                    <p>Chosen occasion: </p>
                </div>
                <div>
                    <p>{ props.data.date}</p>
                    <p>{ props.data.time}</p>
                    <p>{ props.data.persons}</p>
                    <p>{props.data.occasion}</p>
                </div>
            </section>
            <section>
                <h5>We would ask for your name, e-mail and phone number so we can contact you in case of any changes</h5>

                <form onSubmit={handleSubmit} id="selectorInfo">
                    <div>
                    <FormField
                        
        label="Please enter your name:" 
        htmlFor="name" 
        hasError={!isNameValid()} 
        errorMessage={invalidNameErrorMessage}
      >
        <input 
          type="text" 
          id="name" 
                            name="name"
                            aria-label="type your name"
            placeholder="name"                    
          maxLength={30} 
          value={formData.name} 
          required={true} 
          onChange={e => setFormData({...formData, name: e.target.value})}
        />
      </FormField>
</div>

                    
<div>
                    <FormField 
        label="Please enter your email:" 
        htmlFor="email" 
        hasError={!isEmailValid()} 
        errorMessage={invalidEmailErrorMessage}
      >
        <input 
          type="email" 
          id="email" 
                            name="email"
                            aria-label="type your email"
                    placeholder="E-mail"
          value={formData.email} 
          required={true} 
          onChange={e => setFormData({...formData, email: e.target.value})}
        />
      </FormField>
</div>
                    
                    <div>
                        <FormField 
        label="Please enter your phone number (optional):" 
        htmlFor="phoneNum" 
        hasError={!isPhoneValid()} 
        errorMessage={invalidPhoneErrorMessage}
      >
                            <input aria-label="type your phone number, it's optional" type="tel" id="phoneNum" placeholder="Phone humber" onChange={e => setFormData({...formData, phone: e.target.value})} maxLength={15}/>
                    </FormField>
                    </div>
               
                    <Button text="Confirm" type="submit" buttonStatus={goHome}  disabled={!areAllFieldsValid()}/>
                    
                </form>
            </section>
        </main>
    )
}

export default FormsReserve