import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoansState, GetMyLoansResponse } from '../types/loan.types';

const initialState: LoansState = {
  myLoans: [],
  pagination: null,
};

const loansSlice = createSlice({
  name: 'loans',
  initialState,
  reducers: {
    setMyLoans: (state, action: PayloadAction<GetMyLoansResponse['data']>) => {
      state.myLoans = action.payload.loans;
      state.pagination = action.payload.pagination;
    },
    appendMyLoans: (
      state,
      action: PayloadAction<GetMyLoansResponse['data']>
    ) => {
      state.myLoans = [...state.myLoans, ...action.payload.loans];
      state.pagination = action.payload.pagination;
    },
    clearMyLoans: (state) => {
      state.myLoans = [];
      state.pagination = null;
    },
  },
});

export const { setMyLoans, appendMyLoans, clearMyLoans } = loansSlice.actions;
export default loansSlice.reducer;
