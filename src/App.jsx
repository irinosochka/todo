import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import useStore from './hooks/store';

import AppDrawer from './components/AppDrawer';
import AppContent from './components/AppContent';
import TodoPage from './pages/TodoPage';
import LoginPage from './pages/LoginPage';

import './App.scss';

export default function App() {
    const { state, actions } = useStore();

    useEffect(() => {
        actions.initAuth();
    }, [actions]);

    useEffect(() => {
        if(state.user){
            actions.getLists(state.user.uid);
            actions.getTodos(state.user.uid);
        }
    }, [state.user, actions]);

    if (!state.user) {
        return (
            <Route component={LoginPage} />
        );
    } else {
        return (
                <div className="app">
                    <AppDrawer
                        lists={state.lists}
                    />

                    <AppContent>
                        <Switch>
                            <Route exact path="/" component={TodoPage} />
                            <Route exact path="/important" component={TodoPage} />
                            <Route exact path="/planned" component={TodoPage} />
                            <Route exact path="/done" component={TodoPage} />
                            <Route exact path="/not_done" component={TodoPage} />
                            <Route path="/:listId/:todoId?" component={TodoPage} />
                        </Switch>
                    </AppContent>
                </div>
        );
    }
}
