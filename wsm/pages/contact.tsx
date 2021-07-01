import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from '../components/navi';
import Contact from '../components/contact/contact';

export default function Contact() {
    return (
        <>
            <header>
                <Navi />
            </header>
            <main style={{ height: "90%" }}>
                <Contact />
            </main>
        </>
    )
}
