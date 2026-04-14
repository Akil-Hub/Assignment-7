"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/friends.json");
      setFriends(res.data);
    };
    getData();
  }, []);


  return (
    <DataContext.Provider value={{ friends }}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
export default DataProvider;
