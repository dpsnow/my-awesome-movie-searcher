import React from 'react';

export const Page = (props: any) => {
    const { title, overview, id } = props;

    return (
        <div>
            страница фильма {id}
            <p>{title}</p>
            <p>{overview}</p>
        </div>
    );
};
