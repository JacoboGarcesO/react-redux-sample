import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { authenticate } from "../thunks/auth.thunk";

export interface CounterState {
  value: number;
  user: string;
}

const initialState: CounterState = {
  value: 0,
  user: ''
}



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authenticate.fulfilled, (state, action) => {
      state.user = action.payload;
    })
  }
})

export const selecCount = (state: RootState) => state.counter.value;

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;