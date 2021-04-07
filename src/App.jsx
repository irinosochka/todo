import React from "react";
import {Switch, Route} from 'react-router-dom'

import useApi from "./hooks/api";

import AppDrawer from "./components/AppDrawer";
import AppContent from "./components/AppContent";
import TodoList from "./pages/TodoList";

import './App.scss';

export default function App() {
    const { data: {lists }} =  useApi();

  return (
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
  );
}


