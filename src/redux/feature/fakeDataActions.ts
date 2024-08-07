import { createAsyncThunk } from "@reduxjs/toolkit";

export const signinUser = createAsyncThunk(
  "car/signinUser",
  async (
    payload: {
      email: string;
      password: string;
      isLike: null | string[];
      name: string;
    },
    { rejectWithValue }
  ) => {
    try {
      return payload;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const signoutUser = createAsyncThunk(
  "car/signoutUser",
  async (payload, { rejectWithValue }) => {
    try {
      return null;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  "car/addToFavorites",
  async (payload: string, { rejectWithValue }) => {
    try {
      return payload;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const carFilterAction = createAsyncThunk(
  "car/carFilterAction",
  async (payload: {type: string[] | null; capacity: string[] | null}, { rejectWithValue }) => {
    try {
      return payload;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const carSearchAction = createAsyncThunk(
  "car/carsearchAction",
  async (payload: string, { rejectWithValue }) => {
    try {
      return payload;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
