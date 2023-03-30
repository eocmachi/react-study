import React from "react";
import styles from "./ListItem.module.css";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosCheckbox } from "react-icons/io";

export default function ListItem({ item, darkMode, setList, list }) {
  const onToggle = (id) => {
    setList((list) =>
      list.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };
  const onRemove = (id) => {
    setList(list.filter((item) => item.id !== id));
  };
  return (
    <li className={styles.item}>
      <div className={styles.inner}>
        <div
          className={styles.checkbox}
          onClick={() => {
            onToggle(item.id);
          }}
        >
          {item.checked ? <IoIosCheckbox /> : <MdOutlineCheckBoxOutlineBlank />}
        </div>
        <span className={`${styles[item.checked ? "done" : "active"]}`}>
          {item.text}
        </span>
      </div>
      <button
        className={`${darkMode ? styles.dark : ""} ${styles.delete}`}
        onClick={() => {
          onRemove(item.id);
        }}
      >
        <AiOutlineMinusCircle />
      </button>
    </li>
  );
}
