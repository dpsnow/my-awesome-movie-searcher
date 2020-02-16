import React from 'react';
import { Container, Grid, Divider, Box } from '@material-ui/core';

export const Footer = () => {
    return (
        <Container maxWidth='md' style={{ marginTop: '60px' }}>
            <Divider variant='fullWidth' />
            <Grid container spacing={1}>
                <Box>footer</Box>
            </Grid>
        </Container>
    );
};
