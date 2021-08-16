import { Col, Dropdown } from 'react-bootstrap';

export default function CarteMultipleAction({ handledeleteCarte, crt_titre }) {
  const handleClickSupprimer = () => {
    handledeleteCarte(crt_titre);
  }

  const handleClickDétail = () => {

  }

  return (
    <Col xs={3} style={{ margin: "10%", padding: "1px" }}>
      <Dropdown style={{ height: "50%" }}>
        <Dropdown.Toggle size="sm" style={{ lineHeight: "0.8", width: "0.7" }} variant="success" id="dropdown-basic">
          ...
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={handleClickSupprimer}>Supprimer</Dropdown.Item>
          <Dropdown.Item href="#/action-1" onClick={handleClickDétail}>Détail</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Déplacer à droite</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Déplacer à gauche</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
  )
}
