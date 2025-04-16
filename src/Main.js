import Button from "./Button";
import Menu_elem from "./Menu_elem";
import salad from "./assets/greek_salad.jpg"
import bread from "./assets/bruchetta.svg"
import dessert from "./assets/lemon_dessert.jpg"


const menu = {
    salad: {
        name: "Greek salad",
        price: "9.80",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        image: salad,
    },
    bread: {
        name: "Bruchetta",
        price: "6.00",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        image: bread,
    },
    dessert: {
        name: "Lemon dessert",
        price: "4.50",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image: dessert,
    }
}


function Main(props) {

    if (props.opt1 === true) {
        //Main sections for homepage
        return (
            <main>
                <section id="highlights">
                    
                    <h2>Specials</h2>
                    <Button text="Online menu"/>
                    
                    <Menu_elem {...menu.salad}/>
                    <Menu_elem {...menu.bread}/>
                    <Menu_elem {...menu.dessert}/>
                    
                </section>
                <section><p>Some random text for now</p></section>
                <section><p>Some random text for now</p></section>
            </main>
        );
    } else if (props.opt1 === false) {
        //Main sections for table ordering
            return(
                    <main>
                <section><p>Definetly another text</p></section>
                </main >
            );
    }
}


export default Main