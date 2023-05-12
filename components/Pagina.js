import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'
import { Container } from 'react-bootstrap';
import App from './App';

const Pagina = (props) => {

    return (
        <>
            <Cabecalho />
            <div className='bg-secondary text-white py-3 text-center mb-3'>
                <h1>{props.titulo}</h1>
            </div>

            <Container className='mb-5'>
                {props.children}
            </Container>

            <Rodape />
            
            <App />

        </>
    )
}

export default Pagina