import React, {useState} from 'react';
import {TopAppBar} from "mdc-react";
import{
    Menu,MenuItem, Fade, Icon, IconButton
} from '@material-ui/core'

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
            <TopAppBar
                title={title}
                actionItems={[
                    <IconButton aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                        <Icon>sort</Icon>
                    </IconButton>
                ]}
            />

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
        </div>
    );
}
