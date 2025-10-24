import { useState, useEffect } from 'react'
import  Form  from './components/Form.jsx'
import Appointment from './components/Appointment.jsx';
import Alert from './components/Alert.jsx';

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

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-blue-600">
      <div className="container mx-auto px-4 py-10">
        <h1 className="font-black text-white text-4xl md:text-5xl text-center">
          Administrador de Pacientes&nbsp;
          <span className="text-yellow-300">Veterinaria</span>
        </h1>

        <div className="mt-12 md:flex md:gap-x-10">
          <div className="md:w-1/2">
          <Form 
            createAppointment = {createAppointment}
          />
        </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
          {appointments.length === 0 ? (
            <Alert type="info" title="¡Información!">
              Comienza agregando pacientes y aparecerán en este lugar.
            </Alert>
          ) : (
            <h2 className="font-black text-white text-3xl text-center mb-5">
              Administra tus Citas
            </h2>
          )}

          { appointments.map(appointment => (
            <Appointment
              key={appointment.id}
              appointment={appointment}
              destroyAppointment={destroyAppointment}
            />
          )) }
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
