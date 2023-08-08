import React, { useState } from "react";

export default function App() {
  let [c, sc] = useState(0);
  return (
    <div>
      hello lll
      <p>{c}</p>
      <button onClick={() => sc(c + 1)}>+1</button>
      <button onClick={() => sc(c - 1)}>-1</button>
    </div>
  );
}
