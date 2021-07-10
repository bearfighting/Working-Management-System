import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from '../../../components/navi';
import Contact from '../../../components/contact/contact';

export default function ContactPage(props) {

    const id = props?.url?.params?.id;

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
                <Contact outilsId={id} />
            </main>
        </>
    )
}
