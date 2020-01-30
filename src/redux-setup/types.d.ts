type MovieT = {
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
    isFav?: boolean;
};

type RootStoreT = { movies: MovieT[] };

type ActionsT = typeof MOVIE_ADD | typeof MOVIE_DELETE | 'DEFAULT';

type Action<T> = { type: ActionsT; payload: T };
