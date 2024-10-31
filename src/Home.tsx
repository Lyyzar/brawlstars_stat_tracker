import { notification } from "antd";
import React, { useState } from "react";
import { getPlayerInfo } from "./api";
import { Player } from "./interfaces";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import ProfileTab from "./components/ProfileTab";
import NavBar from "./components/NavBar";

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

  return (
    <div className="h-screen">
      <NavBar />
      <div className="bg-[url('https://supercell.com/images/1a5b69311180a4a1c374e10556941f05/hero_bg_brawlstars.a385872a.webp')] bg-cover bg-center border border-yellow-400 border-5 h-full">
        <div className="flex pt-24 justify-center h-full bg-black bg-opacity-50">
          <div className="flex flex-col text-center w-1/2 sm:w-1/2 lg:w-2/3 text-white">
            <h1 className="md:text-5xl sm:text-2xl font-bold mb-4">
              Enter your Player Tag!
            </h1>
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
              className="flex flex-col h-full w-auto items-center mb-10"
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
                    onClick={() => setActiveTab("Profile")}
                  >
                    Your Stats
                  </div>
                  <div
                    className={`mx-2 text-bold w-40 p-3 rounded-lg cursor-pointer hover:opacity-50 ${
                      activeTab === "Brawlers"
                        ? "bg-white text-black"
                        : "bg-transparent"
                    }`}
                    onClick={() => setActiveTab("Brawlers")}
                  >
                    Brawler Stats
                  </div>
                  <div
                    className={`mx-2 text-bold w-40 p-3 rounded-lg cursor-pointer hover:opacity-50 ${
                      activeTab === "Calculator"
                        ? "bg-white text-black"
                        : "bg-transparent"
                    }`}
                    onClick={() => setActiveTab("Calculator")}
                  >
                    Upgrade Calculator
                  </div>
                </div>
              )}

              {activeTab === "Profile" &&
                (playerInfo.trophies > 0 ? (
                  <ProfileTab player={playerInfo} />
                ) : null)}

              {activeTab === "Brawlers" && (
                <div className="grid sm:grid-cols-1  lg:grid-cols-1 2xl:grid-cols-2 gap-4 h-[800px] w-auto overflow-y-scroll justify-center bg-gray-600 bg-opacity-50 mx-auto">
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
      </div>

      <main className="container mx-auto py-10">
        <section id="services" className="text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Track your stats</h3>
              <p>
                We provide stats about your account using the original Brawl
                Stars API
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Brawler stats</h3>
              <p>We offer a detailed look on your brawlers.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Upgrade Calculator</h3>
              <p>
                Our team developed a calculator where you can calculate any
                upgrade for your brawlers
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
