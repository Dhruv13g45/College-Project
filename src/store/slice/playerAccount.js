import { createSlice } from "@reduxjs/toolkit";

const playerAccount = createSlice(
    {
        name: "playerAccount",
        initialState: false,
        reducers:
        {
            changePlayerLogin: (state, action) => {
                switch (action.payload) {
                    case 'TOGGLE': return !state;
                    default: return state;
                }
            },
            changePlayerRegistor: (state, action) => {
                switch (action.payload) {
                    case 'TOGGLE': return !state;
                    default: return state;
                }
            },
        }
    }
)

export const { changePlayerLogin, changePlayerRegistor } = playerAccount.actions;

export default playerAccount.reducer;