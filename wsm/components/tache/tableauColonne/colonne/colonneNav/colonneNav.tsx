import { Row, Col } from 'react-bootstrap';

import ColonneEtat from './colonneEtat';
import ColonneMultipleAction from './colonneMultipleAction';
import NavNouvelleTache from './navNouvellTache';

export default function ColonneNav({ handledeleteColonne, colonne, setShow }) {
  return (
    <Row style={{ marginTop: "10px" }}>
      <Col xs={7}>
        <ColonneEtat colonne={colonne} />
      </Col>
      <Col xs={2} style={{paddingLeft:"45px"}} >
      <ColonneMultipleAction col_titre={colonne.col_titre} handledeleteColonne={handledeleteColonne} />
      </Col>
      <Col xs={3}>
      <NavNouvelleTache setShow={setShow} />
      </Col>
    </Row>
  )
}
