import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from '../components/navi';
import Budget from '../components/budget';

export default function Contact(props) {
    const [connecte, setConnecte] = useState(false);

    useEffect(() => {
        if (props?.user?.id) {
            setConnecte(true);
        } else {
            setConnecte(false);
        }
    }, [props]);
    return (
        <>
            <header>
                <Navi connecte={connecte} />
            </header>
            <main style={{ height: "90%" }}>
                <Budget />
            </main>
        </>
    )
}
