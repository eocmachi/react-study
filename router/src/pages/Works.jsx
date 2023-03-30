import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Works() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    navigate(`/works/${text}`);
  };
  return (
    <div>
      Works
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="works id: "
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
