import { BrawlerStat } from "../interfaces";

const Card: React.FC<BrawlerStat> = ({
  gadgets,
  starPowers,
  rank,
  trophies,
  highestTrophies,
  power,
  gears,
  name,
}) => {
  const formattedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  const imageSource = `/assets/brawlers/Brawl_${formattedName
    .split(" ")
    .join("")}.png`;

  let value = 0;
  if (rank < 5) {
    value = 1;
  } else if (rank < 10) {
    value = 5;
  } else if (rank < 15) {
    value = 10;
  } else if (rank < 20) {
    value = 15;
  } else if (rank < 25) {
    value = 20;
  } else if (rank < 30) {
    value = 25;
  } else if (rank < 35) {
    value = 30;
  }

  const rankImageSource = `/assets/ranks/${value}.webp`;
  return (
    <div
      id="main"
      className="flex 2xl:min-w-[300px] max-w-[400px] sm:min-w-[200px] m-10 font-lilita bg-gray-600 border border-2 rounded-lg text-white transform hover:scale-105 transition-transform duration-300"
    >
      <div id="image" className=" h-20 sm:h-20 md:h-full w-auto">
        <img
          src={imageSource}
          className="h-full w-full rounded-l"
          alt="brawler image"
        />
      </div>
      <div className="w-full my-2">
        <div id="1st row" className="flex flex-row mb-2">
          <div className=" text-xl mx-2">{name.toUpperCase()}</div>
          <div className="mb-2 flex items-center justify-center w-8 h-8 bg-pink-500 border border-black border-1 shadow-lg rounded-full">
            <div className="flex items-center justify-center w-5 h-5 bg-purple-900 rounded-full">
              <span className="flex items-center justify-center text-white text-xs font-bold shadow-lg">
                {power}
              </span>
            </div>
          </div>
          <div id="gadgets" className="mx-1">
            {gadgets.length > 0 ? (
              <img
                className="w-10 h-10"
                src="/assets/gadget.webp"
                alt="star_power1"
              />
            ) : null}
          </div>
          <div id="star_power" className="mx-1">
            {starPowers.length > 0 ? (
              <img
                className="w-10 h-10"
                src="/assets/star_power.webp"
                alt="star_power2"
              />
            ) : null}
          </div>
        </div>

        <div id="rank" className="flex  mb-2">
          <img src={rankImageSource} alt="rank" className="w-6 h-6 mx-2" />
          <div>RANK: {rank}</div>
        </div>
        <div id="highest_trophies" className="flex flex-col mx-2 mb-2">
          <div className="flex flex-row">
            <img src="./assets/trophy.png" alt="trophy1" className="w-6 h-6" />
            <div className="font ml-2">HIGHEST TROPHIES</div>
          </div>
          <div>{highestTrophies}</div>
        </div>
        <div id="trophies" className="flex flex-col mx-2 mb-2">
          <div className="flex flex-row">
            <img src="./assets/trophy.png" alt="trophy2" className="w-6 h-6" />
            <div className="font ml-2">CURRENT TROPHIES</div>
          </div>
          <div>{trophies}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
