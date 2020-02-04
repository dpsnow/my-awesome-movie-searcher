import React from 'react';
import { FormControl, Select, MenuItem, TextField } from '@material-ui/core';
import { Search as SearchIcon, LensOutlined } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { genresSelector } from './selectors';

export const SearchPanel = () => {
    const genres = useSelector(genresSelector);

    return (
        <FormControl fullWidth size={'small'} style={{ display: 'flex', flexDirection: 'row' }}>
            {/* фильтры */}
            <Select id='select' value={'all'}>
                <MenuItem value={'all'}>All</MenuItem>
                {genres.length !== 0 &&
                    genres.map((it: any) => {
                        return (
                            <MenuItem key={it} value={it}>
                                {it}
                            </MenuItem>
                        );
                    })}
            </Select>
            {/* поиск по тексту */}
            <SearchIcon />
            <TextField id='outlined-basic' label='Search…' variant='outlined' size='small' />
        </FormControl>
    );
};
