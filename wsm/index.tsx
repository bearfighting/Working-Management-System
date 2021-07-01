import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './components/navi';
import Accueil from './components/accueil';

export default function App() {
  return (
    <>
      <header>
        <Navi />
      </header>
      <main style={{ height: "90%" }}>
        <Accueil />
      </main>
    </>
  )
}
