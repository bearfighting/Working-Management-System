import { Row, Col } from 'react-bootstrap';
import TacheModal from '../../tacheModal';
import Carte from './carte';

export default function ColonneListeTaches() {
  const ListeTache = [{ nom: "haha" }, { nom: "une tache" }];


  return (
    <Row style={{ margin: "5px 0px" }}>
      <Col>
        {ListeTache.map((tache) => <Carte nom={tache.nom} />)}
      </Col>
    </Row>
  )
}
