import { Link } from "react-router-dom";

export function Index() {

    return (
        <>
            <p className="index">Olá! Este é o saguão da nossa aplicação.</p>
            <p>Visite our pages:</p>
            <Link to='cases'><p>Cases</p></Link>
            <Link to='contact'><p>Contact</p></Link>
            <Link to='about-us'><p>About us</p></Link>
            <Link to='auth'><p>User Area</p></Link>
        </>
    )
}