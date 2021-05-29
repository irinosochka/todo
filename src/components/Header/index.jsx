import React, {useState} from 'react';
import indigo from '@material-ui/core/colors/indigo';
import{
    Menu,MenuItem, Fade, Icon, IconButton,  AppBar, Toolbar, Typography
} from '@material-ui/core'

import './index.scss'

export default function Header({  title, sortBy, onSortChange }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar justify="space-between">
                    <Typography variant="h6">
                        {title}
                    </Typography>
                    <IconButton
                        aria-controls="fade-menu"
                        aria-haspopup="true"
                        onClick={handleClick}>
                        <Icon style={{ color: indigo[50] }}>sort</Icon>
                    </IconButton>

            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={() => onSortChange('title')} selected={sortBy === 'title'}>Po nazwie</MenuItem>
                <MenuItem onClick={() => onSortChange('dueDate')} selected={sortBy === 'dueDate'}>Po dacie</MenuItem>
                <MenuItem onClick={() => onSortChange('completed')} selected={sortBy === 'completed'}>Po wykonanych</MenuItem>
                <MenuItem onClick={() => onSortChange('important')} selected={sortBy === 'important'}>Po ważnych</MenuItem>
            </Menu>
                    </Toolbar>
            </AppBar>
        </div>
    );
}
