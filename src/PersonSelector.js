import { useState } from "react";







function PersonSelector() {
    const [value, setValue] = useState(0);
    const [info, setInfo] = useState({
        blankInfo: "selectorInfoBlank",
        textInfo: " ",
    });
    const handleChange = (event) => {
        setValue(event.target.value);
    }


// const [complexState, setComplexState] = useState({
//   user: { name: "John", age: 30 },
//   items: ["item1", "item2"]
// });

// setComplexState({
//   ...complexState,
//   user: { ...complexState.user, age: complexState.user.age + 1 }
// });



    const incr = () => {
        if (value <= 4) {
            if (value < 4)
                return setValue(value + 1 )
            else if (value === 4) {
                setInfo({ ...info, textInfo: "Currently we have only tables for 4 persons", blankInfo: "selectorInfo" });
                return value;
            }
        }
        else 
            return null
    }

    const decr = () => {
        if (value > 0) {
            if (value <= 4) {
                setInfo({ ...info, textInfo: " ", blankInfo: "selectorInfoBlank" });
  
            }

            return setValue( value - 1 )
        }
        else
            return null;
    }

  return (
      <div id="PersonSelector">
          <p id="infoText">{info.textInfo}</p>
          <button onClick={decr} id={info.blankInfo}>-</button>
          <input placeholder="0" type="number" value={value} onChange={handleChange} />
          <button onClick={incr}>+</button>
    </div>
  );
}


export default PersonSelector