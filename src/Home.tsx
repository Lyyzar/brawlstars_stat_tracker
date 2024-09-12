import { notification } from "antd";
import React, { useState } from "react";
import { getPlayerInfo } from "./api";
import { Player } from "./interfaces";
import Card from "./Card";

function Home() {
  const [activeTab, setActiveTab] = useState<string>("Profile");
  const [playerTag, setPlayerTag] = useState<string>("");
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
    expLevel: playerInfo.expLevel,
    expPoints: playerInfo.expPoints,
    soloVictories: playerInfo.soloVictories,
    duoVictories: playerInfo.duoVictories,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log();
    try {
      const playerInfo = await getPlayerInfo(playerTag);
      setPlayerInfo(playerInfo);
      notification.success({
        message: "Successfull query",
        description: "You are successfully queried your information!",
      });
    } catch (error) {
      console.log(error, "error");
      notification.error({
        message: "Error",
        description: "Your playertag is incorrect!",
      });
    }
  };

  const handleClick = (text: string) => {
    setActiveTab(text);
  };

  return (
    <div className="bg-[url('https://supercell.com/images/1a5b69311180a4a1c374e10556941f05/hero_bg_brawlstars.a385872a.webp')] bg-cover bg-center h-screen text-gray-800">
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
      <section
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: "url('https://source.unsplash.com/random/1600x900')",
        }}
      >
        <div className="flex pt-24 justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white">
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
              id="tabs"
              className="flex flex-row m-10 border-b-2 border-white justify-evenly"
            >
              <div
                className={`mx-2 text-bold p-3 rounded-lg cursor-pointer hover:opacity-50 ${
                  activeTab === "Profile"
                    ? "bg-white text-black"
                    : "bg-transparent"
                }`}
                onClick={() => handleClick("Profile")}
              >
                Your Stats
              </div>
              <div
                className={`mx-2 text-bold p-3 rounded-lg cursor-pointer hover:opacity-50 ${
                  activeTab === "Brawlers"
                    ? "bg-white text-black"
                    : "bg-transparent"
                }`}
                onClick={() => handleClick("Brawlers")}
              >
                Brawler Stats
              </div>
              <div
                className={`mx-2 text-bold p-3 rounded-lg cursor-pointer hover:opacity-50 ${
                  activeTab === "Calculator"
                    ? "bg-white text-black"
                    : "bg-transparent"
                }`}
                onClick={() => handleClick("Calculator")}
              >
                Upgrade Calculator
              </div>
            </div>
            <div>
              {activeTab === "Profile" &&
                (playerInfo.trophies > 0 ? (
                  <div className="bg-white bg-opacity-50 rounded">
                    <h2 style={{ color: `#${playerInfo.nameColor.slice(-6)}` }}>
                      Player Info:
                    </h2>
                    <ul>
                      {Object.entries(my_Data).map(([key, value]) => (
                        <li key={key}>
                          <strong>{key}: </strong> {value.toString()}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null)}
              {activeTab === "Brawlers" && (
                <div className="flex flex-wrap bg-white bg-opacity-50">
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
                <div className="content bg-gray-200 p-4 mt-4 rounded-lg">
                  Content for Text 3
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