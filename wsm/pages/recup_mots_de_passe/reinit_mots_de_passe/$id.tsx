import React, { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from '../../../components/navi';
import Reinit_mots_de_passe from '../../../components/recup_mots_de_passe/reinit_mots_de_passe';

export default function App(props) {
    return (
        <>
            <header>
                <Navi connecte={false} />
            </header>
            <main style={{ height: "90%" }}>
                <Reinit_mots_de_passe url={props.url} />
            </main>
        </>
    )
}
