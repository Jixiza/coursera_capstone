import { useState } from 'react';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from './fakeAPI.js';
// import FormField from './FormField.js';
import Button from './Button.js'



function Order(props) {

    // --------------------------

     const isNumberOfGuestsValid = () => order.persons > 0 && order.persons <= 10;


    const occasions = ['none', 'Birthday', 'Anniversary', 'Engagement'];


const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes; 
};
    
    const initializeTimes = initialAvailableTimes => 
  [...initialAvailableTimes, ...fetchAPI(new Date())];


  const [
    availableTimes, 
    dispatchOnDateChange
  ] = useReducer(updateTimes, [], initializeTimes);

    
      const areAllFieldsValid = () => isNumberOfGuestsValid() 

//  ------------------------------

    const [order, setOrder] = useState({
        date: new Date().toISOString().substr(0, 10),
        time: availableTimes[0],
        persons: 1,
        occasion: occasions[0],
    })

    const [submit,setSubmit] = useState("order")

    const sendData = (event) => {
        event.preventDefault();
      const response = submitAPI(order);
      if (response) {
        props.buttonStatus(submit);
        props.dataLift(order);
      }
        
    
    }


    const [info, setInfo] = useState(" ");
    const handleChange = (event) => {

        if (event.target.value >= 0 && event.target.value <= 10) {
            if (event.target.value == 0)
                setInfo("Number of guests cannot be 0");
            setInfo(" ");
            
            setOrder({...order, persons: event.target.value});
            
        }
        else if (event.target.value < 0 || event.target.value > 10)
            setInfo("Currently we have only tables for 10 persons");
    }

    const handleDateChange = (e) => {
        setOrder({ ...order, date: e.target.value });
         dispatchOnDateChange(e.target.value);
}

    const clear = () => {
        if (order.persons == 0) {
            setOrder({ ...order, persons: "" })
        }
    }

    const def = () => {
        if (order.persons === "") {
            setOrder({ ...order, persons: 1 })
        }
    }


    const incr = () => {
        if (order.persons <= 10) {
            if (order.persons < 10) {
                let tmp = +order.persons + 1;
              setOrder({ ...order, persons: tmp })
              setInfo(" ");
            }
            else if (order.persons == 10) {
                setInfo("Currently we have only tables for 10 persons");
        
            }
        }
    }

       const decr = () => {
        if (order.persons > 0) {
            if (order.persons <= 10) {
                setInfo(" ");
            } 
            setOrder({ ...order, persons: order.persons - 1 })
            
        }
           if (!isNumberOfGuestsValid())
               setInfo("Number of guests cannot be 0");
       }
    
      const goForm = (e) => {
    if (e === true) {
       setSubmit("forms");
    }
          
  }



    return (
        <main>
            <section id="ordertitle">
                <h2>Order a table just in a few clicks!</h2>
                <p>We may offer you a possibility to order a table for up to 10 persons, try out our reservation form</p>
            </section>
            {/* <p>test1 = {availableTimes}</p>
            <p>test2 = {order.date }</p> */}
            <section id="orderForm">

          <form onSubmit={sendData} >
            <p>Choose the date and time of your reservation</p>
            <div id="resDateTime">
              
              <div>
              <label for="res-date">Date</label>
        <input 
          type="date" 
          id="res-date" 
          name="res-date" 
            aria-label="reservation date selection"
          value={order.date} 
          required={true} 
          onChange={handleDateChange}
                /></div>
              <div>
              <label for="res-time">Time</label>
        <select 
          id="res-time" 
                name="res-time"
                aria-label="reservation time seletion"
          value={order.time} 
          required={true} 
          onChange={e => setOrder({ ...order, time: e.target.value })}
        >
          {availableTimes.map(times => 
            <option data-testid="booking-time-option" key={times}>
              {times}
            </option>
          )}
        </select></div>
                    </div>
                <div id="PersonSelector">
               
<label htmlFor="numberOfGuests" >Select number of persons</label>
              <p id="infoTextGuests">{info}</p>
          <button id="button" aria-label="decrese number of diners" onClick={decr}  type="button">-</button>
          <input aria-label="type number of diners" id="numberOfGuests" required={true} placeholder="0" type="number" onChange={handleChange} onFocus={clear} onBlur={ def} value={ order.persons} />
          <button id="button" aria-label="increase number of diners" onClick={incr} type="button">+</button>
            </div>
            <div id="occasionBlock">
                    <label for="occasion">Occasion</label>
        <select 
          id="occasion" 
              name="occasion"
              aria-label="select occasion of reservation"
          value={order.occasion} 
          onChange={e => setOrder({...order, occasion: e.target.value})}
        >
          {occasions.map(occasion => 
            <option data-testid="booking-occasion-option" key={occasion}>
              {occasion}
            </option>
          )}
        </select></div>
                            
                    <Button text="Make Your reservation" type="submit" buttonStatus={goForm}  disabled={!areAllFieldsValid()}/>
                </form>
            </section>
        </main>
    )
        
    
}

export default Order