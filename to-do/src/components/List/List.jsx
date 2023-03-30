import React from "react";
import styles from "./List.module.css";
import ListItem from "../ListItem/ListItem";

export default function List({ state, darkMode, list, setList }) {
  return (
    <div className={styles.body}>
      <ul className={styles.list}>
        {state[0].show
          ? list.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                darkMode={darkMode}
                setList={setList}
                list={list}
              />
            ))
          : state[1].show
          ? list
              .filter((item) => !item.checked)
              .map((item) => (
                <ListItem
                  key={item.id}
                  item={item}
                  darkMode={darkMode}
                  setList={setList}
                  list={list}
                />
              ))
          : state[2].show
          ? list
              .filter((item) => item.checked)
              .map((item) => (
                <ListItem
                  key={item.id}
                  item={item}
                  darkMode={darkMode}
                  setList={setList}
                  list={list}
                />
              ))
          : null}
      </ul>
    </div>
  );
}
