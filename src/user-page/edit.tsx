import React from 'react';
import { Typography, Grid } from '@material-ui/core';

export const Edit = () => {
    return (
        <div>
            <Typography variant='h4' component='h1'>
                My profile / <b> Edit</b>
            </Typography>
            <Grid container alignItems='stretch' spacing={1}>
                <Grid item xs={12} md={3}>
                    Фотка
                </Grid>
                <Grid item xs={12} md={9}>
                    Настройки
                </Grid>
            </Grid>
        </div>
    );
};
