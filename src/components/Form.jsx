import React from 'react';

const Form = () =>{
return (
  <>
  <h1>Crear Cita</h1>
  <form>
    
    <label>Nombre de Mascota</label>
    <input
      type="text"
      name="pet_owner"
      className="u-full-width"
      placeholder="Nombre Dueño de Mascota"
    />
    
    <label>Fecha</label>
    <input
      type="date"
      name="date"
      className="u-full-width"
    />
    
    
    <label>Hora</label>
    <input
      type="date"
      name="time"
      className="u-full-width"
    />
    
    <label>Nombre de Mascota</label>
    <input
      type="text"
      name="mascot"
      className="u-full-width"
      placeholder="Nombre de Mascota"
    />
    
    <label>Sintomas</label>
    <textarea
      className="u-full-width"
      name="symptoms"
    ></textarea>
    
    <button
      type="submit"
      name="u-full-width button-primary"
    >
      Agregar Cita
    </button>
  </form>
  </>
  );
}

export default Form;