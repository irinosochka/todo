import React, {useContext, useEffect, useMemo, useReducer} from "react";
import { Switch, Route } from 'react-router-dom'

import DataContext from './context/data';
import { reducer, initialState, actions} from "./store";

import AppDrawer from "./components/AppDrawer";
import AppContent from "./components/AppContent";
import TodoList from "./pages/TodoList";
import LoginPage from "./pages/Login";

import './App.scss';

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const contextValue = useMemo(() => {
        return {state, dispatch };
    }, [state, dispatch]);

    useEffect(() => {
        actions.getLists(dispatch);
        actions.setAuth(dispatch);
    }, []);



  return (
      <DataContext.Provider value={contextValue}>
          <div className="app">
              <AppDrawer
                  lists={state.lists}
              />

              <AppContent>
                  <Switch>
                      <Route exact path="/" component={LoginPage} />
                      <Route exact path="/tasks" component={TodoList} />
                      <Route exact path="/important" render={TodoList} />
                      <Route exact path="/planned" component={TodoList} />
                      <Route exact path="/:listId/:todoId?" component={TodoList} />
                  </Switch>
              </AppContent>
          </div>
      </DataContext.Provider>
  );
}


