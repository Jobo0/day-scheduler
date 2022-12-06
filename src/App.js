import React, { useState, useEffect, useContext } from "react";
import Header from "./components/Layout/Header";
import Tasks from "./components/Tasks/Tasks";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import HeaderAlt from "./components/Layout/HeaderAlt";
import TimerDisplay from "./components/Timer/TimerDisplay";
import CartContext from "./store/cart-context";

function TasksPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const cartContext = useContext(CartContext);
  function cartButtonHandler(event) {
    setModalVisible(true);
  }

  function cartExitHandler(event) {
    setModalVisible(false);
  }

  useEffect(()=> {
    const storedDay = localStorage.getItem("cartDate");
    const currentDay = JSON.stringify(new Date().getDay());
    if (storedDay !== currentDay) {
      cartContext.clearCart();
    };
  });

  return (
    <React.Fragment>
      {modalVisible ? (
        <Cart onModalExit={cartExitHandler} />
      ) : (
        <React.Fragment />
      )}
      <Header onButtonClick={cartButtonHandler} />
      <main>
        <Tasks />
      </main>
    </React.Fragment>
  );
}

function StartPage() {
  const navigate = useNavigate();

  function returnRedirectHandler() {
    navigate("/");
  }

  return (
    <React.Fragment>
      <HeaderAlt onButtonClick={returnRedirectHandler} />
      <main>
        <TimerDisplay></TimerDisplay>
      </main>
    </React.Fragment>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<TasksPage />}></Route>
          <Route path="/start" element={<StartPage />}>
            {" "}
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
