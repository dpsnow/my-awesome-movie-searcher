import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addSearch } from '../redux-setup/actions';
import { selectGenres } from './selectors';

import { FormControl, Select, MenuItem } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

export const SearchPanel = () => {
    const dispatch = useDispatch();

    const genres = useSelector(selectGenres);
    const lastFiveSearch = useSelector<RootStoreT, string[] | undefined>(store =>
        store.search ? store.search.last : []
    );

    const [genre, setGenre] = useState<string>('all');
    const [text, setText] = useState<string>('');

    const handlerBlurSearch = (evt: React.ChangeEvent<{ value: string }>) => {
        setText(evt.target.value);
        dispatch(addSearch({ genre, text: evt.target.value }));
    };

    const handleChangeSelect = (evt: React.ChangeEvent<{ value: unknown }>) => {
        setGenre(evt.target.value as string);
        dispatch(addSearch({ genre: evt.target.value, text }));
    };

    return (
        <FormControl fullWidth size={'small'} style={{ display: 'flex', flexDirection: 'row' }}>
            {/* фильтры */}
            <Select id='select' value={genre} onChange={handleChangeSelect}>
                <MenuItem value={'all'}>All</MenuItem>
                {genres.size !== 0 &&
                    Array.from(genres).map((it: any) => {
                        return (
                            <MenuItem key={it} value={it}>
                                {it}
                            </MenuItem>
                        );
                    })}
            </Select>
            {/* поиск по тексту */}

            <input type='search' name='search' id='search' list='search-select' onBlur={handlerBlurSearch} />

            <datalist id='search-select'>
                {lastFiveSearch &&
                    lastFiveSearch.map((it: string) => {
                        return (
                            <option key={it} value={it}>
                                {it}
                            </option>
                        );
                    })}
            </datalist>
            <SearchIcon />
        </FormControl>
    );
};
