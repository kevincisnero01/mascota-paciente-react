import React from "react";

const Appointment = ({appointment,destroyAppointment}) => (
    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg p-5 mb-5">
        <p className="font-bold text-lg text-yellow-300">Mascota: <span className="font-normal text-white">{appointment.mascot}</span></p>
        <p className="font-bold text-lg text-yellow-300">Dueño: <span className="font-normal text-white">{appointment.owner}</span></p>
        <p className="font-bold text-lg text-yellow-300">Fecha: <span className="font-normal text-white">{appointment.date}</span></p>
        <p className="font-bold text-lg text-yellow-300">Hora: <span className="font-normal text-white">{appointment.time}</span></p>
        <p className="font-bold text-lg text-yellow-300">Síntomas: <span className="font-normal text-white">{appointment.symptoms}</span></p>

        <button
          type="button"
          className="w-full mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 transition-colors"
          onClick={() => destroyAppointment(appointment.id)}
        >
          Eliminar &times;
        </button>
    </div>
)


export default Appointment;