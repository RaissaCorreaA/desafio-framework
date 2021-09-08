import React, { useEffect, useState } from "react";
import Card from "../../components/Cards/ToDo/index";
import api from "../../services/api";
import "./styles.css";

let ToDos = () => {
  const [toDo, setToDo] = useState([]);
  const [exibe] = useState([]);
  const [all, setAllTodos] = useState([]);
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setToDo(items);
  }, [items]);

  useEffect(() => {
    api.get("/todos").then((response) => {
      setAllTodos(response.data);
    });
  }, []);

  useEffect(() => {
    setToDo(all.slice(exibe));
  }, [all, exibe]);

  useEffect(() => {
    const results = all.filter((toDo) =>
      toDo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setToDo(results);
  }, [all, searchTerm]);

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function genClassName(boolean) {
    if (boolean) {
      return "done";
    } else {
      return "toDo";
    }
  }
  function done() {
    setItems(all.filter((item) => item.completed));
  }

  function toDos() {
    setItems(all.filter((item) => !item.completed));
  }

  function allItems() {
    setItems(all.slice(toDo));
  }

  return (
    <>
      <Card />
      <div id="containerButtom">
        <button id="buttom" className="buttomAll" onClick={allItems}>
          Todos
        </button>
        <button id="buttom" className="buttomToDo" onClick={toDos}>
          To Do!
        </button>
        <button id="buttom" className="buttomDone" onClick={done}>
          Feito!
        </button>
      </div>
      <div className="search">
        <br />
        <input
          className="searchBox"
          type="text"
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <br />
      <br />
      <div className="toDoContainer">
        {toDo.map((toDo) => {
          return (
            <div key={toDo.id} className={genClassName(toDo.completed)}>
              <h2>{toDo.title}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ToDos;
