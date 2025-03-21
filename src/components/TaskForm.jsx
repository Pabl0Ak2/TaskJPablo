import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { motion, AnimatePresence } from 'framer-motion';

const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [subtask, setSubtask] = useState('');
  const [subtasks, setSubtasks] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showTaskError, setShowTaskError] = useState(false);
  const [showSubtaskError, setShowSubtaskError] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleAddSubtask = () => {
    if (subtask.trim()) {
      setSubtasks([...subtasks, subtask]);
      setSubtask('');
      setShowSubtaskError(false);
    } else {
      setShowSubtaskError(true);
    }
  };

  const handleRemoveSubtask = (index) => {
    const newSubtasks = subtasks.filter((_, i) => i !== index);
    setSubtasks(newSubtasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      const newTask = {
        title: taskTitle,
        subtasks: subtasks,
      };
      dispatch(addTask(newTask));
      setTaskTitle('');
      setSubtasks([]);
      setShowSuccessMessage(true);
      setShowTaskError(false);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);
    } else {
      setShowTaskError(true);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="mb-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <label className={`block text-sm font-medium mb-2 ${
          darkMode ? 'text-white' : 'text-gray-700'
        }`}>
          Ingresa una tarea:
        </label>
        <motion.input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Título de la tarea..."
          className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
            darkMode
              ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500'
              : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500'
          }`}
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        />
      </div>

      <AnimatePresence>
        {showTaskError && (
          <motion.div
            className={`p-2 mb-4 rounded-lg ${
              darkMode ? 'bg-red-700 text-white' : 'bg-red-500 text-white'
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            El título de la tarea no puede estar vacío.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mb-4">
        <label className={`block text-sm font-medium mb-2 ${
          darkMode ? 'text-white' : 'text-gray-700'
        }`}>
          Ingresa una actividad:
        </label>
        <div className="flex gap-2">
          <motion.input
            type="text"
            value={subtask}
            onChange={(e) => setSubtask(e.target.value)}
            placeholder="Agregar actividad..."
            className={`flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 ${
              darkMode
                ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500'
                : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500'
            }`}
            whileFocus={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          />
          <motion.button
            type="button"
            onClick={handleAddSubtask}
            className={`px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
              darkMode
                ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
                : 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Agregar actividad
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {showSubtaskError && (
          <motion.div
            className={`p-2 mb-4 rounded-lg ${
              darkMode ? 'bg-red-700 text-white' : 'bg-red-500 text-white'
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            La subtarea no puede estar vacía.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mb-4">
        {subtasks.map((subtask, index) => (
          <motion.div
            key={index}
            className={`flex justify-between items-center p-2 mb-2 rounded-lg ${
              darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <span>° {subtask}</span>
            <button
              type="button"
              onClick={() => handleRemoveSubtask(index)}
              className={`px-2 py-1 rounded-lg focus:outline-none ${
                darkMode
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-red-500 text-white hover:bg-red-600'
              }`}
            >
              Eliminar
            </button>
          </motion.div>
        ))}
      </div>

      <motion.button
        type="submit"
        className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
          darkMode
            ? 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500'
            : 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500'
        }`}
        whileHover={{ scale: 1.01 }}
        whileFocus={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        Guardar Tarea
      </motion.button>

      <AnimatePresence>
        {showSuccessMessage && (
          <motion.div
            className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
              darkMode ? 'bg-green-700 text-white' : 'bg-green-500 text-white'
            }`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            Tarea agregada con éxito ✅
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
};

export default TaskForm;