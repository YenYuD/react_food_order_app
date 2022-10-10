import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = cartCtx.totalAmount.toFixed(2);

    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const cartOrders = cartCtx.items.map((v, i) => {
        return (
            <CartItem
                key={v.id}
                name={v.name}
                amount={v.amount}
                price={v.price}
                onRemove={cartItemRemoveHandler.bind(null, v.id)}
                onAdd={cartItemAddHandler.bind(null, v)}
            />
        );
    });

    return (
        <>
            <Modal onClose={props.onClose}>
                <div>
                    <ul className={classes["cart-items"]}>{cartOrders}</ul>
                    <div>
                        <span>總價格</span>
                        <span>$NT{totalAmount}</span>
                    </div>
                    <div className={classes.actions}>
                        <button
                            className={classes["button--alt"]}
                            onClick={() => {
                                props.onClose();
                            }}
                        >
                            關閉
                        </button>
                        {hasItems && (
                            <button className={classes.button}>結帳</button>
                        )}
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Cart;
