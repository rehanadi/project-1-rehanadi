import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoansState, MyLoan } from '../types/loan.types';

const initialState: LoansState = {
  myLoans: [],
};

const loansSlice = createSlice({
  name: 'loans',
  initialState,
  reducers: {
    setMyLoans: (state, action: PayloadAction<MyLoan[]>) => {
      state.myLoans = action.payload;
    },
    clearMyLoans: (state) => {
      state.myLoans = [];
    },
  },
});

export const { setMyLoans, clearMyLoans } = loansSlice.actions;
export default loansSlice.reducer;
