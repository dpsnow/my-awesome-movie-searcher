import React from 'react';

import { Container, Grid, Divider, Box } from '@material-ui/core';

export const Footer = () => {
    return (
        <Container maxWidth='md' style={{ marginTop: '60px' }}>
            <Divider variant='fullWidth' />
            <Grid container spacing={1}>
                <Box>
                    <a href='/'>Privacy Policy</a>
                    <p>© 2010-{new Date().getFullYear()} by Movier-plus.com, Inc.</p>
                </Box>
            </Grid>
        </Container>
    );
};
