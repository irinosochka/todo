import React, {useState, useEffect} from "react";
import {Switch, Route} from 'react-router-dom'

import * as api from './api';

import DBContext from './context/db'

import AppDrawer from "./components/AppDrawer";
import AppContent from "./components/AppContent";
import TodoList from "./pages/TodoList";

import './App.scss';

export default function App() {
    const [lists, setLists] = useState([]);

  useEffect(() => {
      api.getLists().then(setLists);
  }, []);

  return (
      <DBContext.Provider value={{ lists, ...api }}>
        <div className="app">
            <AppDrawer
                lists={lists}
            />

            <AppContent>
                <Switch>
                    <Route exact path="/:listId" component={TodoList} />
                </Switch>
            </AppContent>
        </div>
      </DBContext.Provider>
  );
}


