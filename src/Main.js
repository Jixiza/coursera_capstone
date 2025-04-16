

function Main(props) {

    if (props.opt1 === true) {

        return (
            <main>
                <section><p>Some random text for now</p></section>
            </main>
        );
    } else {
            return(
                    <main>
                <section><p>Definetly another text</p></section>
                </main >
            );
    }
}


export default Main