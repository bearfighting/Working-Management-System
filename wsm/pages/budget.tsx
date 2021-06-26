import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from '../components/navi';
import Budget from '../components/budget';

export default function Contact() {
    return (
        <>
            <header>
                <Navi />
            </header>
            <main style={{ height: "90%" }}>
                <Budget />
            </main>
        </>
    )
}
