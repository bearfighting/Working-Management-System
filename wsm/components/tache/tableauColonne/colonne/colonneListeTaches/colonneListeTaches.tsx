import { Row, Col } from 'react-bootstrap';
import TacheModal from '../../tacheModal';
import Carte from './carte';

import { useEffect, useState } from 'react';

export default function ColonneListeTaches({ id }) {
  const [listeCarte, setlisteCarte] = useState([]);

  useEffect(() => {
    const fetchColonnes = async () => {
      const { resultat } = await fetch("/api/tache/carte/col-id/" + id).then(resp => resp.json());
      setlisteCarte(resultat);
    }
    fetchColonnes();
  }, []);
  const ListeTache = [{ nom: "haha" }, { nom: "une tache" }];

  return (
    <Row style={{ margin: "5px 0px" }}>
      <Col>
        {listeCarte.map((carte) => <Carte nom={carte.crt_titre} />)}
      </Col>
    </Row>
  )
}
