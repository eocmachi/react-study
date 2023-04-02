import React from "react";
import styles from "./Todo.module.css";
import { AiOutlineMinusCircle } from "react-icons/ai";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status, id } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor={id}>
        {text}
      </label>
      <button className={styles.delete} onClick={handleDelete}>
        <AiOutlineMinusCircle />
      </button>
    </li>
  );
}
