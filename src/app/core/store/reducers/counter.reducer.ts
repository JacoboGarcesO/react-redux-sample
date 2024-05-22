import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CounterState {
  value: number;
  user: string;
}

const initialState: CounterState = {
  value: 0,
  user: ''
}

export const authenticate = createAsyncThunk(
  'counter/authenticate',
  async () => {
    // const response = await fetch('')
    // const result = await response.json();
    return 'kjashdhjkfasd';
  }
)

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