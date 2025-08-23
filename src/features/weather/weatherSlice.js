import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city, { rejectWithValue }) => {
    try {
        const res = await axios.get(BASE_URL, {
            params: {
                q: city,
                units: 'metric',
                appid: API_KEY,
          },
        });
        return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data.message || "Failed to fetch weather");
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    loading: false,
      error: null,
      lastCity: null,
  },
    reducers: {
        clearWeather(state) {
            state.data = null;
            state.error = null;
            state.lastCity = null;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
          state.lastCity = action.payload.name;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
          state.error = action.payload ;
      });
  },
});

export const { clearWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
