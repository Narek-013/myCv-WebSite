import { createSlice } from "@reduxjs/toolkit";

const myCvSlices = createSlice({
  name: "myCv",
  initialState: {
    myCv: [],
    aboutScroll: 0,
    contactScroll: 0,
    projectScroll: 0,
    
  },
  reducers: {
    getAboutScroll(state, { payload }) {
      state.aboutScroll = payload;
    },
    getContactScroll(state, { payload }) {
      state.contactScroll = payload;
    },
    getProjectScroll(state, { payload }) {
      state.projectScroll = payload;
    }
  },
  extraReducers: (builder) => {},
});


export const MyCvslices = myCvSlices.reducer;
export const selectMyCv = state => state.myCv;
export const { getAboutScroll, getContactScroll ,getProjectScroll} = myCvSlices.actions;