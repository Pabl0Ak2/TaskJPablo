import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskStatus, deleteTask } from '../redux/tasksSlice';
import { motion } from 'framer-motion';
import { FaListUl, FaTrash, FaCheck, FaSyncAlt } from 'react-icons/fa';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleStatusChange = (e) => {
    dispatch(updateTaskStatus({ id: task.id, status: e.target.value }));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <motion.div
      className={`p-6 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-300 ${
        task.status === 'completada'
          ? 'bg-green-300 border-l-4 border-green-500'
          : task.status === 'pendiente'
          ? 'bg-red-400 border-l-4 border-red-500'
          : task.status === 'en progreso'
          ? 'bg-blue-300 border-l-4 border-blue-500'
          : darkMode
          ? 'bg-gray-800 text-white border-l-4 border-gray-600'
          : 'bg-white text-gray-900 border-l-4 border-gray-300'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Título de la tarea */}
      <motion.div
        className="flex-1"
        animate={{
          textDecoration: task.status === 'completada' ? 'line-through' : 'none',
          color:
            task.status === 'completada'
              ? 'gray'
              : task.status === 'pendiente'
              ? darkMode
                ? 'white'
                : 'black'
              : task.status === 'en progreso'
              ? darkMode
                ? 'white'
                : 'black'
              : darkMode
              ? 'white'
              : 'black',
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-semibold">{task.title}</h3>
        {task.subtasks && task.subtasks.length > 0 && (
          <div className="mt-2">
            <ul className="flex flex-wrap gap-2">
              {task.subtasks.map((subtask, index) => (
                <motion.li
                  key={index}
                  className={`text-sm px-3 py-1 rounded-full flex items-center gap-2 ${
                    darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  <FaListUl className={`${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                  {subtask}
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>

      {/* Controles de estado y eliminación */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <select
            value={task.status}
            onChange={handleStatusChange}
            className={`appearance-none p-2 pr-8 rounded-lg focus:outline-none focus:ring-2 ${
              darkMode
                ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500'
                : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500'
            }`}
          >
            <option value="pendiente">Pendiente</option>
            <option value="en progreso">En progreso</option>
            <option value="completada">Completada</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            {task.status === 'completada' ? (
              <FaCheck className={`${darkMode ? 'text-green-400' : 'text-green-500'}`} />
            ) : task.status === 'en progreso' ? (
              <FaSyncAlt className={`${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
            ) : (
              <FaSyncAlt className={`${darkMode ? 'text-red-400' : 'text-red-500'}`} />
            )}
          </div>
        </motion.div>

        <motion.button
          onClick={handleDelete}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 focus:outline-none focus:ring-2 ${
            darkMode
              ? 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
              : 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <FaTrash />
          Eliminar
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TaskItem;