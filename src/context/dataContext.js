"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [timeline, setTimeline] = useState([])


  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/friends.json");
      setFriends(res.data);
    };
    getData();
  }, []);


  return (
    <DataContext.Provider value={{ friends,timeline,setTimeline }}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
export default DataProvider;
