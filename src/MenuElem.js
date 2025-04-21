
function MenuElem(props) {
  return (
      <div id="specials">
      <img src={props.image} />
      <div>
          <h3>{props.name}<span>$ {props.price}</span></h3>
          <p>{props.description}</p>
          <a href="">Order a delivery</a>
          </div>
    </div>
  );
}


export default MenuElem