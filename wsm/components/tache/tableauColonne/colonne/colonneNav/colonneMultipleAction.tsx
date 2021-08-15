import { Col, Dropdown } from 'react-bootstrap';

export default function ColonneMultipleAction({ handledeleteColonne, col_titre }) {

  console.log("col_titre", col_titre);
  const handleClick = () => {
    console.log("col_titre", col_titre);
    handledeleteColonne(col_titre);
  }

  return (
    <Col xs={3} style={{ padding: "1px" }}>
      <Dropdown style={{ height: "50%" }}>
        <Dropdown.Toggle size="sm" style={{ lineHeight: "0.8", width: "0.7" }} variant="success" id="dropdown-basic">
          ...
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={handleClick}>Supprimer</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Déplacer à droite</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Déplacer à gauche</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
  )
}
