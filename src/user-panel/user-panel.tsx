import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

export const UserPanel = () => {
    // TODO: WIP
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(evt.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button aria-controls='user-menu' aria-haspopup='true' onClick={handleClick}>
                <AccountCircle />
                Vasya21
            </Button>
            <Menu id='user-menu' anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </>
    );
};
