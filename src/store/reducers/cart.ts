import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../../models/Game";

type CartSate = {
  items: Game[];
  visible: boolean;
};

const initialState: CartSate = {
  items: [],
  visible: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    open: (state) => {
      state.visible = true;
    },
    close: (state) => {
      state.visible = false;
    },
    add: (state, action: PayloadAction<Game>) => {
      state.items.push(action.payload);
    },
  },
});

export const { add, open, close } = cartSlice.actions;
export default cartSlice.reducer;
