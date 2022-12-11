import { createSlice } from '@reduxjs/toolkit';

export interface User {
  email: string,
  id: string
}

interface UserSliceState {
  user: User | null
  error: boolean
  loading: boolean
  emailSent: boolean
}

const initialState: UserSliceState = {
  user: null,
  error: false,
  loading: false,
  emailSent: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.user = action.payload;
    },
    loadUserError: (state) => {
      state.loading = false;
      state.error = true;
    },
    logOutUser: (state) => {
      state.user = null;
    },
    sendEmailRequest: (state) => {
      state.loading = true;
    },
    sendEmailError: (state) => {
      state.loading = false;
      state.error = true;
    },
    sendEmailSuccess: (state) => {
      state.loading = false;
      state.error = false;
      state.emailSent = true;
    },

  },
});

// Action creators are generated for each case reducer function
export const {
  loadUserError, loadUserRequest, loadUserSuccess, logOutUser,
  sendEmailError, sendEmailRequest, sendEmailSuccess,
} = userSlice.actions;

export default userSlice.reducer;
