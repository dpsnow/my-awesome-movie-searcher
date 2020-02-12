type ItemPropsT = {
    id: number;
    title: string;
    overview: string;
    genres: string[];
    posterPath?: string;
    isFavorite?: boolean;
};

type ListPropsT = { content: ItemPropsT[] };
