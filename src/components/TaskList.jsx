import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { motion, AnimatePresence } from 'framer-motion';
import { FaList } from 'react-icons/fa';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div className="div-tareas space-y-4 h-[300px] overflow-y-auto p-4">
      <motion.h2
        className="text-2xl font-bold mb-4 flex items-center gap-2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 10,
          delay: 0.2,
        }}
      >
        <FaList className="text-blue-500" />
        Mis Tareas
      </motion.h2>

      <AnimatePresence>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <TaskItem task={task} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;