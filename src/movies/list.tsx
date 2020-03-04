import React from 'react';

import { useSelector } from 'react-redux';
import { selectDesiredMovies } from './selectors';

import { Grid } from '@material-ui/core';

import { Item } from './item';

export const List = () => {
    const allMovies = useSelector<RootStoreT, Map<number, MovieT>>(selectDesiredMovies);
    const favoriteMovies = useSelector((state: RootStoreT) => state.user.likes);

    return (
        <Grid container alignItems='stretch' spacing={1}>
            {allMovies &&
                Array.from(allMovies.values()).map((item: any) => (
                    <Grid item xs={6} sm={3} md={2} key={item.id}>
                        <Item {...item} isFavorite={favoriteMovies && favoriteMovies.includes(item.id)} />
                    </Grid>
                ))}
        </Grid>
    );
};
