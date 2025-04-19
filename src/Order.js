import { useState } from 'react';


import Button from './Button.js'



function Order() {

    const [order, setOrder] = useState({
        date: new Date().toISOString().substr(0, 10),
        time: "17:00",
        persons: 1,
        occasion: "none",
    })

    
    
        // const [value, setValue] = useState(1);
    const [info, setInfo] = useState({
        blankInfo: "selectorInfoBlank",
        textInfo: " ",
    });
    const handleChange = (event) => {

        if (event.target.value >= 0 && event.target.value <= 10) {
            setInfo({ ...info, textInfo: " ", blankInfo: "selectorInfoBlank" });
            
            setOrder({...order, persons: event.target.value});
            
        }
        else if (event.target.value < 0 || event.target.value > 10)
            setInfo({ ...info, textInfo: "Currently we have only tables for 10 persons", blankInfo: "selectorInfo" });
    }

    const clear = () => {
        if (order.persons === 0) {
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
                setOrder({...order, persons: tmp})
            }
            else if (order.persons == 10) {
                setInfo({ ...info, textInfo: "Currently we have only tables for 10 persons", blankInfo: "selectorInfo" });
        
            }
        }
    }

       const decr = () => {
        if (order.persons > 0) {
            if (order.persons <= 10) {
                setInfo({ ...info, textInfo: " ", blankInfo: "selectorInfoBlank" });
            }
            setOrder({ ...order, persons: order.persons - 1 })
        }
    }



    return (
        <main>
            <section id="ordertitle">
                <h2>Order a table just in a few clicks!</h2>
                <p>We offer you a possibility to order a table ot or inside, don't hesitate and try out our online reservation form!</p>
            </section>
            <section id="orderForm">
                {/* <p>date = { order.date}</p>
                <p>time = { order.time}</p>
                <p>persons = { order.persons}</p>
                <p>occasion = { order.occasion}</p> */}
                <form > 
                <div id="resDateTime">
                        <label for="res-date"  >Choose date</label>

                        <input type="date" id="res-date" value={order.date} onChange={(e) => setOrder({ ...order, date: e.target.value })}/>
                        <label for="res-time">Choose time</label>
                        <select id="res-time " value={order.time} onChange={e => setOrder({ ...order, time: e.target.value })}>
      <option value="17:00">17:00</option>
      <option value="18:00">18:00</option>
      <option value="19:00">19:00</option>
      <option value="20:00">20:00</option>
      <option value="21:00">21:00</option>
      <option value="22:00">22:00</option>
                        </select>
                        

                </div>
                <p>Select number of persons</p>
                    <div id="PersonSelector">
          <p id="infoText">{info.textInfo}</p>
          <button onClick={decr} id={info.blankInfo} type="button">-</button>
          <input placeholder="0" type="number" onChange={handleChange} onFocus={clear} onBlur={ def} value={ order.persons} />
          <button onClick={incr} type="button">+</button>
    </div>
                    <label for="occasion">Occasion</label>
                    <select id="occasion" value={order.occasion} onChange={e => setOrder({...order, occasion: e.target.value})}>
    <option value="none">none</option>
    <option value="Birthday">Birthday</option>
    <option value="Anniversary">Anniversary</option>
    <option value="Engagement">Engagement</option>
        </select>
                    <Button text="Make Your reservation" type="submit"/>
                </form>
            </section>
        </main>
    )
        
    
}

export default Order