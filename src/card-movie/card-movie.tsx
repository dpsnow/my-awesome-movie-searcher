import React from 'react';

export const Card = (props: ItemPropsT) => {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.overview}</p>
        </div>
    );
};
