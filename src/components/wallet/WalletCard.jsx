import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
// import Ethereum from "./eth-new.png";
import { ethers } from "ethers";

const WalletCard = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  const connectwalletHandler = () => {
    if (window.ethereum) {
      window.ethereum.send("eth_requestAccounts", []).then((res) => {
        accountChangedHandler(res[0]);
      });
    } else {
      setErrorMessage("Please Install Metamask!!!");
    }
  };

  const accountChangedHandler = async (newAccount) => {
    setDefaultAccount(newAccount);
    await getuserBalance(newAccount);
  };

  const getuserBalance = async (address) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        setUserBalance(parseFloat(ethers.formatEther(balance)).toFixed(4));
      });
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        console.log("Changed chain");
        connectwalletHandler();
      });
      window.ethereum.on("accountsChanged", () => {
        console.log("Changed account");
        connectwalletHandler();
      });
    }
  }, []);

  return (
    <div className="WalletCard">
      {/* <img src={Ethereum} className="App-logo" alt="logo" /> */}
      <h3 className="h4">Welcome to React DApp Metamask</h3>
      <Button
        style={{ background: defaultAccount ? "#A5CC82" : "white" }}
        onClick={connectwalletHandler}
      >
        {defaultAccount ? "Connected!!" : "Connect"}
      </Button>
      <div className="displayAccount">
        <h4 className="walletAddress">Address:{defaultAccount}</h4>
        <div className="balanceDisplay">
          <h3>Wallet Amount: {userBalance}</h3>
        </div>
      </div>
      {errorMessage}
    </div>
  );
};
export default WalletCard;
