import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="cryptoCoin">
      <img src={image} alt={`${name}`} className="coinLogo" />
      <div className="coinNameWrap">
        <h1 className="coinName">{name}</h1>
        <p className="coinSymbol">{symbol}</p>
      </div>
      <p className="coinPrice">${price.toLocaleString()}</p>
      <p className="coinMarketcap">Market Cap: ${marketcap.toLocaleString()}</p>
      <p className="coinVolume">Volume (24H): ${volume.toLocaleString()}</p>
      {priceChange < 0 ? (
        <div className="priceContainerDOWN">
          <i className="fas fa-angle-down fa-2x"></i>
          <p className="priceChange">{priceChange.toFixed(2)}%</p>
        </div>
      ) : (
        <div className="priceContainerUP">
          <i className="fas fa-angle-up fa-2x"></i>
          <p className="priceChange">{priceChange.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default Coin;
