import star from "./assets/star.png"

function Stars(props) {

    switch (props.rating) {
        case 3:
            return (
                <div>
                    <img id="star" src={star} alt="star icon"/>
                    <img id="star" src={star} alt="star icon"/>
                    <img id="star" src={star} alt="star icon"/>
                </div>
            );
        case 4:
            return (
                <div>
                    <img id="star" src={star} alt="star icon"/>
                    <img id="star" src={star} alt="star icon" />
                    <img id="star" src={star} alt="star icon"/>
                    <img id="star" src={star} alt="star icon"/>
                </div>
            );
        case 5:
            return (
                <div>
                    <img id="star" src={star} alt="star icon"/>
                    <img id="star" src={star} alt="star icon"/>
                    <img id="star" src={star} alt="star icon"/>
                    <img id="star" src={star} alt="star icon"/>
                    <img id="star" src={star} alt="star icon"/>
                </div>
            );
    }


    
}





function TestimElem(props) {
        const altTxt = "customer named " +  props.name ;
  return (
      <div id="testimElems">
          <img src={props.img} alt={altTxt} />
          <p>{props.name } </p>
          <Stars rating={props.rating}/>
          <p>{props.description}</p>

          
    </div>
  );
}


export default TestimElem