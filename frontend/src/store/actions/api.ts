import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction<object>("api/CallBegan");
export const apiCallSuccess = createAction<object>("api/CallSuccess");
export const apiCallFailed = createAction<object>("api/CallFailed");
