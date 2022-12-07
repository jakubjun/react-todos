import { createSlice } from '@reduxjs/toolkit';

export interface User {
  email: string,
  id: string
}

interface UserSliceState {
  user: User | null
  error: boolean
  loading: boolean
}

const initialState: UserSliceState = {
  user: null,
  error: false,
  loading: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUser, setLoading, setError,
} = userSlice.actions;

export default userSlice.reducer;
