import React from "react";
import { CalculatorRightSideProps } from "../interfaces";

const CalculatorRightSide: React.FC<CalculatorRightSideProps> = ({
  iconNumbers,
  isToggled,
  setIsToggled,
  requiredCoins,
  setRequiredCoins,
  requiredPowerPoints,
  handleMaxOut,
}) => {
  const gearImage = (
    <img
      className="w-10 h-10 m-2 hover:opacity-50"
      src="/assets/gear.png"
      alt="gears"
    />
  );

  const handleToggle = () => {
    console.log(isToggled);
    setIsToggled(!isToggled);
    console.log(isToggled);
    if (!isToggled) {
      console.log(isToggled);
      setRequiredCoins(requiredCoins + 5000);
    } else {
      setRequiredCoins(requiredCoins - 5000);
    }
  };

  return (
    <div className="flex flex-col">
      <div id="icons" className="flex flex-row mb-4">
        {iconNumbers.starPowers > 0 && (
          <img
            className="w-10 h-10 m-2  hover:opacity-50"
            src="/assets/star_power.webp"
            alt="star_power"
          />
        )}
        {iconNumbers.gadgets > 0 && (
          <img
            className="w-10 h-10 m-2  hover:opacity-50"
            src="/assets/gadget.webp"
            alt="gadget"
          />
        )}
        {iconNumbers.gears > 0 && iconNumbers.gears === 1 ? (
          <div>{gearImage}</div>
        ) : iconNumbers.gears === 2 ? (
          <>
            <div>{gearImage}</div>
            <div>{gearImage}</div>
          </>
        ) : null}
      </div>
      <div id="Hypercharge toggle">
        <label className="inline-flex items-center cursor-pointer">
          <input
            checked={isToggled}
            onChange={handleToggle}
            type="checkbox"
            value=""
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">
            Hypercharge
          </span>
        </label>
      </div>
      <div className="text-xl text-white">
        <div className="flex items-center mb-2">
          <p>
            Required coins: {Intl.NumberFormat("de-De").format(requiredCoins)}
          </p>
          <img className="w-8 h-7" src="/assets/coin_icon.png" alt="coin1" />
        </div>
        <div className="flex items-center mb-2">
          <p>
            Required power points:{" "}
            {Intl.NumberFormat("de-De").format(requiredPowerPoints)}
          </p>
          <img
            className="w-16 h-16"
            src="/assets/power_points_icon.png"
            alt="coin2"
          />
        </div>
      </div>
      <button
        onClick={() => handleMaxOut()}
        className="bg-blue-600 hover:bg-blue-700 max-h-14 text-white py-2 px-4 ml-4 rounded-full"
      >
        Max out
      </button>
    </div>
  );
};

export default CalculatorRightSide;
