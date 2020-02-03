import React, { useEffect, useState } from 'react';
import { Item } from './item';
import { Typography, Grid } from '@material-ui/core';
import * as api from '../api';

const replacementPosterPath = (movie: MovieInpitDataT) => {
    if (!movie['poster_path']) {
        movie['poster_path'] = `https://picsum.photos/id/${Math.floor(Math.random() * Math.floor(500))}/200/300`;
    }
    return movie;
};

export const List = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (movies.length === 0) {
            api.getAllmovies
                .then(movies => movies.map(replacementPosterPath))
                .then(movies => {
                    setMovies(movies);
                });
        }
    }, [movies]);

    return (
        <>
            <Typography variant='h3' component='h1'>
                Movies
            </Typography>
            <Grid container alignItems='stretch' spacing={3}>
                {movies.map((item: MovieInpitDataT) => {
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
