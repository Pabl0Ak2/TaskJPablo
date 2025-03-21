
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

# Gestor de Tareas con React y Redux

Este proyecto es una aplicación de gestión de tareas desarrollada con **React**, **Redux**, **Framer Motion** y **Tailwind CSS**. Permite a los usuarios crear, actualizar y eliminar tareas, así como cambiar entre modos oscuro y claro. La aplicación está diseñada para ser interactiva, visualmente atractiva y fácil de usar.

## Características Principales

- **Creación de tareas**: Agrega tareas con un título y subtareas opcionales.
- **Gestión de tareas**: Actualiza el estado de las tareas (pendiente, en progreso, completada) o elimínalas.
- **Modo oscuro/claro**: Alterna entre temas oscuro y claro con un interruptor animado.
- **Animaciones**: Efectos fluidos con **Framer Motion** para mejorar la experiencia del usuario.
- **Diseño responsive**: Interfaz adaptativa diseñada con **Tailwind CSS**.

## Estructura del Proyecto

El proyecto está organizado en los siguientes componentes y archivos principales:

### Componentes

1. **TaskForm.js**: Formulario para crear tareas con validaciones y mensajes de error/éxito.
2. **TaskItem.js**: Muestra una tarea individual con opciones para cambiar su estado o eliminarla.
3. **TaskList.js**: Lista todas las tareas con animaciones de entrada y salida.
4. **DarkModeToggle.js**: Interruptor animado para cambiar entre modo oscuro y claro.
5. **App.jsx**: Componente principal que integra todos los componentes y aplica estilos dinámicos.

### Redux

1. **store.js**: Configura la store de Redux con los reducers de tareas y temas.
2. **tasksSlice.js**: Define el slice de Redux para gestionar las tareas (agregar, actualizar, eliminar).
3. **themeSlice.js**: Define el slice de Redux para gestionar el tema (modo oscuro/claro).
