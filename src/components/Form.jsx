import React,{ useState } from 'react';

const Form = () =>{

//Crear el State de Citas  
const [appointment, setAppointment] = useState({
  owner : '',
  date: '',
  time : '',
  mascot : '',
  symptoms : ''
});

//Funcion que se ejecuta cada vez que el usuario escribe en el input
const handleState = (event) => {
  const {name, value } = event.target;
  
  setAppointment({
  ...appointment,
  [name] : value
  })
};

return (
  <>
  <h1>Crear Cita</h1>
  <form>
    
    <label>Dueño de Mascota</label>
    <input
      type="text"
      name="owner"
      className="u-full-width"
      placeholder="Nombre del Dueño"
      value={appointment.owner}
      onChange={handleState}
    />
    
    <label>Fecha</label>
    <input
      type="date"
      name="date"
      className="u-full-width"
      value={appointment.date}
      onChange={handleState}
    />
    
    
    <label>Hora</label>
    <input
      type="time"
      name="time"
      className="u-full-width"
      value={appointment.time}
      onChange={handleState}
    />
    
    <label>Nombre de Mascota</label>
    <input
      type="text"
      name="mascot"
      className="u-full-width"
      placeholder="Nombre de la Mascota"
      value={appointment.mascot}
      onChange={handleState}
    />
    
    <label>Sintomas</label>
    <textarea
      className="u-full-width"
      name="symptoms"
      placeholder="Ej: Fiebre, Inflacion, Sangrado, Alergia, etc"
      value={appointment.symptoms}
      onChange={handleState}
    ></textarea>
    
    <button
      type="submit"
      name="u-full-width button-primary"
    >
      Agregar Cita
    </button>
    
    <pre>
      { JSON.stringify(appointment,null,2)}
    </pre>
  
  </form>
  </>
  );
}

export default Form;