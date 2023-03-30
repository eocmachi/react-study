import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://pbs.twimg.com/media/Etxj0gtWgAEOnJz?format=jpg&name=large"
          name="sonny"
          size={200}
        />
        <p>안녕하세요</p>
      </Navbar>
      <Navbar>
        <p>배가고파요</p>
      </Navbar>
      <Navbar>
        <Avatar
          image="https://pbs.twimg.com/media/Etxj0gtWgAEOnJz?format=jpg&name=large"
          name="sonny"
          size={200}
        />
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: "cadetblue" }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
    </div>
  );
}
