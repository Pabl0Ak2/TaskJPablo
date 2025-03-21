
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Installation

To install the necessary dependencies, follow these steps:

1. Clone the repository or download the source code.
2. Navigate to the project directory:

   ```bash
   cd project-name

## Instalación y ejecución

Para instalar y ejecutar el proyecto haz los siguientes pasos:

1. Para instalar dependencias
2. Ejecutar el proyecto localmente:

   ```bash
   npm instal
   npm run dev

## Explicación de proyecto

1. TaskForm.js
Formulario para crear tareas con un título y subtareas opcionales. Valida que el título no esté vacío y muestra mensajes de error si el usuario intenta guardar una tarea sin título o agregar una subtarea vacía. Cuando el formulario se envía correctamente, la tarea se guarda en Redux usando la acción addTask, y se muestra un mensaje de éxito temporal. El componente utiliza Framer Motion para animar la aparición de mensajes de error y éxito, y efectos de hover en los botones. Los estilos cambian dinámicamente según el modo oscuro/claro (darkMode).

2. TaskItem.js
Muestra una tarea individual con su título, subtareas y estado (pendiente, en progreso, completada). Permite cambiar el estado de la tarea mediante un menú desplegable (<select>), que despacha la acción updateTaskStatus de Redux. También incluye un botón para eliminar la tarea, que despacha la acción deleteTask. El componente utiliza Framer Motion para animar la aparición y desaparición de las tareas, y efectos de hover en los botones. Los estilos cambian según el estado de la tarea (fondo verde para completadas, rojo para pendientes, azul para en progreso) y el modo oscuro/claro.

3. TaskList.js
Lista todas las tareas almacenadas en Redux. Utiliza el componente TaskItem para renderizar cada tarea y anima su aparición y desaparición con Framer Motion. Incluye un título animado ("Mis Tareas") que se desplaza desde la izquierda al cargarse. El contenedor de la lista tiene un estilo que permite el desplazamiento vertical (overflow-y-auto) para manejar muchas tareas. El ícono FaList acompaña al título para darle un toque visual.

4. DarkModeToggle.js
Interruptor para alternar entre modo oscuro y claro. Utiliza el estado global de Redux (darkMode) y despacha la acción toggleDarkMode para cambiar el tema. El interruptor está diseñado como un checkbox estilizado con CSS, que muestra un ícono de sol (☀️) para el modo claro y un ícono de luna (🌑) para el modo oscuro. Los íconos se animan al cambiar entre modos, y los estilos del interruptor cambian dinámicamente según el tema seleccionado.

5. store.js
Configura la store de Redux usando Redux Toolkit. Combina dos reducers: tasksReducer (para gestionar las tareas) y themeReducer (para gestionar el tema). La store centraliza el estado global de la aplicación y se integra con Redux DevTools para facilitar la depuración.

6. tasksSlice.js
Define un slice de Redux para gestionar las tareas. El estado inicial incluye un array de tareas predefinidas, cada una con un id, title, status y subtasks. Los reducers definidos son:

- addTask: Añade una nueva tarea con un id único, título y subtareas (opcional).
- updateTaskStatus: Actualiza el estado de una tarea existente.
- deleteTask: Elimina una tarea del estado.
- Se exportan las acciones y el reducer para su uso en la aplicación.

7. themeSlice.js
Define un slice de Redux para gestionar el tema. El estado inicial es darkMode: false (modo claro). El reducer toggleDarkMode alterna entre modo oscuro y claro. Se exporta la acción y el reducer para su uso en la aplicación.

8. App.jsx
Componente principal que estructura la aplicación. Utiliza el estado global de Redux (darkMode) para aplicar estilos dinámicos (fondo oscuro/claro, texto blanco/negro). Incluye:

- Un header con un título animado ("Gestor de Tareas") y el componente DarkModeToggle.
- TaskForm: Para agregar nuevas tareas.
- TaskList: Para listar y gestionar las tareas existentes.
- Usa Framer Motion para animar el título del header y Tailwind CSS para los estilos.



