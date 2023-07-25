import { createElement } from "react";
function App() {
  const todos = ["todo1", "todo2", "todo3"];

  return (
    <main id="main" className="test">
      <h1>prototurk.com</h1>
      {
        todos.map((todo, index) => (
          <li key={index} tabIndex={3}>{todo} </li>
        ))
      }
      <label htmlFor="search" tabIndex={2} onClick={() => (alert("merhaba"))}>Arama</label>
      <input type="text" id="search" tabIndex={1} />
    </main>
  );
}

export default App;
