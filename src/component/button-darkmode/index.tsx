import { useState, useEffect } from "react";

function DarkModeToggle() {
  // Estado para controlar se o modo escuro está ativo ou não
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Quando o estado mudar, atualize a classe "dark" no <html>
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex bg-white dark:bg-gray-900">
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded-lg dark:bg-yellow-500"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Modo Claro" : "Modo Escuro"}
      </button>
    </div>
  );
}

export default DarkModeToggle;
