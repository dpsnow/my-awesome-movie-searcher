import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Box, Switch, MenuItem, Menu, Button } from '@material-ui/core';

import { AccountCircle } from '@material-ui/icons';
import { SearchPanel } from './search-panel';

export const Header = () => {
    // TODO: WIP
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Paper>
            <Container maxWidth='md'>
                <Grid container spacing={1}>
                    <Grid item>
                        <span>Realise Calendar</span>
                        <span>My List</span>
                        <span>Coming soon</span>
                    </Grid>
                    <Grid item>
                        <Typography>
                            <Switch value='checkedC' inputProps={{ 'aria-label': 'primary checkbox' }} />
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={2}>
                        <Typography variant='h6'>Лого</Typography>
                    </Grid>
                    <Grid item xs>
                        <Box flexShrink={1}>
                            <SearchPanel></SearchPanel>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Button aria-controls='user-menu' aria-haspopup='true' onClick={handleClick}>
                            <AccountCircle />
                            Vasya21
                        </Button>
                        <Menu id='user-menu' anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>Settings</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
};
