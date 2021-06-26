import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from '../components/navi';
import Tache from '../components/tache';

export default function Contact() {
    return (
        <>
            <header>
                <Navi />
            </header>
            <main style={{ height: "90%" }}>
                <Tache />
            </main>
        </>
    )
}
