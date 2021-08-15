import { Row, Col } from 'react-bootstrap';
import TacheModal from '../../tacheModal';
import Carte from './carte';

import { useEffect, useState } from 'react';

export default function ColonneListeCarte({ nouvelleCarte, col_id }) {
  const [listeCarte, setlisteCarte] = useState([]);

  useEffect(() => {
    const fetchColonnes = async () => {
      const { resultat } = await fetch("/api/tache/carte/" + col_id).then(resp => resp.json());
      setlisteCarte(resultat);
    }
    fetchColonnes();
  }, [col_id]);

  useEffect(() => {
    const ajouterCarte = async (carte) => {
      console.log("nouvelle Carte12", carte);
      await fetch("/api/tache/carte/ajout", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ carte })
      }).then(res => {
        console.log("réussi à ajouter la colonne");
        setlisteCarte([...listeCarte, carte]);
      }).catch(err => console.log(`échec à ajouter la colonne ${err}`));
      // setlisteCarte([...listeCarte, carte]);
    }
    if (nouvelleCarte.crt_titre !== "" && nouvelleCarte.crt_description !== "") {
      console.log("nouvelle Carte1", nouvelleCarte);
      ajouterCarte(nouvelleCarte);
    }
  }, [nouvelleCarte]);

  // const handleAjouterCarte = ({ crt_titre, crt_description }) => {
  //   let carte = {
  //     gtt_id: colonne.gtt_id,
  //     col_id: colonne.col_id,
  //   }

  //   fetch("/api/tache/carte/ajout", {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(carte)
  //   }).then(res => {
  //     console.log("réussi à ajouter la colonne");
  //     setColonneActuelle([...colonneActuelle, carte]);
  //   })
  //     .catch(err => alert("échec à ajouter la colonne"));
  // }

  return (
    <Row style={{ margin: "5px 0px" }}>
      <Col>
        {listeCarte.map((carte) => <Carte nom={carte.crt_titre} />)}
      </Col>
    </Row>
  )
}
