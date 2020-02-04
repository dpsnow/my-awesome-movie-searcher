import React from 'react';
import { List as Movies } from './movies/list';

import { Container } from '@material-ui/core';
import { Header } from './header';
import { Footer } from './footer/footer';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <div className='App'>
                <Container maxWidth='md'>
                    <Movies />
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default App;
