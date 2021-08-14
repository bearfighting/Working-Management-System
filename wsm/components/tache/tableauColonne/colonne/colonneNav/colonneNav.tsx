import { Row } from 'react-bootstrap';

import ColonneEtat from './colonneEtat';
import ColonneMultipleAction from './colonneMultipleAction';
import NavNouvelleTache from './navNouvellTache';

export default function ColonneNav({ colonne, setShow }) {
  return (
    <Row>
      <ColonneEtat colonne={colonne} />
      <ColonneMultipleAction />
      <NavNouvelleTache setShow={setShow} />
    </Row>
  )
}
