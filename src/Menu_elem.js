
function Menu_elem(props) {
  return (
      <div id="specials">
          <img src={props.image} />
          <h3>{props.name}<span>$ {props.price}</span></h3>
          <p>{props.description}</p>
          <a href="">Order a delivery</a>
          
    </div>
  );
}


export default Menu_elem