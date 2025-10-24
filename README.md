# Administrador de Citas de Pacientes con React

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

Una aplicación web simple construida con React para administrar citas de pacientes (mascotas). Permite a los usuarios agregar, ver y eliminar citas de forma intuitiva. Los datos se guardan localmente en el navegador utilizando `localStorage` para asegurar la persistencia entre sesiones.

Este proyecto fue desarrollado como una práctica fundamental para aprender y aplicar los conceptos clave de React.


---

## ✨ Características

**Características Principales:**

- **Creación de Citas:** Un formulario permite ingresar los detalles de la cita: nombre de la mascota, dueño, fecha, hora y síntomas.
- **Validación de Formulario:** El sistema valida que todos los campos estén completos antes de permitir la creación de una nueva cita.
- **Listado Dinámico de Citas:** Las citas creadas se muestran inmediatamente en una lista en la pantalla.
- **Eliminación de Citas:** Cada cita en la lista tiene un botón para ser eliminada, actualizando la vista al instante.
- **Persistencia de Datos:** Las citas se guardan en el `localStorage` del navegador, evitando que se pierdan al recargar la página o cerrar el navegador.
- **UI Reactiva:** La interfaz se actualiza automáticamente en respuesta a las acciones del usuario (crear, eliminar) sin necesidad de recargar la página.


## 🛠️ Tecnologías Utilizadas

-   **React**: Biblioteca principal para la construcción de la interfaz de usuario.
    -   **Hooks**: `useState` para el manejo de estado local y `useEffect` para efectos secundarios (como la sincronización con `localStorage`).
-   **Vite**: Herramienta de frontend para un entorno de desarrollo rápido y un empaquetado optimizado.
-   **UUID**: Para la generación de identificadores únicos para cada cita.
-   **CSS**: Estilos personalizados para la interfaz (compatible con frameworks como Skeleton CSS).
-   **LocalStorage**: Para el almacenamiento de datos en el lado del cliente.

---

## ⚙️ Instalación y Puesta en Marcha

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1.  **Clona el repositorio**
    ```bash
    git clone https://github.com/tu-usuario/mascota-paciente-react.git
    ```

2.  **Navega al directorio del proyecto**
    ```bash
    cd mascota-paciente-react
    ```

3.  **Instala las dependencias**
    ```bash
    npm install
    ```

4.  **Ejecuta la aplicación en modo de desarrollo**
    ```bash
    npm run dev
    ```

5.  Abre tu navegador y visita `http://localhost:5173` (o el puerto que indique la consola).

---

## 📂 Estructura del Proyecto

El proyecto está organizado en componentes reutilizables para una mejor mantenibilidad:
```bash
src/
├── components/
│   ├── Appointment.jsx    # Muestra una cita individual con botón de eliminar
│   └── Form.jsx          # Formulario para crear nuevas citas
├── App.jsx               # Componente principal (orquesta estado y lógica)
└── main.jsx              # Punto de entrada de la aplicación
```