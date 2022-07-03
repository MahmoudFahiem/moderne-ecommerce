import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: {
    rtl: false,
    sidebarContentType: "navbar",
    isSwitchingDir: false,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSidebarRtl(state, { payload: rtlStatus }) {
      state.sidebar.rtl = rtlStatus;
    },
    setSidebarContent(state, { payload: sidebarContentType }) {
      state.sidebar.sidebarContentType = sidebarContentType;
    },
    showSidebar() {
      document.getElementById("sidebar").click();
    },
    setIsSwitchingDir(state, { payload: isSwitchingDir }) {
      state.isSwitchingDir = isSwitchingDir;
    },
  },
});

const showCart = () => (dispatch) => {
  dispatch(uiSlice.actions.setSidebarRtl(true));
  dispatch(uiSlice.actions.setSidebarContent("cart"));
  setTimeout(() => dispatch(uiSlice.actions.showSidebar()), 200);
};

const showNavbar = () => (dispatch) => {
  dispatch(uiSlice.actions.setSidebarRtl(false));
  dispatch(uiSlice.actions.setSidebarContent("navbar"));
  setTimeout(() => dispatch(uiSlice.actions.showSidebar()), 200);
};

export default uiSlice;
export const uiReducer = uiSlice.reducer;
export const uiActions = { ...uiSlice.actions, showNavbar, showCart };
