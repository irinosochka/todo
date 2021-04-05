import React from 'react';
import { NavLink } from "react-router-dom";
import {
    Drawer, DrawerHeader, DrawerContent,Icon,
    List, ListItem, ListItemGraphic, ListItemText, ListDivider,
    ListGroup
} from 'mdc-react';

import './index.scss'

export default function AppDrawer({ lists }) {
    return (
        <Drawer
            id="app-drawer"
        >
            <DrawerHeader
                title="React Todo"
            />

            <DrawerContent>
                <ListGroup>
                    <List>
                        {[
                            { title: 'Moje konto', icon: 'person', to: '/' },
                            { title: 'Zadania', icon: 'assignment', to: '/tasks' },
                            { title: 'Ważne', icon: 'grade', to: '/important'},
                            { title: 'Nadchodzące', icon: 'alarm', to: '/planned'},
                            { title: 'Wykonane', icon: 'done', to: '/done'},
                        ].map(item =>
                            <ListItem
                                key={item.icon}
                                component={NavLink}
                                to={item.to}
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
                                key={item.key}
                                component={NavLink}
                                to={item.id}
                            >
                                <ListItemGraphic>
                                    <Icon>list</Icon>
                                </ListItemGraphic>

                                <ListItemText>
                                    {item.title}
                                </ListItemText>
                            </ListItem>
                        )}
                    </List>
                </ListGroup>
            </DrawerContent>

        </Drawer>
    );
}