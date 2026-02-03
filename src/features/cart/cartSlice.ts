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
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(i => i.id !== action.payload);
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
} = cartSlice.actions;

export default cartSlice.reducer;