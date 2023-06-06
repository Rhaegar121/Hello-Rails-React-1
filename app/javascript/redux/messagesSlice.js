import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMessage = createAsyncThunk('fetchMessage', async () => {
  const response = await fetch('/api/random_greeting');
  const data = await response.json();
  return data;
});

const messagesSlice = createSlice({
  name: 'message',
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessage.fulfilled, (state, action) => action.payload);
  },
});

export default messagesSlice.reducer;
