import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ListTareas from "./ListTareas";

const FormularioTareas = () => {
  const [tarea, setTarea] = useState("");
  const [arregloTarea, setArregloTarea] = useState([]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setArregloTarea([...arregloTarea, tarea]);
    setTarea('')

    
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ingrese una Tarea"
            onChange={(e) => setTarea(e.target.value)}
            value = {tarea}
          />
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
