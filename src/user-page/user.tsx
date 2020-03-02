import React from 'react';
import { Button, Typography, Grid } from '@material-ui/core';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import { Link as RouterLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import { Edit } from './edit';

export const UserPage = () => {
    let { path, url } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path}>
                <Grid container alignItems='stretch' spacing={1}>
                    <Grid item xs={12} md={9}>
                        <Grid container item xs={12}>
                            <Grid item xs={12}>
                                <Typography variant='h4' component='h1'>
                                    My profile
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                Фотка
                            </Grid>
                            <Grid item xs={12} md={9}>
                                Настройки
                                <Button
                                    size='small'
                                    endIcon={<EditRoundedIcon />}
                                    component={RouterLink}
                                    to={`${url}/edit`}
                                >
                                    Edit
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Typography variant='h4' component='h2'>
                                My List
                            </Typography>
                            You have XXX movies in your list
                            <Button variant='outlined' component={RouterLink} to={`${url}/my-list`}>
                                See All
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant='h6' component='h3'>
                            My activity
                        </Typography>
                        <div>карточка события</div>
                        <div>карточка события</div>
                        <div>карточка события</div>
                    </Grid>
                </Grid>
            </Route>
            <Route path={`${path}/edit`}>
                <Edit />
            </Route>
            <Route path={`${path}/my-list`}>
                <div>My List</div>
            </Route>
        </Switch>
    );
};
