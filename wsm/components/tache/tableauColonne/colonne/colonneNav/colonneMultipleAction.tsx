import { Col, Dropdown } from 'react-bootstrap';

export default function ColonneMultipleAction() {
  return (
    <Col xs={3} style={{ padding: "1px" }}>
      <Dropdown style={{ height: "50%" }}>
        <Dropdown.Toggle size="sm" style={{ lineHeight: "0.8", width: "0.7" }} variant="success" id="dropdown-basic">
          ...
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Supprimer</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Déplacer à droite</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Déplacer à gauche</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
  )
}
