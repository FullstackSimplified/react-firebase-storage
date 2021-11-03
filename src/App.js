import { useState } from "react";

function App() {
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
  };

  return (
    <div className="App">
      <form onSubmit={formHandler}>
        <input type="file" className="input" />
        <button type="submit">Upload</button>
      </form>
      <hr />
    </div>
  );
}

export default App;
