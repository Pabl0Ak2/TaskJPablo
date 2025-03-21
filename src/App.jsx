import React from 'react';
import { useSelector } from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import DarkModeToggle from './components/DarkModeToggle';
import './index.css';
import './App.css';
import { motion } from 'framer-motion';
import { FaBook, FaPencilAlt } from 'react-icons/fa';

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={`min-h-screen w-full ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="container mx-auto p-4">
        <header className="flex justify-between items-center mb-5">
          <motion.h1
            className="text-3xl font-bold flex items-center gap-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 10,
              delay: 0.2,
            }}
          >
            <FaBook className="text-blue-500" />
            <FaPencilAlt className="text-blue-500" />
            Gestor de Tareas
          </motion.h1>
          <DarkModeToggle />
        </header>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;