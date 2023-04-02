import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./Header.module.css";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>TO DO LIST</h1>
        <button className={styles.button} onClick={toggleDarkMode}>
          {darkMode ? <RiMoonFill /> : <RiSunFill />}
        </button>
      </div>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
