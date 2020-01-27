import React from 'react';

export const Item = (props: ItemPropsT) => {
    const { title, overview } = props;
    return (
        <li>
            <a href='#'>
                <h2>{title}</h2>
            </a>
            <p>{overview}</p>
        </li>
    );
};
