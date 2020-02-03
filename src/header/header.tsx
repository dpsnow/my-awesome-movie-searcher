import React, { useState } from 'react';
import {
    Container,
    Grid,
    Paper,
    Typography,
    Box,
    Switch,
    FormControl,
    MenuItem,
    Select,
    Menu,
    Button,
    TextField,
} from '@material-ui/core';

import { Search as SearchIcon, AccountCircle } from '@material-ui/icons';

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
                            <FormControl fullWidth size={'small'} style={{ display: 'flex', flexDirection: 'row' }}>
                                <Select id='select' value={10}>
                                    <MenuItem value={10}>All</MenuItem>
                                    <MenuItem value={20}>ne all</MenuItem>
                                    <MenuItem value={30}>one</MenuItem>
                                </Select>
                                <SearchIcon />
                                <TextField id='outlined-basic' label='Search…' variant='outlined' size='small' />
                            </FormControl>
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
