import React from 'react';
import { Container, Grid, Paper, Typography, Box, Switch } from '@material-ui/core';

import { Link } from 'react-router-dom';

import { SearchPanel } from '../search-panel';
import { UserPanel } from '../user-panel';

export const Header = () => {
    return (
        <Paper>
            <Container maxWidth='md'>
                <Grid container spacing={1}>
                    <Grid item>
                        <span>Realise Calendar</span> | <span>My List</span> | <span>Coming soon</span>
                    </Grid>
                    <Grid item>
                        <Typography>
                            <Switch value='checkedC' inputProps={{ 'aria-label': 'primary checkbox' }} />
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={2}>
                        <Typography variant='h6'>
                            <Link to='/'>>MOViER+</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Box flexShrink={1}>
                            <SearchPanel></SearchPanel>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <UserPanel />
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
};
