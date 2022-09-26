import React from 'react';
import {Form, Button} from 'react-bootstrap'
import ListTareas from './ListTareas';
const FormularioTareas = () => {
    return (
        <div>
             <Form>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Ingrese una Tarea" />
        <Button variant="primary" type="submit">
        Enviar
      </Button>
      </Form.Group>

      
    </Form>
    <ListTareas></ListTareas>
        </div>
    );
};

export default FormularioTareas;