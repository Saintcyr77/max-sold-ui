import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  status: "",
  isSFsync: "",
  reasonToSell: "",
  territoryId: 0,
  countryId: 0,
  mxseSource: "",
  reasonToSellOther: "",
  countryName: "",
  territoryName: "",
  reasonDropDown: "",
  reason: "",
  soldBy: ""
};

const registrationSlice = createSlice({
  name: "registration",
  initialState: initialState,
  reducers: {
    reduxwalanaam: (state, action) => {
      state.registrationApi = action.payload;
    }
  }
});
console.log(registrationSlice.actions);
export const { reduxwalanaam } = registrationSlice.actions;

export default registrationSlice;
