import React from 'react';
import {
    Drawer, DrawerHeader, DrawerContent,Icon,
    List, ListItem, ListItemGraphic, ListItemText, ListDivider,
    ListGroup
} from 'mdc-react';

export default function AppDrawer({ lists }) {
    console.log(lists)
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
                            <ListItem key={item.icon}>
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
                            <ListItem key={item.key}>
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