import React, { useEffect } from 'react';
import { Item } from './item';
import { Typography, Grid } from '@material-ui/core';
import { fetchMovies } from '../api';
import { useDispatch, useSelector } from 'react-redux';

import { getAllMovies } from '../redux-setup';

export const List = () => {
    const dispatch = useDispatch();

    const allMovies = useSelector<RootStoreT, Map<number, MovieT>>(store => store.movies);

    useEffect(() => {
        fetchMovies().then((movies: MoviesT) => {
            dispatch(getAllMovies(movies));
        });
    }, [dispatch]);

    return (
        <>
            <Typography variant='h3' component='h1'>
                Movies
            </Typography>
            <Grid container alignItems='stretch' spacing={1}>
                {allMovies &&
                    Array.from(allMovies.values()).map((item: MovieT) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={item.id}>
                                {/* TODO: исправить септку после стилизации под макет */}
                                {/* <Grid item xs={6} sm={3} md={2} key={item.id}> */}
                                <Item {...item} />
                            </Grid>
                        );
                    })}
            </Grid>
        </>
    );
};
