type ItemPropsT = {
    id: number;
    title: string;
    overview: string;
    genres: string[];
    posterPath?: string;
    isFav?: boolean;
};

type ListPropsT = { content: ItemPropsT[] };
