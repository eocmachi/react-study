import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import styles from "./styles/App.module.css";

export default function App() {
  const [list, setList] = useState(() => getTodoList());
  const [state, setState] = useState([
    {
      id: 1,
      title: "All",
      show: true,
    },
    {
      id: 2,
      title: "Active",
      show: false,
    },
    {
      id: 3,
      title: "Completed",
      show: false,
    },
  ]);
  const [darkMode, setDarkMode] = useState(() => getTheme());

  function getTodoList() {
    const todoList = JSON.parse(localStorage.getItem("list"));
    if (todoList) {
      return todoList;
    } else {
      return [];
    }
  }

  function getTheme() {
    const theme = JSON.parse(localStorage.getItem("dark"));
    if (theme) {
      return theme;
    } else {
      return false;
    }
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [list, darkMode]);

  return (
    <section className={`${darkMode ? styles.dark : ""} ${styles.container}`}>
      <Header
        state={state}
        setState={setState}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <List state={state} list={list} darkMode={darkMode} setList={setList} />
      <Footer setList={setList} darkMode={darkMode} />
    </section>
  );
}
