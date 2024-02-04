import { Col, Row, Container } from 'react-bootstrap';
import Tarjeta from './Tarjeta';

const GrupoCard = ({ listaColor, borrarTarjeta }) => {
  return (
    <Container className="">
    <Row xs={1} md={2} lg={4} className="g-4">
      {listaColor.map((color, index) => (
         <Col key={index} className='d-flex justify-content-around'>
            <Tarjeta
            key={index}
            colorBg={color}
            borrarTarjeta={borrarTarjeta}
            />
         </Col>
      ))}
    </Row>
    </Container>
  );
};

export default GrupoCard;