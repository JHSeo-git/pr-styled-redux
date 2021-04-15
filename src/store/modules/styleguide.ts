import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ViewState = {
  isView: boolean;
};

const initialState: ViewState = {
  isView: false,
};

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    open: (state) => {
      state.isView = true;
    },
    close: (state) => {
      state.isView = false;
    },
    manual: (state, action: PayloadAction<boolean>) => {
      state.isView = action.payload;
    },
  },
});

export const viewActions = viewSlice.actions;
export default viewSlice.reducer;
