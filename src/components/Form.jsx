import React,{ useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({createAppointment}) =>{

//Crear el state de citas  
const [appointment, setAppointment] = useState({
  mascot : '',
  owner : '',
  date: '',
  time : '', 
  symptoms : ''
});

//Crear el state de error
const [error, setError] = useState(false);


//Funcion que se ejecuta cada vez que el usuario escribe en el input
const handleChangeState = e => {
  const {name, value } = e.target;
  
  setAppointment({
  ...appointment,
  [name] : value
  })
};

//Extraer valores para evitar escribir ej: appointment.owner
const {mascot, owner, date, time, symptoms} = appointment;


//Funcion para enviar el formulario
const submitAppointment = e => {
  e.preventDefault();

  //Validaciones
  if(mascot.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === ''){
    setError(true);
    return;
  }

  //Ocultar mensaje
  setError(false);

  //Asignar ID
  appointment.id = uuidv4();

  //Crear Cita
  createAppointment(appointment);

  //Reiniciar el Formulario
  setAppointment({
    mascot : '',
    owner : '',
    date: '',
    time : '', 
    symptoms : ''
  });

}

return (
  <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg p-8">
    <h2 className="text-white font-bold text-3xl text-center mb-6">Crear Cita</h2>
    
    { error && <p className="bg-red-500 text-white text-center p-3 uppercase font-bold mb-4 rounded-md">Todos los campos son obligatorios</p> }

    <form
      onSubmit={submitAppointment}
      className="space-y-5"
    >
      <div>
        <label htmlFor="mascot" className="block text-white font-bold mb-2">Nombre de Mascota</label>
        <input
          id="mascot"
          type="text"
          name="mascot"
          className="w-full p-3 bg-white bg-opacity-80 rounded-lg border-2 border-transparent focus:border-yellow-300 focus:outline-none transition-colors"
          placeholder="Ejemplo: Blanquito"
          value={appointment.mascot}
          onChange={handleChangeState}
        />
      </div>

      <div>
        <label htmlFor="owner" className="block text-white font-bold mb-2">Dueño de Mascota</label>
        <input
          id="owner"
          type="text"
          name="owner"
          className="w-full p-3 bg-white bg-opacity-80 rounded-lg border-2 border-transparent focus:border-yellow-300 focus:outline-none transition-colors"
          placeholder="Ej: Laura"
          value={owner}
          onChange={handleChangeState}
        />
      </div>
      
      <div>
        <label htmlFor="date" className="block text-white font-bold mb-2">Fecha</label>
        <input
          id="date"
          type="date"
          name="date"
          className="w-full p-3 bg-white bg-opacity-80 rounded-lg border-2 border-transparent focus:border-yellow-300 focus:outline-none transition-colors"
          value={date}
          onChange={handleChangeState}
        />
      </div>
      
      <div>
        <label htmlFor="time" className="block text-white font-bold mb-2">Hora</label>
        <input
          id="time"
          type="time"
          name="time"
          className="w-full p-3 bg-white bg-opacity-80 rounded-lg border-2 border-transparent focus:border-yellow-300 focus:outline-none transition-colors"
          value={time}
          onChange={handleChangeState}
        />
      </div>
      
      <div>
        <label htmlFor="symptoms" className="block text-white font-bold mb-2">Síntomas</label>
        <textarea
          id="symptoms"
          className="w-full p-3 bg-white bg-opacity-80 rounded-lg border-2 border-transparent focus:border-yellow-300 focus:outline-none transition-colors"
          name="symptoms"
          placeholder="Ej: Fiebre, Inflamación, Sin fuerzas, etc."
          value={appointment.symptoms}
          onChange={handleChangeState}
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="w-full bg-yellow-400 text-indigo-900 font-bold py-3 px-4 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 transition-all transform hover:scale-105"
      >
        Agregar Cita
      </button>
    </form>
  </div>
  );
}

export default Form;