import styles from "./Header.module.css";
import { RiMoonFill } from "react-icons/ri";
import { RiSunFill } from "react-icons/ri";

export default function Header({ setState, state, darkMode, setDarkMode }) {
  const handleState = (id) => {
    setState((state) =>
      state.map((it) =>
        it.id === id ? { ...it, show: true } : { ...it, show: false }
      )
    );
  };
  const toggleDarkMode = () => {
    setDarkMode((mode) => !mode);
  };

  return (
    <div className={`${darkMode ? styles.dark : ""} ${styles.header}`}>
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>TO DO LIST</h1>
          <button className={styles.button} onClick={toggleDarkMode}>
            {darkMode ? <RiSunFill /> : <RiMoonFill />}
          </button>
        </div>
        <ul className={styles.filter}>
          {state.map((it) => (
            <li
              key={it.id}
              className={` ${styles[it.show ? "show" : "hide"]}`}
              onClick={() => {
                handleState(it.id);
              }}
            >
              {it.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
