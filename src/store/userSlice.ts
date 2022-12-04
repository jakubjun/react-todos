import { createSlice } from '@reduxjs/toolkit';

export interface User {
  email: string,
  id: string
}

interface UserSliceState {
  user: User | null
}

const initialState: UserSliceState = {
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

  },
});

// Action creators are generated for each case reducer function
export const {
  setUser,
} = userSlice.actions;

export default userSlice.reducer;
