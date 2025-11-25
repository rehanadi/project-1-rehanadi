import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UsersState, GetUsersResponse } from '../types/user.types';

const initialState: UsersState = {
  users: [],
  pagination: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<GetUsersResponse['data']>) => {
      state.users = action.payload.users;
      state.pagination = action.payload.pagination;
    },
    clearUsers: (state) => {
      state.users = [];
      state.pagination = null;
    },
  },
});

export const { setUsers, clearUsers } = usersSlice.actions;
export default usersSlice.reducer;
