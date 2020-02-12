type entranceMovieT = {
    id: number;
    title: string;
    imdb_id: string;
    overview: string;
    genres: string[];
    revenue: number;
    duration: number;
    likes: number;
    vote_average: number;
    vote_count: number;
    director: string;
    poster_path: string;
    release_date: string;
    moderated: boolean;
};

type MovieT = {
    id: number;
    title: string;
    imdbId: string;
    overview: string;
    genres: string[];
    revenue: number;
    duration: number;
    likes: number;
    voteAverage: number;
    voteCount: number;
    director: string;
    posterPath: string;
    releaseDate: string;
    isFavorite?: boolean;
};

type MoviesT = Map<number, MovieT>;

type MoviesStoreT = MoviesT;

type RootStoreT = {
    movies: MoviesStoreT;
    search: {
        values: {
            genre;
            text;
        };
        last?: string[];
    };
};

type Action<T> = { type: ActionsT; payload: T };
