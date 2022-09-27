import 'bootstrap/dist/css/bootstrap.min.css'
import  Container  from 'react-bootstrap/Container';
import FormularioTareas from './components/FormularioTareas';



function App() {
  return (
    <Container className='my-5 '>
<h1 className='display-2 text-center'>Lista Tarea</h1>
<hr/>
<FormularioTareas></FormularioTareas>

    </Container>
    
  );
}

export default App;
