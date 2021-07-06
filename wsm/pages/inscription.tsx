import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from '../components/navi';
import Inscription from '../components/inscription';

export default function InscriptionPage(props) {
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
        <Inscription />
      </main>
    </>
  )
}
