import { configureStore } from "@reduxjs/toolkit";
import onlinesshopReducer from "./onlinesshopSlice";

export const store = configureStore({
  reducer: {
    onlinesshop: onlinesshopReducer,
  },
});
