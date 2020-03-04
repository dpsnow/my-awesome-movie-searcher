import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { toggleStatusFavorite } from '../redux-setup/actions';

import { BASE_URL } from '../api/constants';

import { Card, CardActions, CardMedia, Divider, IconButton } from '@material-ui/core';
import { Favorite as FavoriteIcon } from '@material-ui/icons';

export const Item = (props: ItemPropsT) => {
    const dispatch = useDispatch();
    const [disabledBtn, setDisabledBtn] = useState(false);
    const { posterPath, id, isFavorite } = props;

    const onClickBtnFavorite = () => {
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
