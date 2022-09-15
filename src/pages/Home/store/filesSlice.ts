import { createSlice } from '@reduxjs/toolkit';
import { File } from 'types';

const initialState: File[] = [];

const { actions, reducer } = createSlice({
    name: 'files',
    initialState,
    reducers: {
        clearFiles: () => initialState,
        setFiles: (state, action) => {
            return action.payload;
        },
        addFiles: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { clearFiles, setFiles, addFiles } = actions;

export default reducer;
