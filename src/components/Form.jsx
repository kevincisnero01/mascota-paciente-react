import React,{ useState } from 'react';

const Form = () =>{

//Crear el State de Citas  
const [appointment, setAppointment] = useState({
  mascot : '',
  owner : '',
  date: '',
  time : '', 
  symptoms : ''
});

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

return (
  <>
  <h1>Crear Cita</h1>
  <form>
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
    
    <div className='depurar'><pre>
      { JSON.stringify(appointment,null,2)}
    </pre></div>
  
  </form>
  </>
  );
}

export default Form;