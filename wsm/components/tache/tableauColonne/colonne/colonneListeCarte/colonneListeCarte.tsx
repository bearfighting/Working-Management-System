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
      await fetch("/api/tache/carte/ajout", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ carte })
      }).then(res => {
        setlisteCarte([...listeCarte, carte]);
      }).catch(err => console.log(`échec à ajouter la colonne ${err}`));
    }
    if (nouvelleCarte.crt_titre !== "" && nouvelleCarte.crt_description !== "") {
      ajouterCarte(nouvelleCarte);
    }
  }, [nouvelleCarte]);

  const handledeleteCarte = (crt_titre) => {
    const deleteCarte = async (crt_titre) => {
      await fetch("/api/tache/carte/suppression", {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ crt_titre })
      }).then(res => {
        let nouvelleListeCarte = listeCarte.filter(carte => carte.crt_titre !== crt_titre);
        setlisteCarte(nouvelleListeCarte);
      }).catch(err => console.log(`échec à ajouter la colonne ${err}`));
      // let nouvelleListeCarte = listeCarte.filter(carte => carte.crt_titre !== crt_titre);
      // setlisteCarte(nouvelleListeCarte);
    }

    deleteCarte(crt_titre);
  }
  return (
    <Row style={{ margin: "5px 0px" }}>
      <Col>
        {listeCarte.map((carte) => <Carte handledeleteCarte={handledeleteCarte} crt_titre={carte.crt_titre} />)}
      </Col>
    </Row>
  )
}
