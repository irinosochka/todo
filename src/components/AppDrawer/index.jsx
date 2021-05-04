import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Drawer, DrawerHeader, DrawerContent,
    Layout,
    ListItemGraphic, ListItemMeta,
    ListDivider,
    ListGroup,
} from 'mdc-react';

import {
    Grid,
    Icon,
    IconButton,
    List, ListItem, ListItemText,
    Typography
} from '@material-ui/core';

import useStore from '../../hooks/store';

export default function AppDrawer({ lists }) {
    const { state, actions } = useStore();

    return (
        <Drawer
            id="app-drawer"
        >
            <DrawerHeader
                title="React Todo"
            >
                <Layout row justifyContent="between" alignItems="center">
                    <Typography variant="body2">{state.user.email}</Typography>
                    <IconButton onClick={() => actions.signOutUser()} title="Выйти">
                        <Icon>exit_to_app</Icon>
                    </IconButton>
                </Layout>
            </DrawerHeader>

            <DrawerContent>
                <ListGroup>
                    <List>
                        {[
                            { title: 'Zadania', icon: 'home', to: '/', exact: true },
                            { title: 'Ważne', icon: 'star', to: '/important' },
                            { title: 'Zaplanowane', icon: 'event', to: '/planned' },
                        ].map(item =>
                            <ListItem
                                key={item.icon}
                                component={NavLink}
                                to={item.to}
                                exact={item.exact}
                                activeClassName="mdc-list-item--activated"
                            >
                                <ListItemGraphic>
                                    <Icon>{item.icon}</Icon>
                                </ListItemGraphic>

                                <ListItemText>
                                    {item.title}
                                </ListItemText>
                            </ListItem>
                        )}
                    </List>
                    
                    <ListDivider element="hr" />

                    <List>
                        {lists.map(item =>
                            <ListItem
                                key={item.id}
                                component={NavLink}
                                to={item.id}
                                activeClassName="mdc-list-item--activated"
                            >
                                <ListItemGraphic>
                                    <Icon>list</Icon>
                                </ListItemGraphic>

                                <ListItemText>
                                    {item.title}
                                </ListItemText>

                                <ListItemMeta>
                                    {item.todos.length}
                                </ListItemMeta>
                            </ListItem>
                        )}
                    </List>
                </ListGroup>
            </DrawerContent>
        </Drawer>
    );
}