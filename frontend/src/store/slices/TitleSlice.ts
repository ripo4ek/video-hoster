import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../actions/api";
import {ITitleBase} from '../../Interfaceses/ITitleBase'
import { store } from "../store";
import { stat } from "fs";

interface TitleBaseSliceState{
  titleBases: Array<ITitleBase>

}

const initialState: Array<ITitleBase> = [];

export const titleSlice = createSlice({
  name: "titleBases",
  initialState,
  reducers: {
    titlesRecevied: (titles: Array<ITitleBase>, action) => {
      titles = action.payload;
      console.log("WORKED");
    },
  },
});

export default titleSlice.reducer;
export const { titlesRecevied } = titleSlice.actions;

export const loadTitleBases = () => {
  return apiCallBegan({
    url: "/titleBases",
    onSuccess: titleSlice.actions.titlesRecevied.type,
  })
};
