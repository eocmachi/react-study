import React, { useState } from "react";
import styles from "./Footer.module.css";
import { FaPlus } from "react-icons/fa";

export default function Footer({ setList, darkMode }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    if (!text) {
      alert("할 일을 입력해주세요!");
      return;
    }
    setList((item) => [...item, { text, checked: false, id: Date.now() }]);
    setText("");
    e.preventDefault();
  };

  return (
    <div className={`${darkMode ? styles.dark : ""} ${styles.footer}`}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={text}
          placeholder="Add Todo"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className={styles.addButton}>
          <FaPlus />
        </button>
      </form>
    </div>
  );
}
