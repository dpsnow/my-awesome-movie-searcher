import React from 'react';
import { List as Movies } from './movies/list';

import { Container } from '@material-ui/core';

const App: React.FC = () => {
    return (
        <div className='App'>
            <Container maxWidth='md'>
                <Movies />
            </Container>
        </div>
    );
};

export default App;
