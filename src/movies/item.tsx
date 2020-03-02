import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardMedia, Divider, IconButton, Link } from '@material-ui/core';

import { Favorite as FavoriteIcon } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusFavorite } from '../redux-setup/actions';
import { BASE_URL } from '../api/constants';

export const Item = (props: ItemPropsT) => {
    const dispatch = useDispatch();
    const [disabledBtn, setDisabledBtn] = useState(false);

    const { posterPath, id, isFavorite } = props;

    const onClickBtnFavorite = () => {
        //  дизейблить кнопку на время, до перерендера
        setDisabledBtn(true);
        dispatch(toggleStatusFavorite(id, Boolean(isFavorite)));
    };

    useEffect(() => {
        console.log('gg');
        setDisabledBtn(false);
    }, [isFavorite]);

    return (
        <Card>
            <CardMedia style={{ height: '250px' }} image={`${BASE_URL}${posterPath}`} />
            <Divider variant='middle' />
            <CardActions disableSpacing>
                <Link href='#'>More info</Link>
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
