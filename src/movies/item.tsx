import React, { useState, useCallback } from 'react';
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

// TODO: разобраться со стилями и вынести жанры в отдельный компонент
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: '2px',
        },
    },
});

export const Item = (props: ItemPropsT) => {
    const { title, overview, genres, posterPath } = props;

    const [expanded, setExpanded] = useState(false);
    const [isFavorite, setFavorite] = useState(false);

    const onClickBtnExpand = () => {
        setExpanded(!expanded);
    };

    const onClickBtnFavorite = () => {
        setFavorite(!isFavorite);
    };

    // при выносе из компонента получаю ошибку Error: Invalid hook call.
    const classes = useStyles();

    return (
        <Card>
            <CardMedia style={{ height: '300px' }} image={posterPath} />
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
                <IconButton onClick={onClickBtnFavorite} color={isFavorite ? 'secondary' : 'default'}>
                    <FavoriteIcon />
                </IconButton>
                <IconButton onClick={onClickBtnExpand} style={{ marginLeft: 'auto' }}>
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
