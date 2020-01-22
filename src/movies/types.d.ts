type ItemPropsT = {
    id?: number; // id без ? = Property 'id' is missing in type '{ key: number; title: string; overview: string; }' but required in type 'ItemPropsT'.
    title: string;
    overview: string;
};

type ListPropsT = { content: ItemPropsT[] };
