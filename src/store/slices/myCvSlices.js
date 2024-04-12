import { createSlice } from "@reduxjs/toolkit";

const myCvSlices = createSlice({
  name: "myCv",
  initialState: {
    myCv: [],
    aboutScroll: 0,
    contactScroll: 0,
    projectScroll: 0,
    light: false,
    contactBtn: false,
    mailValue: "",
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
    },
    changeLight(state) {
      state.light = !state.light;
    },
    changeBtn(state,{payload}) {
      state.contactBtn = true;
      state.mailValue = payload
    },
    changeBtnErr(state) {
      state.contactBtn = false;
      state.mailValue = ""
    },
  },
  extraReducers: (builder) => {},
});


export const MyCvslices = myCvSlices.reducer;
export const selectMyCv = state => state.myCv;
export const {
  getAboutScroll,
  getContactScroll,
  getProjectScroll,
  changeLight,
  changeBtn,
  changeBtnErr,
} = myCvSlices.actions;