import React, { useState } from "react";
import Header from "./components/Layouts/Header";
import "./reset.css";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Carts/Cart";
import CartProvider from "./store/CartProvider";

function App() {
    const [ModalIsShow, setModalIsShow] = useState(false);

    const showCartHandler = () => {
        setModalIsShow(!ModalIsShow);
    };

    return (
        <CartProvider>
            {ModalIsShow && <Cart onClose={showCartHandler} />}
            <Header onShowModal={showCartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
