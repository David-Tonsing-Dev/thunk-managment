import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllPost } from "./store/slices/homeSlice";
import { setUserName } from "./store/slices/userSlice";
import Header from "./components/header/Header";
import WalletCard from "./components/wallet/WalletCard";

import "./app.css";

const App = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const { postData } = useSelector((state) => ({ ...state.homeSlice }));

  const postFetchHandler = () => {
    dispatch(getAllPost({}));
  };

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const userNameHandler = () => {
    if (inputValue) {
      dispatch(setUserName(inputValue));
    }
  };

  return (
    <>
      <Header />
      <div style={{ marginTop: "9em" }}>
        <div style={{ textAlign: "center" }}>
          <input type="text" value={inputValue} onChange={inputHandler} />
          <button
            onClick={userNameHandler}
            style={{ fontWeight: "700", margin: "0.3rem", cursor: "pointer" }}
          >
            Change title
          </button>
        </div>
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <h2>List of Posts</h2>
          <br />
          <button
            onClick={postFetchHandler}
            style={{
              fontWeight: "700",
              marginLeft: "0.3rem",
              cursor: "pointer",
            }}
          >
            Click to fetch all post
          </button>
        </div>
        <br />
        <br />
        <div className="post-list-wrapper">
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {postData.map((item) => (
              <li
                key={item.id}
                style={{
                  border: "1px solid grey",
                  padding: "0.8rem",
                  width: "400px",
                  height: "250px",
                  textAlign: "center",
                }}
              >
                <img
                  src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
                  alt="logo"
                />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <WalletCard />
        </div>
      </div>
    </>
  );
};

export default App;
