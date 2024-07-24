import axios from "axios";

const serverUrl = import.meta.env.VITE_APP_SERVER || import.meta.env.VITE_APP_SERVER_VERCEL;

const client = axios.create({
  baseURL: serverUrl,
});

export const indexWishes = () => {
  return client.get("/api/wishes");
};

export const addWishes = (data) => {
  return client.post("/api/wishes", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
