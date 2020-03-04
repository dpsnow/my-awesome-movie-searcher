import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusFavorite } from '../redux-setup';
import { userFavoriteMovies } from '../movies/selectors';

import { BASE_URL } from '../api/constants';

import { Item } from '../movies/item';

import { Button, Typography, Grid } from '@material-ui/core';
import { Favorite as FavoriteIcon } from '@material-ui/icons';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';

export const Page = (props: any) => {
    const dispatch = useDispatch();
    const { posterPath, title, overview, id, isFavorite, voteAverage, voteCount, genres } = props;
    const [disabledBtn, setDisabledBtn] = useState(false);
    const favoriteMovies = useSelector<RootStoreT, Map<number, MovieT>>(userFavoriteMovies);

    const onClickBtnFavorite = () => {
        setDisabledBtn(true);
        dispatch(toggleStatusFavorite(id, Boolean(isFavorite)));
    };

    useEffect(() => {
        setDisabledBtn(false);
    }, [isFavorite]);

    return (
        <div>
            <Grid container alignItems='stretch' spacing={3}>
                <Grid item xs={3}>
                    <img src={`${BASE_URL}${posterPath}`} width='100%' alt={title} />
                </Grid>
                <Grid item xs={9}>
                    <div>
                        <Typography variant='h3' component='h1'>
                            {title}
                        </Typography>
                    </div>
                    <div>
                        <p>
                            <Button
                                variant={isFavorite ? 'contained' : 'outlined'}
                                color={isFavorite ? 'secondary' : 'default'}
                                startIcon={<FavoriteIcon />}
                                onClick={onClickBtnFavorite}
                                disabled={disabledBtn}
                            >
                                {isFavorite ? 'In my list' : 'Add to my list'}
                            </Button>
                        </p>
                        <p>
                            <StarBorderRoundedIcon />
                            {voteAverage} / 10 ({voteCount})
                        </p>
                        <p>{overview}</p>
                        <p>{genres.map((genre: string) => `| ${genre} `)}|</p>
                    </div>
                </Grid>
            </Grid>

            <div>
                <Typography variant='h5' component='h2'>
                    You Also might like
                </Typography>
                <Grid container alignItems='stretch' spacing={1}>
                    {favoriteMovies &&
                        Array.from(favoriteMovies.values()).map((item: any) => {
                            return (
                                <Grid item xs={6} sm={3} md={2} key={item.id}>
                                    <Item {...item} isFavorite={true} />
                                </Grid>
                            );
                        })}
                </Grid>
            </div>
        </div>
    );
};
