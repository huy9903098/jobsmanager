import { createContext, useState } from "react";
export const CustomerContext = createContext();

export const CustomerProvider = (props) => {
  const customers = useState([
    {
      id: 1,
      name: "Wang",
      location: "Hawaii",
    },
    {
      id: 2,
      name: "zhongli",
      location: "China",
    },
    {
      id: 3,
      name: "Jon",
      location: "America",
    },
    {
      id: 4,
      name: "Pete",
      location: "Italy",
    },
    {
      id: 5,
      name: "Lisa",
      location: "Spain",
    },
  ]);

  return (
    <CustomerContext.Provider value={customers}>
      {props.children}
    </CustomerContext.Provider>
  );
};
