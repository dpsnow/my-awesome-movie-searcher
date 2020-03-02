import React, { useState } from 'react';
import { Button, Menu, MenuItem, Typography, Grid } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
