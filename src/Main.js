import Button from "./Button";
import MenuElem from "./MenuElem";
import TestimElem from "./TestimElem.js"
import salad from "./assets/greek_salad.jpg"
import bread from "./assets/bruchetta.svg"
import dessert from "./assets/lemon_dessert.jpg"
import johanes from "./assets/johanes.jpg"
import matilda from "./assets/matilda.jpg"
import rosalinde from "./assets/rosalinde.jpg"
import owners1 from "./assets/Mario_and_Adrian_a.jpg"
import owners2 from "./assets/Mario_and_Adrian_b.jpg"


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

const testimonials = {
    cust1: {
        name: "Johanes",
        description: "Everything was ok, I wasn't on the same page with staff though",
        rating: 3,
        img: johanes,
    },
    cust2: {
        name: "Matilda",
        description: "The pasta dish was flavorful and hearty, and the portion size was generous.",
        rating: 5,
        img: matilda,
    },
    cust3: {
        name: "Rosalinde",
        description: "Super tasty wine! But the portions were a bit small",
        rating: 4,
        img: rosalinde,
    }
}


function Main(props) {

    if (props.opt1 === true) {
        //Main sections for homepage
        return (
            <main>
                <section id="highlights">
                    <div id="container1">
                    <h2>Specials</h2>
                    <Button text="Online menu"/>
                    </div>
                    <div id="container2"> 
                    <MenuElem {...menu.salad}/>
                    <MenuElem {...menu.bread}/>
                    <MenuElem {...menu.dessert}/>
                    </div>
                </section>
                <section id="testimonials">
                    <TestimElem {...testimonials.cust1}/>
                    <TestimElem {...testimonials.cust2}/>
                    <TestimElem {...testimonials.cust3}/>
                </section>
                <section id="about">
                    <div>
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p>Little Lemon is a charming neighborhood
                            bistro thatserves simple food and classic
                            cocktails in a lively but casual environment.
                            The restaurant features a locally-sourced menu
                            with daily specials.</p>
     
                    </div>
                    <img id="botImg" src={owners1} alt="Mario and Adrian on the kitchen infront of a window" />
                    <img src={owners2} alt="Mario and Adrion on the kitchen infront of a furnace smilling" />
       
                </section>
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