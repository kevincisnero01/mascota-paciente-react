import { useState } from 'react'
import  Form  from './components/Form.jsx'


function App() {
  
  //Arreglo de Citas (plural)
  const [appointments, setAppointments] = useState([]);
  
  //Funcion que tome las citas actuales y las agregue
  const createAppointment = (appointment) => {
    setAppointments([...appointments,appointment]);
  }


  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
      <div className="row">
        <div className="one-half column">
          <Form 
            createAppointment = {createAppointment}
          />
        </div>
        <div className="one-half column">
          <p>Sin registros.</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
