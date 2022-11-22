import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Tasks from "./components/Tasks/Tasks";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  
  function cartButtonHandler(event) {
    setModalVisible(true);
  }

  function cartExitHandler(event) {
    setModalVisible(false);
  }

  return (
    <CartProvider>
      {modalVisible ? <Cart onModalExit={cartExitHandler}/> : <React.Fragment/>}
      <Header onButtonClick={cartButtonHandler}/>
      <main>
        <Tasks />
      </main>
    </CartProvider>
  );
}

export default App;
