import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/themeSlice';

const DarkModeToggle = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={darkMode}
        onChange={handleToggle}
      />
      <div
        className={`w-24 h-12 rounded-full ring-0 peer duration-500 outline-none ${
          darkMode ? 'bg-[#383838]' : 'bg-gray-200'
        } overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 ${
          darkMode ? 'peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full' : ''
        } shadow-lg ${
          darkMode ? 'shadow-gray-700' : 'shadow-gray-400'
        } after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-10 after:opacity-0 after:transition-all after:duration-700 ${
          darkMode ? 'peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0' : ''
        }`}
      ></div>
    </label>
  );
};

export default DarkModeToggle;