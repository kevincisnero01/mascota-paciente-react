import { useState, useEffect } from 'react'
import  Form  from './components/Form.jsx'
import Appointment from './components/Appointment.jsx';


function App() {
  
  //Datos de Relleno
  const initialData = [
    {id: '1234', mascot : 'Kelly',owner : 'Keny',date: '2025-10-20',time : '09:00',symptoms : 'Fiebre'},
    {id: '12345',mascot : 'Pichi',owner : 'Kevin',date: '2025-10-20',time : '09:00',symptoms : 'Herida'},
    {id: '123456',mascot : 'Mochi',owner : 'Pao',date: '2025-10-20',time : '09:00',symptoms : 'Alergia'}
  ];
  //Arreglo de Citas (plural)
  const [appointments, setAppointments] = useState(initialData);
  
  //Funcion que se ejecuta cuando se actuslizan las citas
  useEffect(() =>{
    console.log('Citas Actualizadas');
  }, [appointments])
  
  //Funcion que tome las citas actuales y las agregue
  const createAppointment = (appointment) => {
    setAppointments([...appointments,appointment]);
  }
  
//Funcion qur elimina una cita por id
const destroyAppointment = id =>{
  const newAppointment = appointments.filter(appointment => appointment.id !==id);
  setAppointments(newAppointment);
}

//Titulo Condicional
const title = appointments.length === 0 ? "No hay Citas" : "Administra tus Citas";

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
          <h2>{title}</h2>
          { appointments.map(appointment => (
            <Appointment
              key={appointment.id}
              appointment={appointment}
              destroyAppointment={destroyAppointment}
            />
          ))}
        </div>
      </div>
      </div>
    </>
  )
}

export default App
