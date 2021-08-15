import { Row } from 'react-bootstrap';

import ColonneEtat from './colonneEtat';
import ColonneMultipleAction from './colonneMultipleAction';
import NavNouvelleTache from './navNouvellTache';

export default function ColonneNav({ handledeleteColonne, colonne, setShow }) {
  console.log("colonne", colonne);
  return (
    <Row>
      <ColonneEtat colonne={colonne} />
      <ColonneMultipleAction col_titre={colonne.col_titre} handledeleteColonne={handledeleteColonne} />
      <NavNouvelleTache setShow={setShow} />
    </Row>
  )
}
