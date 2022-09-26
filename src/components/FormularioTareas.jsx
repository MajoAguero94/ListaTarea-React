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

  const borrarTarea = (nombre)=>{
    let arregloModificado = arregloTarea.filter((item)=> item !== nombre)
    //actualizar state 
    setArregloTarea(arregloModificado);
  }


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
      <ListTareas arregloTarea = {arregloTarea} borrarTarea = {borrarTarea}></ListTareas>
    </div>
  );
};

export default FormularioTareas;
