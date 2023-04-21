import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  cartQuantity: 0,
  deliveryFee: 15,
  freeDeliveryFrom: 200,
  subtotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product;
      const cartItem = state.items.find(
        (item) => item.product.id === newProduct.id
      );
      if (cartItem) {
        cartItem.quantity += 1;
        state.cartQuantity += 1;
      } else {
        state.items.push({ product: newProduct, quantity: 1 });
        state.cartQuantity += 1;
      }
    },
    changeQuantity: (state, action) => {
      const { productId, amount } = action.payload;
      cartItem = state.items.find((item) => item.product.id === productId);
      if (cartItem) {
        cartItem.quantity += amount;
        state.cartQuantity += amount;
      }
      if (cartItem.quantity <= 0) {
        state.items = state.items.filter((item) => item !== cartItem);
      }
    },
  },
});

export const selectCartQuantity = (state) => {
  if (state.cart.items.length === 0) {
    return "";
  }

  return state.cart.items.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
};

export const selectSubtotal = (state) => {
  return state.cart.items.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
    0
  );
  // .toFixed(2);
};

const cartSelector = (state) => state.cart;

export const selectDeliveryPrice = createSelector(
  cartSelector,
  selectSubtotal,
  (cart, subtotal) =>
    subtotal > cart.freeDeliveryFrom || subtotal === 0 ? 0 : cart.deliveryFee
);

export const selectTotal = createSelector(
  selectSubtotal,
  selectDeliveryPrice,
  (subtotal, delivery) => subtotal + delivery
);
