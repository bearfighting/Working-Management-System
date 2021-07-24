import React, { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from '../../components/navi';
import Entrer_Mail from '../../components/recup_mots_de_passe/entrer_mail';

export default function App(props) {
  return (
    <>
      <header>
        <Navi connecte={false} />
      </header>
      <main style={{ height: "90%" }}>
        <Entrer_Mail />
      </main>
    </>
  )
}
