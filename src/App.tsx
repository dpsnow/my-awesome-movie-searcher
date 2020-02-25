import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useParams, match } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container } from '@material-ui/core';

import { Footer, Header } from './components';
import { Movies } from './movies';
import { Movie } from './movie';

// type PrivateRoutePropsT = {
//     path: string;
//     predicate: (args: any) => boolean;
//     valueToBeChecked: any;
//     SuccessRoute: any;
//     FailureRoute: any;
// };

// const PrivateRoute = ({ path, predicate, valueToBeChecked, SuccessRoute, FailureRoute }: PrivateRoutePropsT) => {
//     return <Route path={path}>{predicate(valueToBeChecked) ? <SuccessRoute /> : <FailureRoute />}</Route>;
// };

const App: React.FC = () => {
    const allMovies = useSelector((store: RootStoreT) => store.movies);

    return (
        <>
            <Router>
                <Header />
                <div className='App'>
                    <Container maxWidth='md'>
                        <Switch>
                            <Route exact path='/'>
                                <Movies />
                            </Route>

                            <Route path='/login'>
                                <div>login</div>
                            </Route>

                            <Route path='/user'>{true ? <div> страница юзера</div> : <Redirect to='/login' />}</Route>

                            <Route
                                path='/movie/:id'
                                children={({ match }) => {
                                    if (match) {
                                        const idMovie = Number(match.params.id);
                                        return allMovies.has(idMovie) ? (
                                            <Movie {...allMovies.get(idMovie)} />
                                        ) : (
                                            <div>такого фильма нет</div>
                                        );
                                    }
                                }}
                            />

                            <Route path='*'>
                                {/* <NoMatch /> */}
                                <div> Тебя тут не должно быть </div>
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
