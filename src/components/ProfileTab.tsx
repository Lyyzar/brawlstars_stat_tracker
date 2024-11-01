import { ProfileTabProps } from "../interfaces";

const ProfileTab: React.FC<ProfileTabProps> = ({ player }) => {
  const value = Math.floor(Math.random() * 8) + 1;

  const imageSource = `/assets/banners/banner_bp_${value}.png`;
  const iconSource = `https://brawlace.com/assets/images/brawlstars/icons-players/${player.icon.id}.png`;

  return (
    <div
      style={{
        backgroundImage: `url('${imageSource}')`,
        position: "relative",
      }}
      className="bg-cover bg-center mx-auto w-full h-[300px] text-white text-outline-black font-lilita rounded"
    >
      <div className="absolute inset-0 bg-black opacity-40 z-0 rounded"></div>
      <div className="relative">
        <div
          className="flex flex-row mx-4 pl-10 mt-2 text-3xl text-left items-center"
          style={{ color: `#${player.nameColor.slice(-6)}` }}
        >
          <img className="w-16 h-16 mr-2" src={iconSource} alt="icon" />
          {player.name.toUpperCase()}
        </div>
        <div className="flex flex-row justify-evenly">
          <div
            id="trophies"
            className="flex flex-col justify-center mt-2 w-[200px]"
          >
            <div className="mx-auto text-center">
              <div id="trophies-png">
                <img
                  className="w-9 h-7 mt-2 mx-5"
                  src="/assets/trophy.png"
                  alt="trophy"
                />
                <div className="text-lg">TROPHIES</div>
              </div>
              <div className="text-md text-gray-400">CURRENT</div>
              <div className="flex items-center bg-blue-800 w-[fit-content] px-2 py-1 rounded">
                <img
                  className="w-5 h-4"
                  src="/assets/trophy.png"
                  alt="trophy1"
                />
                <div className="ml-2">{player.trophies}</div>
              </div>
              <div className="text-md text-gray-400">HIGHEST</div>
              <div className="flex items-center bg-blue-800 w-[fit-content] px-2 py-1 rounded">
                <img
                  className="w-5 h-4"
                  src="/assets/trophy.png"
                  alt="trophy2"
                />
                <div className="ml-2">{player.highestTrophies}</div>
              </div>
            </div>
          </div>
          <div
            id="victories"
            className="flex flex-col mx-auto text-center mt-2 w-[200px]"
          >
            <div id="text-3vs3" className="flex flex-col items-center">
              <div className="text-md text-gray-400">3 VS 3 VICTORIES</div>
              <div
                id="3vs3"
                className="flex items-center bg-blue-800 w-[fit-content] px-2 py-1 rounded"
              >
                <img
                  className="w-5 h-4"
                  src="/assets/3vs3victories.png"
                  alt="3vs3"
                />
                <div className="ml-2">{player["3vs3Victories"]}</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-md text-gray-400">SOLO VICTORIES</div>
              <div className="flex items-center bg-blue-800 w-[fit-content] px-2 py-1 rounded">
                <img
                  className="w-5 h-4"
                  src="/assets/solo_showdown.png"
                  alt="trophy3"
                />
                <div className="ml-2">{player.soloVictories}</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-md text-gray-400">DUO VICTORIES</div>
              <div className="flex items-center bg-blue-800 w-[fit-content] px-2 py-1 rounded">
                <img
                  className="w-5 h-4"
                  src="/assets/duo_showdown.png"
                  alt="trophy4"
                />
                <div className="ml-2">{player.duoVictories}</div>
              </div>
            </div>
          </div>
          <div
            id="club"
            className="flex flex-col justify-center mt-2 w-[200px]"
          >
            <div className="mx-auto text-center">
              <div className="text-lg">CLUB</div>
              <div className="flex items-center bg-blue-800 w-[fit-content] px-2 py-1 rounded">
                <img
                  className="w-5 h-5"
                  src="/assets/icon_club_badge_7.png"
                  alt="trophy5"
                />
                <div className="ml-2">{player.club.name}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
