import React from 'react';
import { Item } from './item';

const renderMovies = (item: ItemPropsT) => <Item key={item.id} title={item.title} overview={item.overview} />;

export const List = (props: ListPropsT) => {
    const { content } = props;
    return (
        <>
            <h1>Movies</h1>
            <ul>{content.map(renderMovies)}</ul>;
        </>
    );
};
