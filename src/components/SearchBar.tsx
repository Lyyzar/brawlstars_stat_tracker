import { SetStateAction, useState } from "react";
import {
  brawlers,
  BrawlerStat,
  emptyBrawlerStat,
  emptyIconNumbers,
  SearchBarProps,
} from "../interfaces";
import Card from "./Card";
import CalculatorRightSide from "./CalculatorRightSide";

const SearchBar: React.FC<SearchBarProps> = ({ brawlerStatList }) => {
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [upgradeBrawler, setUpgradeBrawler] =
    useState<BrawlerStat>(emptyBrawlerStat);
  const [requiredCoins, setRequiredCoins] = useState<number>(0);
  const [requiredPowerPoints, setRequiredPowerPoints] = useState<number>(0);
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [iconNumbers, setIconNumbers] = useState(emptyIconNumbers);

  const filteredValues = brawlers.filter((value) =>
    value.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSelectOption = (option: SetStateAction<string>) => {
    setInputValue(option);
    setShowSuggestions(false);
  };

  const handleSearch = () => {
    if (inputValue) {
      const foundBrawler = brawlerStatList.find(
        (brawlerStat) =>
          brawlerStat.name.toLowerCase() === inputValue.toLowerCase()
      );

      if (foundBrawler) {
        setUpgradeBrawler(foundBrawler);
      }
    }
  };

  const upgradeCoinPrices = [
    0, 20, 55, 130, 270, 560, 1040, 1840, 3090, 4965, 7765,
  ];

  const upgradePowerPoints = [
    0, 20, 50, 100, 180, 310, 520, 860, 1410, 2300, 3740,
  ];

  //const upgradeCoinLevelPrices = [
  //  0, 20, 35, 75, 140, 290, 480, 800, 1250, 1875, 2800,
  // ];

  //const upgradeLevelPowerPoints = [
  //  0, 20, 30, 50, 80, 130, 210, 340, 550, 890, 1440,
  //];

  const handleMaxOut = () => {
    let reqCoins = 0;
    let reqPowerPoints = 0;
    let starPowers = 0;
    let gadgets = 0;
    let gears = 0;

    switch (upgradeBrawler.power) {
      case 1:
        reqCoins += upgradeCoinPrices[10] - upgradeCoinPrices[0];
        reqPowerPoints += upgradePowerPoints[10] - upgradePowerPoints[0];
        break;

      case 2:
        reqCoins += upgradeCoinPrices[10] - upgradeCoinPrices[1];
        reqPowerPoints += upgradePowerPoints[10] - upgradePowerPoints[1];
        break;

      case 3:
        reqCoins += upgradeCoinPrices[10] - upgradeCoinPrices[2];
        reqPowerPoints += upgradePowerPoints[10] - upgradePowerPoints[2];
        break;

      case 4:
        reqCoins += upgradeCoinPrices[10] - upgradeCoinPrices[3];
        reqPowerPoints += upgradePowerPoints[10] - upgradePowerPoints[3];
        break;

      case 5:
        reqCoins += upgradeCoinPrices[10] - upgradeCoinPrices[4];
        reqPowerPoints += upgradePowerPoints[10] - upgradePowerPoints[4];
        break;

      case 6:
        reqCoins += upgradeCoinPrices[10] - upgradeCoinPrices[5];
        reqPowerPoints += upgradePowerPoints[10] - upgradePowerPoints[5];
        break;

      case 7:
        reqCoins += upgradeCoinPrices[10] - upgradeCoinPrices[6];
        reqPowerPoints += upgradePowerPoints[10] - upgradePowerPoints[6];
        break;

      case 8:
        reqCoins += upgradeCoinPrices[10] - upgradeCoinPrices[7];
        reqPowerPoints += upgradePowerPoints[10] - upgradePowerPoints[7];
        break;

      case 9:
        reqCoins += upgradeCoinPrices[10] - upgradeCoinPrices[8];
        reqPowerPoints += upgradePowerPoints[10] - upgradePowerPoints[8];
        break;

      case 10:
        reqCoins += upgradeCoinPrices[10] - upgradeCoinPrices[9];
        reqPowerPoints += upgradePowerPoints[10] - upgradePowerPoints[9];
        break;
      default:
        break;
    }

    switch (upgradeBrawler.starPowers.length) {
      case 0:
        reqCoins += 2000;
        starPowers = 1;
        break;

      default:
        break;
    }

    switch (upgradeBrawler.gadgets.length) {
      case 0:
        reqCoins += 1000;
        gadgets = 1;
        break;

      default:
        break;
    }

    switch (upgradeBrawler.gears.length) {
      case 0:
        reqCoins += 1000;
        gears = 2;
        break;

      case 1:
        reqCoins += 2000;
        gears = 1;
        break;
      default:
        break;
    }

    setIconNumbers({
      starPowers,
      gadgets,
      gears,
    });
    setRequiredCoins(reqCoins);
    setRequiredPowerPoints(reqPowerPoints);

    if (
      upgradeBrawler.power === 11 &&
      upgradeBrawler.starPowers.length > 0 &&
      upgradeBrawler.gadgets.length > 0 &&
      upgradeBrawler.gears.length === 2
    ) {
      alert("Your brawler is already maxed out!");
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-row m-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setUpgradeBrawler(emptyBrawlerStat);
            setIconNumbers(emptyIconNumbers);
            setRequiredCoins(0);
            setIsToggled(false);
            setRequiredPowerPoints(0);
            setShowSuggestions(true);
          }}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded-lg"
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 ml-4 rounded-full"
          onClick={handleSearch}
        >
          Upgrade
        </button>
      </div>

      {showSuggestions && inputValue && filteredValues.length > 0 && (
        <ul className="border border-gray-300 max-h-60 overflow-y-scroll rounded-lg mt-2 w-full">
          {filteredValues.map((value, index) => (
            <li
              key={index}
              onClick={() => handleSelectOption(value)}
              className="p-2 cursor-pointer text-white hover:bg-gray-200 hover:text-black"
            >
              {value}
            </li>
          ))}
        </ul>
      )}
      <div>
        {upgradeBrawler.trophies >= 0 ? (
          <div className="flex flex-row w-full bg-gray-600 bg-opacity-50 rounded-md m-4 items-center">
            <div className="max-w-[600px]">
              <Card
                rank={upgradeBrawler.rank}
                power={upgradeBrawler.power}
                gears={upgradeBrawler.gears}
                gadgets={upgradeBrawler.gadgets}
                highestTrophies={upgradeBrawler.highestTrophies}
                trophies={upgradeBrawler.trophies}
                id={upgradeBrawler.id}
                starPowers={upgradeBrawler.starPowers}
                name={upgradeBrawler.name}
              />
            </div>
            <CalculatorRightSide
              iconNumbers={iconNumbers}
              isToggled={isToggled}
              setIsToggled={setIsToggled}
              requiredCoins={requiredCoins}
              setRequiredCoins={setRequiredCoins}
              requiredPowerPoints={requiredPowerPoints}
              handleMaxOut={handleMaxOut}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
