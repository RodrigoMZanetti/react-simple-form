import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState({ name: "", email: "" });

  const nameRef = useRef(null);
  const emailRef = useRef(null);

  function handleChange(e) {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setInput({ name: "", email: "" });
  }

  function handleFocus() {
    nameRef.current.focus();
  }

  function handleReset() {
    setInput({ name: "", email: "" });
  }

  return (
    <div className="app">
      <div className="container">
        <h1>Simple Form</h1>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={input.name}
            onChange={handleChange}
            placeholder="Your Name"
            type="text"
            ref={nameRef}
            required
          ></input>
          <input
            name="email"
            value={input.email}
            onChange={handleChange}
            placeholder="Your Email"
            type="text"
            ref={emailRef}
            required
          ></input>

          <div className="buttons">
            <button onClick={handleFocus} className="buttons" type="button">
              Focus
            </button>
            <button type="submit">Submit</button>
            <button onClick={handleReset} className="buttons">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
