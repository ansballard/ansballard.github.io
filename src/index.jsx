import { h, Fragment, render } from "preact";
import { useState, useEffect } from "preact/hooks";

const App = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage("done!");
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  return <>
    <div>Testing</div>
    <div>{message || "loading..."}</div>
  </>;
}

render(<App />, document.getElementById("root"));
