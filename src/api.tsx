import axios from "axios";
import { Player } from "./interfaces";

const token = process.env.REACT_APP_API_KEY;

const api = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getPlayerInfo = async (playerTag: string): Promise<Player> => {
  console.log("getPlayerInfo");
  console.log(playerTag);
  try {
    const encodedPlayerTag = encodeURIComponent(playerTag);
    const response = await api.get(`/v1/players/${encodedPlayerTag}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message); // Safe to access message
    } else {
      console.log("An unknown error occurred");
    }

    throw new Error("An unexpected error occurred");
  }
};
