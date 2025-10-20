import { useState } from 'react'
import  Form  from './components/Form.jsx'
function App() {

  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
      <div className="row">
        <div className="one-half column">
          <Form />
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
