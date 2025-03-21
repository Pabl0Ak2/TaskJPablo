import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
      {
        id: 1,
        title: 'Terminar tarea',
        status: 'pendiente',
        subtasks: ['Hacer tarea de ciencias', 'Hacer tarea de física', 'Hacer maqueta', 'Hacer maqueta', 'Hacer maqueta'],
      },
      {
        id: 2,
        title: 'Conectar Servicios',
        status: 'completada',
        subtasks: ['Conectar servicio 1', 'Conectar servicio 2'],
      },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        status: 'pendiente',
        subtasks: action.payload.subtasks || [],
      };
      state.tasks.push(newTask);
    },
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.status = status;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTaskStatus, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;