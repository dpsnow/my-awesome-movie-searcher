import React, { useEffect, useState } from 'react';
import { Button, Typography, Grid } from '@material-ui/core';
import { Favorite as FavoriteIcon } from '@material-ui/icons';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusFavorite } from '../redux-setup';
import { Item } from '../movies/item';
import { userFavoriteMovies } from '../movies/selectors';

export const Page = (props: any) => {
    const dispatch = useDispatch();
    const { posterPath, title, overview, id, isFavorite, voteAverage, voteCount } = props;
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
            <Typography variant='h3' component='h1'>
                {title}
            </Typography>

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
                    {/* <IconButton
                    onClick={onClickBtnFavorite}
                    color={isFavorite ? 'secondary' : 'default'}
                    disabled={disabledBtn}
                >
                    <FavoriteIcon />
                </IconButton>{' '} */}
                </p>
                <p>
                    <StarBorderRoundedIcon />
                    {voteAverage} / 10 ({voteCount})
                </p>
                <p>{overview}</p>
            </div>
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
