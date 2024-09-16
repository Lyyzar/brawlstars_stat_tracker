import { notification } from "antd";
import React, { useState } from "react";
import { getPlayerInfo } from "./api";
import { Player } from "./interfaces";
import Card from "./Card";
import SearchBar from "./SearchBar";

function Home() {
  const [activeTab, setActiveTab] = useState<string>("Profile");
  const [playerTag, setPlayerTag] = useState<string>("");
  const [showTabs, setShowTabs] = useState<boolean>(false);
  const [playerInfo, setPlayerInfo] = useState<Player>({
    club: { tag: "", name: "" },
    isQualifiedFromChampionshipChallenge: false,
    "3vs3Victories": 0,
    icon: { id: 0 },
    tag: "",
    name: "",
    trophies: 0,
    expLevel: 1,
    expPoints: 0,
    highestTrophies: 0,
    soloVictories: 0,
    duoVictories: 0,
    bestRoboRumbleTime: 0,
    bestTimeAsBigBrawler: 0,
    brawlers: [],
    nameColor: "#000000",
  });

  const my_Data = {
    name: playerInfo.name,
    tag: playerInfo.tag,
    club: playerInfo.club.name,
    highestTrophies: playerInfo.highestTrophies,
    trophies: playerInfo.trophies,
    "3vs3Victories": playerInfo["3vs3Victories"],
    icon: playerInfo.icon,
    soloVictories: playerInfo.soloVictories,
    duoVictories: playerInfo.duoVictories,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const playerInfo = await getPlayerInfo(playerTag);
      setPlayerInfo(playerInfo);
      notification.success({
        message: "Successfull query",
        description: "You are successfully queried your information!",
      });
      setShowTabs(true);
      setActiveTab("Profile");
    } catch (error) {
      console.log(error, "error");
      notification.error({
        message: "Error",
        description: "Your playertag is incorrect!",
      });
    }
  };

  const handleTabClick = (text: string) => {
    setActiveTab(text);
  };

  return (
    <div className="h-screen text-gray-800">
      {/* Header Section */}
      <header className="bg-white text-black">
        <nav className="container mx-auto flex justify-between items-center py-4">
          <div className="text-lg font-bold">Brawlstars Stats</div>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-[url('https://supercell.com/images/1a5b69311180a4a1c374e10556941f05/hero_bg_brawlstars.a385872a.webp')] bg-cover bg-center  h-screen ">
        <div className="flex pt-24 justify-center h-full bg-black bg-opacity-50">
          <div className="text-center w-1/2 text-white">
            <h1 className="text-5xl font-bold mb-4">Enter your Player Tag!</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="playerTag"
                className="text-black p-2 rounded m-4"
                value={playerTag}
                onChange={(e) => setPlayerTag(e.target.value)}
                placeholder="#YourPlayerTag"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
              >
                Submit
              </button>
            </form>
            <div
              id="container-for-tabs-and-data"
              className="flex flex-col h-screen items-center"
            >
              {showTabs && (
                <div
                  id="tabs"
                  className="flex flex-row m-10 border-b-2 border-white max-w-[700px] items-center justify-evenly"
                >
                  <div
                    className={`mx-2 text-bold w-40 p-3 rounded-lg cursor-pointer hover:opacity-50 ${
                      activeTab === "Profile"
                        ? "bg-white text-black"
                        : "bg-transparent"
                    }`}
                    onClick={() => handleTabClick("Profile")}
                  >
                    Your Stats
                  </div>
                  <div
                    className={`mx-2 text-bold w-40 p-3 rounded-lg cursor-pointer hover:opacity-50 ${
                      activeTab === "Brawlers"
                        ? "bg-white text-black"
                        : "bg-transparent"
                    }`}
                    onClick={() => handleTabClick("Brawlers")}
                  >
                    Brawler Stats
                  </div>
                  <div
                    className={`mx-2 text-bold w-40 p-3 rounded-lg cursor-pointer hover:opacity-50 ${
                      activeTab === "Calculator"
                        ? "bg-white text-black"
                        : "bg-transparent"
                    }`}
                    onClick={() => handleTabClick("Calculator")}
                  >
                    Upgrade Calculator
                  </div>
                </div>
              )}

              {activeTab === "Profile" &&
                (playerInfo.trophies > 0 ? (
                  <div
                    style={{
                      backgroundImage:
                        "url('/assets/banners/banner_bp_spongebob.png')",
                      position: "relative",
                    }}
                    className="bg-cover bg-center text-left mx-auto w-[700px] h-[300px] text-white text-outline-black font-lilita rounded"
                  >
                    <div className="absolute inset-0 bg-black opacity-40 z-0 rounded"></div>
                    <div className="relative">
                      <div
                        className="mx-4 mt-2 text-3xl"
                        style={{ color: `#${playerInfo.nameColor.slice(-6)}` }}
                      >
                        {playerInfo.name.toUpperCase()}
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
                                alt="trophy"
                              />
                              <div className="ml-2">{playerInfo.trophies}</div>
                            </div>
                            <div className="text-md text-gray-400">HIGHEST</div>
                            <div className="flex items-center bg-blue-800 w-[fit-content] px-2 py-1 rounded">
                              <img
                                className="w-5 h-4"
                                src="/assets/trophy.png"
                                alt="trophy"
                              />
                              <div className="ml-2">
                                {playerInfo.highestTrophies}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="victories"
                          className="flex flex-col mx-auto text-center mt-2 w-[200px]"
                        >
                          <div
                            id="text-3vs3"
                            className="flex flex-col items-center"
                          >
                            <div className="text-md text-gray-400">
                              3 VS 3 VICTORIES
                            </div>
                            <div
                              id="3vs3"
                              className="flex items-center bg-blue-800 w-[fit-content] px-2 py-1 rounded"
                            >
                              <img
                                className="w-5 h-4"
                                src="/assets/3vs3victories.png"
                                alt="3vs3"
                              />
                              <div className="ml-2">
                                {playerInfo["3vs3Victories"]}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="text-md text-gray-400">
                              SOLO VICTORIES
                            </div>
                            <div className="flex items-center bg-blue-800 w-[fit-content] px-2 py-1 rounded">
                              <img
                                className="w-5 h-4"
                                src="/assets/solo_showdown.png"
                                alt="trophy"
                              />
                              <div className="ml-2">
                                {playerInfo.soloVictories}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="text-md text-gray-400">
                              DUO VICTORIES
                            </div>
                            <div className="flex items-center bg-blue-800 w-[fit-content] px-2 py-1 rounded">
                              <img
                                className="w-5 h-4"
                                src="/assets/duo_showdown.png"
                                alt="trophy"
                              />
                              <div className="ml-2">
                                {playerInfo.duoVictories}
                              </div>
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
                                alt="trophy"
                              />
                              <div className="ml-2">{playerInfo.club.name}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null)}
              {activeTab === "Brawlers" && (
                <div className="flex flex-wrap h-[800px] w-2/8 overflow-y-scroll justify-center bg-gray-600 bg-opacity-50 mx-auto">
                  {playerInfo.brawlers.map((brawler) => (
                    <Card
                      rank={brawler.rank}
                      power={brawler.power}
                      gears={brawler.gears}
                      gadgets={brawler.gadgets}
                      highestTrophies={brawler.highestTrophies}
                      trophies={brawler.trophies}
                      id={brawler.id}
                      starPowers={brawler.starPowers}
                      name={brawler.name}
                    />
                  ))}
                </div>
              )}
              {activeTab === "Calculator" && (
                <div className="text-black min-w-2/3">
                  <SearchBar brawlerStatList={playerInfo.brawlers} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="container mx-auto py-10">
        <section id="services" className="text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Track your stats</h3>
              <p>
                We provide stats about your account using the Brawl Stars API
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Upgrade Calculator</h3>
              <p>
                Our team developed a calculator where you can calculate any
                upgrade for your brawlers
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Cloud Solutions</h3>
              <p>
                We offer secure cloud-based solutions tailored to your business
                needs.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Website. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
