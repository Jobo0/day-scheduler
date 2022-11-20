import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Tasks from "./components/Tasks/Tasks";
import Cart from "./components/Cart/Cart";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  
  function cartExitHandler(event) {

  }

  return (
    <React.Fragment>
      {modalVisible ? <Cart onModalExit={cartExitHandler}/> : <React.Fragment/>}
      <Header />
      <main>
        <Tasks />
      </main>
    </React.Fragment>
  );
}

export default App;
