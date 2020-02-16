import React, { useState } from 'react';
import {
    Card,
    Typography,
    CardContent,
    CardActions,
    Box,
    CardMedia,
    CardHeader,
    Chip,
    Divider,
    IconButton,
    makeStyles,
    Collapse,
} from '@material-ui/core';

import { Favorite as FavoriteIcon, ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusFavorite } from '../redux-setup/actions';
import { BASE_URL } from '../api/constants';

// TODO: разобраться со стилями и вынести жанры в отдельный компонент
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: '2px',
        },
    },
    expand: {
        transform: 'rotate(0deg)',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
});

// const favoriteMovies = useSelector((state: RootStoreT) => state.user.likes);

export const Item = (props: ItemPropsT) => {
    const dispatch = useDispatch();

    const { title, overview, genres, posterPath, id, isFavorite } = props;
    const [expanded, setExpanded] = useState(false);

    const favoriteMovies = useSelector((state: RootStoreT) => state.user.likes);
    console.log(favoriteMovies);
    const isFav = favoriteMovies && favoriteMovies.includes(id);
    console.log(isFav);

    const onClickBtnExpand = () => {
        setExpanded(!expanded);
    };

    const onClickBtnFavorite = () => {
        dispatch(toggleStatusFavorite(id, Boolean(isFav)));

        // //  TODO: отправить запрос, дождаться ответа, обновить инфу о файле
        // // ?: что будет с реселектом, на фильмы которые в избранном
        // console.log('onClickBtnFavorite', id, likes);
        // dispatch(changeStatusFavorite(id, Boolean(likes === 0)));
    };

    // при выносе из компонента получаю ошибку Error: Invalid hook call.
    const classes = useStyles();

    return (
        <Card>
            <CardMedia style={{ height: '400px' }} image={`${BASE_URL}${posterPath}`} />
            <CardHeader title={title} titleTypographyProps={{ align: 'center' }} />
            <Divider variant='middle' />
            <CardContent>
                <Box className={classes.root}>
                    {genres.map((genre: string) => {
                        return <Chip variant='outlined' key={genre} size='small' label={genre} />;
                    })}
                </Box>
            </CardContent>
            <CardActions disableSpacing>
                {/* <IconButton onClick={onClickBtnFavorite} color={isFavorite ? 'secondary' : 'default'}>
                    <FavoriteIcon />
                </IconButton> */}
                <IconButton onClick={onClickBtnFavorite} color={isFav ? 'secondary' : 'default'}>
                    <FavoriteIcon /> от user.likes
                </IconButton>
                <IconButton
                    className={expanded ? classes.expandOpen : classes.expand}
                    onClick={onClickBtnExpand}
                    style={{ marginLeft: 'auto' }}
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                    <Typography paragraph>Overview:</Typography>
                    <Typography paragraph>{overview}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};
