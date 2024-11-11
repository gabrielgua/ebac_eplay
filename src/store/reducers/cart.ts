import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../../models/Game";

type CartSate = {
  items: Game[];
};

const initialState: CartSate = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      state.items.push(action.payload);
    },
  },
});

export const { add } = cartSlice.actions;
export default cartSlice.reducer;
