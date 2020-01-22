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

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}

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

const renderGenres = (genre: string) => {
    return <Chip variant='outlined' key={genre} size='small' label={genre} />;
};

export const Item = (props: ItemPropsT) => {
    const { title, overview, genres } = props;

    const [expanded, setExpanded] = useState(false);
    const [isFavorite, setFavorite] = useState(false);

    const onClickBtnExpand = () => {
        setExpanded(!expanded);
    };

    const onClickBtnFavorite = () => {
        setFavorite(!isFavorite);
    };

    const classes = useStyles();

    return (
        <Card>
            <CardMedia style={{ height: '300px' }} image={`https://picsum.photos/id/${getRandomInt(500)}/200/300`} />
            <CardHeader title={title} titleTypographyProps={{ align: 'center' }} />
            <Divider variant='middle' />
            <CardContent>
                <Box className={classes.root}>{genres.map(renderGenres)}</Box>
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
