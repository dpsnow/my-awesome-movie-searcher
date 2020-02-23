import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Movies } from './movies';

import { Container } from '@material-ui/core';
import { Footer, Header } from './components';

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Header />
                <div className='App'>
                    <Container maxWidth='md'>
                        <Switch>
                            <Route path='/'>
                                <Movies />
                            </Route>
                            <Route path='/user'>
                                <div> страница юзера</div>
                            </Route>
                        </Switch>
                    </Container>
                </div>
                <Footer />
            </Router>
        </>
    );
};

export default App;
