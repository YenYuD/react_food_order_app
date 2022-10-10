import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const CartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updateTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(
            (element) => element.id === action.item.id
        );

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
            console.log(updatedItems);
        }

        return {
            items: updatedItems,
            totalAmount: updateTotalAmount,
        };
    }

    if (action.type === "REMOVE") {
        const existingCartItemIndex = state.items.findIndex(
            (element) => element.id === action.id
        );

        const existingCartItem = state.items[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        console.log(updatedTotalAmount);

        let updatedItems;

        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter((el) => el.id !== action.id);
        } else {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            totalAmount: updatedTotalAmount,
            items: updatedItems,
        };
    }
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        CartReducer,
        defaultCartState
    );

    const addItemHandler = (item) => {
        dispatchCartAction({ type: "ADD", item: item });
    };

    const removeItemHandler = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
