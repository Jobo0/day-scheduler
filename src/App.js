import React from "react";
import Header from "./components/Layout/Header";
import Tasks from "./components/Tasks/Tasks";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Tasks />
      </main>
    </React.Fragment>
  );
}

export default App;
