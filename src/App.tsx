import React from 'react';
import { List as Movies } from './movies/list';

import dataMovies from './mocks/movies';

const App: React.FC = () => {
    return (
        <div className='App'>
            <Movies content={dataMovies} />
        </div>
    );
};

export default App;
