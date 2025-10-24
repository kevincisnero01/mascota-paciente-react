import React from 'react';

const Alert = ({ type = 'info', title, children }) => {
    const baseClasses = 'border-l-4 p-4 rounded-md shadow-md mb-4';

    const alertStyles = {
        error: 'bg-red-100 border-red-500 text-red-800',
        success: 'bg-green-100 border-green-500 text-green-800',
        info: 'bg-blue-100 border-blue-500 text-blue-800',
        warning: 'bg-yellow-100 border-yellow-500 text-yellow-800',
    };

    // Si se pasa un tipo no válido, se usa 'info' por defecto.
    const typeClasses = alertStyles[type] || alertStyles.info;

    return (
        <div className={`${baseClasses} ${typeClasses}`} role="alert">
        {title && <p className="font-bold">{title}</p>}
        <div>{children}</div>
        </div>
    );
};

export default Alert;
