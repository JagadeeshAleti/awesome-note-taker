import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { notes } from "../Data/Data";

export interface Note {
    id: number;
    title?: string;
    content: string;
    color?: string;
    image?: string;
    pinned: boolean;
}

export interface NotesState {
    notes: Note[];
}

const initialState: NotesState = {
    notes: [...notes],
};

export const notesManager = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<Note>) => {
            state.notes.push(action.payload);
        },

        deleteNote: (state, action: PayloadAction<number>) => {
            state.notes = state.notes.filter(
                (note) => note.id !== action.payload
            );
        },

        colorChange: (
            state,
            action: PayloadAction<{ id: number; color: string }>
        ) => {
            console.log("Inside color change");

            const note = state.notes.find(
                (note) => note.id === action.payload.id
            );
            if (note) {
                note.color = action.payload.color;
            }
        },

        togglePin: (
            state,
            action: PayloadAction<{ id: number; pinValue: boolean }>
        ) => {
            const note = state.notes.find(
                (note) => note.id === action.payload.id
            );
            if (note) {
                note.pinned = action.payload.pinValue;
            }
        },
    },
});

export const { addNote, deleteNote, togglePin, colorChange } =
    notesManager.actions;
