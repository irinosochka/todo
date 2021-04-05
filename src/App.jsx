import React, {useState, useEffect} from "react";
import {Switch, Route} from 'react-router-dom'

import { get } from './api';

import DBContext from './context/db'

import AppDrawer from "./components/AppDrawer";
import AppContent from "./components/AppContent";
import TodoList from "./components/TodoList";

import './App.scss';

export default function App() {
    const [lists, setLists] = useState([]);

  useEffect(() => {
      get('lists')().then(setLists);
  }, []);

  return (
      <DBContext.Provider value={{lists,get}}>
        <div className="app">
            <AppDrawer
                lists={lists}
            />

            <AppContent>
                <Switch>
                    <Route path="/:listId" component={TodoList} />
                </Switch>
            </AppContent>
        </div>
      </DBContext.Provider>
  );
}


