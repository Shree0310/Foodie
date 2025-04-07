import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload;
        },
        removeUser: (state, action) => {
            return null;
        },
        enableDemoMode: (state, action) => {
            // Create a demo user with limited permissions
            return {
                uid: "demo-user-id",
                email: "demo@example.com",
                displayName: "Demo User",
                isDemo: true // Flag to identify demo users
            };
        }
    },
});

export const { addUser, removeUser, enableDemoMode } = userSlice.actions;
export default userSlice.reducer;