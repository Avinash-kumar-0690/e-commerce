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

// initial State for Cart 
const initialState: CartState = {
  items: [],
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add to cart Reducer 
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existing = state.items.find(i => i.id === action.payload.id); //find exsiting item

      // increase quantity if already available 
      if (existing) {
        existing.quantity += 1;
        existing.selected = true;
        // add if it not exist in cart 
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          selected: true,
        });
      }
    },

    // remove  item from cart 
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },

    // remove unselect the item in cart
    removeSelectedItems: (state) => {
      state.items = state.items.filter(item => !item.selected);
    },

    // clear Cart 
    clearCart: (state) => {
      state.items = [];
    },

    // increase quantity of product in cart 
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