import { useState, useEffect } from 'react'
import  Form  from './components/Form.jsx'
import Appointment from './components/Appointment.jsx';


function App() {
  
  //Citas en localStorage
  let initialQuotes = JSON.parse(localStorage.getItem('appointments'));
  if(!initialQuotes){
    initialQuotes = [];
  }

  //Arreglo de Citas (plural)
  const [appointments, setAppointments] = useState(initialQuotes);
  
  //Hook para realizar operaciones de actualizaciones de state de citas 
  useEffect(() =>{
    if(initialQuotes){
      localStorage.setItem('appointments',JSON.stringify(appointments));
    }else{
      localStorage.setItem('appointments',JSON.stringify([]));
    }
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
