import React, { useEffect } from 'react';
import { Item } from './item';
import { Typography, Grid } from '@material-ui/core';

const renderMovies = (item: ItemPropsT) => {
    return (
        <Grid item xs={4} key={item.id}>
            <Item title={item.title} overview={item.overview} genres={item.genres} />
        </Grid>
    );
};

export const List = () => {
    const [movies, setMovies] = React.useState([]);

    useEffect(() => {
        if (movies.length === 0) {
            fetch('https://devlab.website/v1/movies')
                .then(res => res.json())
                .then(movies => {
                    // console.log('movies', movies);
                    setMovies(movies);
                })
                .catch(err => {
                    // console.log('err', err);
                });
        }
    }, [movies]);

    return (
        <>
            <Typography variant='h3' component='h1'>
                Movies
            </Typography>
            <Grid container alignItems='stretch' spacing={3}>
                {movies.map(renderMovies)}
            </Grid>
        </>
    );
};
