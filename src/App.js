import React from "react";
import Header from "./components/Layout/Header";
import Tasks from "./components/Tasks/Tasks";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <React.Fragment>
      <Cart/>
      <Header />
      <main>
        <Tasks />
      </main>
    </React.Fragment>
  );
}

export default App;
