import { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = (props) => {
  const user = useState([
    {
      id: 1,
      name: "Wang",
    },
    { id: 2, name: "Jon" },
    { id: 3, name: "zhongli" },
    { id: 4, name: "Mack" },
    { id: 5, name: "Jazz" },
    { id: 6, name: "Lisa" },
    { id: 7, name: "Pete" },
    { id: 8, name: "Hella" },
    {
      id: 9,
      name: "Aaram",
    },
  ]);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
