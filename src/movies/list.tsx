import React, { useEffect, useState } from 'react';
import { Item } from './item';
import { Typography, Grid } from '@material-ui/core';
import * as api from '../api';
import { useDispatch, useSelector } from 'react-redux';

import { getAllMovies } from '../redux-setup';

export const List = () => {
    const dispatch = useDispatch();

    const allMovies = useSelector<RootStoreT, MovieT[]>(store => store.movies);

    useEffect(() => {
        api.allMovies().then((movies: MovieT[]) => {
            dispatch(getAllMovies(movies));
        });
    }, []);

    return (
        <>
            <Typography variant='h3' component='h1'>
                Movies
            </Typography>
            <Grid container alignItems='stretch' spacing={3}>
                {allMovies &&
                    allMovies.map((item: MovieT) => {
                        return (
                            <Grid item xs={4} key={item.id}>
                                <Item
                                    title={item.title}
                                    overview={item.overview}
                                    genres={item.genres}
                                    posterPath={item['poster_path']}
                                />
                            </Grid>
                        );
                    })}
            </Grid>
        </>
    );
};
