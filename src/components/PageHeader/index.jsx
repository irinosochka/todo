import React, {useState} from 'react';
import {
    TopAppBar,Menu, MenuItem,MenuSurface,
} from 'mdc-react';

import {
     IconButton, Icon,
} from '@material-ui/core';

export default function PageHeader({  title, onSortChange }) {
    const [menuAnchor, setMenuAnchor] = useState(null);
    const[isMenuOpen, setMenuOpen] = useState(false);

    const openMenu = event => {
        setMenuOpen(true);
        setMenuAnchor(event.target);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        setMenuAnchor(null);
    };

    return(
        <div>
            <TopAppBar
                title={title}
                actionItems={[
                    <IconButton onClick={openMenu}>
                        <Icon>sort</Icon>
                    </IconButton>
                ]}
            />

            <MenuSurface
                open={isMenuOpen}
                anchor={menuAnchor}
                onClose={closeMenu}
                right
            >

                <Menu>
                    <MenuItem onClick={() => onSortChange('title')}>Po nazwie</MenuItem>
                    <MenuItem onClick={() => onSortChange('date')}>Po dacie</MenuItem>
                    <MenuItem onClick={() => onSortChange('completed')}>Po wykonanych</MenuItem>
                    <MenuItem onClick={() => onSortChange('important')}>Po ważnych</MenuItem>
                </Menu>
            </MenuSurface>
            </div>
    );
}