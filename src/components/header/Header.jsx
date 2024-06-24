import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { userName } = useSelector((state) => ({ ...state.user }));
  return (
    <div
      style={{
        background: "darkgray",
        position: "fixed",
        top: "0",
        width: "100%",
      }}
    >
      <h1
        style={{
          padding: "1rem",
          margin: "0.8em 0",
          color: "tael",
          textAlign: "center",
        }}
      >
        {userName}
      </h1>
    </div>
  );
};

export default Header;
