import { useState } from "react";

function Input({ type = "type", action, style }) {
  const [value, setValue] = useState("");
  return (
    <input
      type={type}
      value={value}
      onCgange={(e) => {
        setValue(e.target.value);
        action(value);
      }}
      style={{ display: "block", padding: "20px", backgroundColor: "maroon" }}
    />
  );
}

export default Input;
