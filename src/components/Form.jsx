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
  <>
  <h2>Crear Cita</h2>
  { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

  <form
    onSubmit={submitAppointment}
  >
    <label>Nombre de Mascota</label>
    <input
      type="text"
      name="mascot"
      className="u-full-width"
      placeholder="Nombre de la Mascota"
      value={appointment.mascot}
      onChange={handleChangeState}
    />

    <label>Dueño de Mascota</label>
    <input
      type="text"
      name="owner"
      className="u-full-width"
      placeholder="Nombre del Dueño"
      value={owner}
      onChange={handleChangeState}
    />
    
    <label>Fecha</label>
    <input
      type="date"
      name="date"
      className="u-full-width"
      value={date}
      onChange={handleChangeState}
    />
    
    <label>Hora</label>
    <input
      type="time"
      name="time"
      className="u-full-width"
      value={time}
      onChange={handleChangeState}
    />
    
    <label>Sintomas</label>
    <textarea
      className="u-full-width"
      name="symptoms"
      placeholder="Ej: Fiebre, Inflacion, Sangrado, Alergia, etc"
      value={appointment.symptoms}
      onChange={handleChangeState}
    ></textarea>
    
    <button
      type="submit"
      name="u-full-width button-primary"
    >
      Agregar Cita
    </button>
    
    {/* <div className='depurar'><pre>
      { JSON.stringify(appointment,null,2)}
    </pre></div> */}
  
  </form>
  </>
  );
}

export default Form;