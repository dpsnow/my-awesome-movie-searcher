type ItemPropsT = {
    id: number;
    title: string;
    overview: string;
    genres: string[];
    posterPath?: string;
    isFavorite?: boolean;
    likes: 0 | 1;
};

type ListPropsT = { content: ItemPropsT[] };
