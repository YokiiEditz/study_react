import { useState, createContext } from "react";
import CompB from "./CompB";
import CompC from "./CompC";

export const UserContext = createContext();

export const ColorContext = createContext();

function CompA() {
  const [user] = useState("I AM IRON-MAN");

  const colors = ["red", "blue", "green", "yellow", "pink"];

  return (
    <>
      <div className="box">
        <h1>Component A</h1>
        <h2>{`Hello ${user}`}</h2>

        <UserContext.Provider value={user}>
          <ColorContext.Provider value={colors}>
            <CompB />
            <CompC />
          </ColorContext.Provider>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default CompA;
