import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


type CartItem = {
  id: number;
  title: string;
  price: number;
  images: string[];
  quantity: number;
  selected:boolean;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existing = state.items.find(i => i.id === action.payload.id);

      if (existing) {
        existing.quantity += 1;
        existing.selected = true;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          selected: true,
        });
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },

    removeSelectedItems: (state) => {
      state.items = state.items.filter(item => !item.selected);
    },

    clearCart: (state) => {
      state.items = [];
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (!item) return;
      if (action.payload.quantity < 1) return;

      item.quantity = action.payload.quantity;
    },

    toggleSelect: (state, action: PayloadAction<number>) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.selected = !item.selected;
    },
  },
});


export const {
  addToCart,
  removeFromCart,
  clearCart,
  updateQuantity,
  toggleSelect,
  removeSelectedItems,
} = cartSlice.actions;

export default cartSlice.reducer;