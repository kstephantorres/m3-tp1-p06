import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Tarjeta = ({colorBg,borrarTarjeta }) => {
    const estiloColor = {
        backgroundColor: colorBg,
    }

  return (
    <Card className='cardContenedor '>
        <Card.Header><b>{colorBg}</b></Card.Header>
        <span className='d-flex justify-content-center bg-primary-subtle'>
            <Card.Img style={estiloColor} className='tarjetaImg m-2'/>
        </span>
        <Card.Body className='text-end'>
            <Button variant='danger' onClick={()=>{borrarTarjeta(colorBg)}} className='shadow rounded'>Borrar</Button>
        </Card.Body>
    </Card>
  );
};

export default Tarjeta;