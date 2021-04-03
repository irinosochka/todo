import React, {useState, useEffect} from "react";

import { get } from './api';

import AppDrawer from "./components/AppDrawer";
import AppContent from "./components/AppContent";

import './App.scss';

export default function App() {
    const [lists, setLists] = useState([]);
    const [todos, setTodos] = useState([]);

  useEffect(() => {
      get('lists').then(setLists);
      get('todos').then(setTodos);
  }, []);

  return (
    <div className="app">
        <AppDrawer
            lists={lists}
        />

        <AppContent>
            <ul>
                {todos.map(todo =>
                    <li key={todo.id}>{todo.title}</li>
                )}
            </ul>
        </AppContent>
    </div>
  );
}


