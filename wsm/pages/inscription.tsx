import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from '../components/navi';
import Inscription from '../components/inscription';

export default function LoginPage() {
  return (
    <>
      <header>
        <Navi />
      </header>
      <main style={{ height: "90%" }}>
        <Inscription />
      </main>
    </>
  )
}
