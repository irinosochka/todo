import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {
    Drawer, DrawerHeader, DrawerContent,
    Layout,
    ListItemGraphic, ListItemMeta,
    ListDivider,
    ListGroup,Button
} from 'mdc-react';

import {
    Grid, TextField,
    Icon,
    IconButton,
    List, ListItem, ListItemText,
    Typography
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';


import useStore from '../../hooks/store';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function AppDrawer({ lists, list }) {
    const classes = useStyles();
    const { state, actions } = useStore();
    const [ isListFormOpen, setListFormOpen] = useState(false);
    const [ listTitle, setListTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        actions.createList({
            title: listTitle,
            userId: state.user.uid
        }).then(() => {
            setListTitle('');
            setListFormOpen(false)
        })
    }

    function handleDeleteList(listId) {
        actions.deleteList(listId);
    }

    return (
        <Drawer
            id="app-drawer"
        >
            <DrawerHeader
                title="React Todo"
            >
                <Layout row justifyContent="between" alignItems="center">
                    <Typography variant="body2">{state.user.email}</Typography>
                    <IconButton onClick={() => actions.signOutUser()} title="Wylogować się">
                        <Icon>exit_to_app</Icon>
                    </IconButton>
                </Layout>
            </DrawerHeader>

            <DrawerContent>
                <ListGroup>
                    <List>
                        {[
                            { title: 'Wszystkie zadania', icon: 'home', to: '/', exact: true },
                            { title: 'Ukończone', icon: 'done', to: '/done' },
                            { title: 'W trakcie wykonania', icon: 'close', to: '/not_done' },
                            { title: 'Zaplanowane', icon: 'event', to: '/planned' },
                            { title: 'Ważne', icon: 'star', to: '/important' },
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

                                <IconButton onClick={() => handleDeleteList(item.id)}>
                                    <Icon>delete</Icon>
                                </IconButton>

                            </ListItem>
                        )}
                    </List>
                    <Grid>
                        {isListFormOpen ?
                            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                                <TextField
                                    label="Nowa lista"
                                    value={listTitle}
                                    onChange={(event) => setListTitle(event.target.value)}
                                    fullWidth

                                /> :
                            </form>
                            :
                            <Button
                                icon={<Icon>add</Icon>}
                                onClick={() => setListFormOpen(true)}
                            >Dodaj listę</Button>
                        }
                    </Grid>
                </ListGroup>
            </DrawerContent>
        </Drawer>
    );
}