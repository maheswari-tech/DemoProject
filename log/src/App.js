import React, { useState } from "react";
import AuthPopup from "./components/AuthPopup";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Login/Signup</button>
      <AuthPopup isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default App;
