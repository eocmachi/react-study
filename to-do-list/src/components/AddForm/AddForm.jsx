import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddForm.module.css";
import { FaPlus } from "react-icons/fa";

export default function AddForm({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
  };
  return (
    <div className={styles.AddForm}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add todo"
          value={text}
          onChange={handleChange}
        />
        <button className={styles.addBtn}>
          <FaPlus />
        </button>
      </form>
    </div>
  );
}
