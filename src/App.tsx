import React from 'react';
import { Movies } from './movies';

import { Container } from '@material-ui/core';
import { Footer, Header } from './components';

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
