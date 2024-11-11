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
      const game = state.items.find((g) => g.id === action.payload.id);

      if (!game) {
        state.items.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((game) => game.id !== action.payload);
    },
  },
});

export const { add, remove, open, close } = cartSlice.actions;
export default cartSlice.reducer;
