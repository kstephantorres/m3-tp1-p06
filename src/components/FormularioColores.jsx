import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GrupoCard from './GrupoCard';
const FormularioColores = () => {
    
    const [color,setColor] = useState('')
    const listaColorDB = JSON.parse(localStorage.getItem('keyColores')) || []
    const [listaColor, setListaColor]= useState(listaColorDB)
    const inputRef = useRef(null)

    useEffect(()=>{
        localStorage.setItem('keyColores',JSON.stringify(listaColor))
    },[listaColor])

    const handleSubmit = (event) =>{
        event.preventDefault()
        !listaColor.includes(color.toLowerCase()) && color !== "" && setListaColor([...listaColor,color.trim()])
        setColor('')
        inputRef.current && inputRef.current.focus()
    }

    const handleColorChange = (event) => {
        setColor(event.target.value);
      };

    const borrarTarjeta=(nombre)=>{
        const coloresFiltrados = listaColor.filter((color)=> color !== nombre)
        setListaColor(coloresFiltrados)
    }

    return (
        <section>
            <Form onSubmit={handleSubmit} className='border rounded mb-4'>
                <h1 className="text-start fs-5 my-3 ms-3">Administrar colores:</h1>
                <Form.Group className="mb-3 d-flex justify-content-around align-items-baseline bg-primary-subtle p-4" id="formGroup" controlId="formBasic">
                    <div id="colorImg" className="align-self-center border border-secondary" style={{ backgroundColor: color }}>
                        
                    </div>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingrese un color. Ej: Blue" 
                        className='ms-3 w-75 mt-4' 
                        value={color}
                        onChange={(event)=>{
                            setColor(event.target.value.toLowerCase())
                            handleColorChange(event)
                            }}
                        ref={inputRef}
                    />
                </Form.Group>
                <div className='text-end pe-3'>
                    <Button variant="primary" type="submit" className="mb-3 shadow rounded">
                        Guardar
                    </Button>
                </div>
            </Form>
            <GrupoCard listaColor={listaColor} borrarTarjeta={borrarTarjeta}></GrupoCard>
        </section>
        
    );
};

export default FormularioColores;