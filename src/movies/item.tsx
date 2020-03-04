import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardMedia, Divider, IconButton } from '@material-ui/core';

import { Favorite as FavoriteIcon } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusFavorite } from '../redux-setup/actions';
import { BASE_URL } from '../api/constants';
import { Link, useParams } from 'react-router-dom';

export const Item = (props: ItemPropsT) => {
    const dispatch = useDispatch();
    const [disabledBtn, setDisabledBtn] = useState(false);

    const { posterPath, id, isFavorite } = props;

    // const { title, overview, posterPath, id } = props;
    // const [expanded, setExpanded] = useState(false);

    // const favoriteMovies = useSelector((state: RootStoreT) => state.user.likes);
    // const isFavorite = favoriteMovies && favoriteMovies.includes(id);

    const onClickBtnFavorite = () => {
        //  дизейблить кнопку на время, до перерендера
        setDisabledBtn(true);
        dispatch(toggleStatusFavorite(id, Boolean(isFavorite)));
    };

    useEffect(() => {
        setDisabledBtn(false);
    }, [isFavorite]);

    return (
        <Card>
            <CardMedia style={{ height: '250px' }} image={`${BASE_URL}${posterPath}`} />
            <Divider variant='middle' />
            <CardActions disableSpacing>
                <Link to={`/movie/${id}`}>More info</Link>
                <IconButton
                    onClick={onClickBtnFavorite}
                    color={isFavorite ? 'secondary' : 'default'}
                    disabled={disabledBtn}
                >
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};
