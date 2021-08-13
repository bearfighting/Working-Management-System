import { Col, Button } from 'react-bootstrap';

export default function NavNouvelleTache({ setShow }) {
  const handleOnClick = () => {
    setShow(true);
  }

  return (
    <>
      <Col style={{ padding: "1px" }}>
        <Button size="sm" style={{ lineHeight: "0.8" }} onClick={handleOnClick}>+</Button>
      </Col>
    </>
  )
}
