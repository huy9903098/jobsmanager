import { createContext, useState } from "react";
export const JobContext = createContext();

export const JobProvider = (props) => {
  const [jobs, setJobs] = useState([
    {
      customer: "Wang",
      endDate: new Date(1992, 1, 1),
      id: 1,
      jobname: "Cupcake sugar",
      location: "Hawaii",
      startDate: new Date(2002, 1, 1),
      status: "Ongoing",
    },
    {
      customer: "Jon",
      endDate: new Date(1995, 1, 11),
      id: 2,
      jobname: "Cheese rolling",
      location: "America",
      startDate: new Date(2002, 5, 7),
      status: "Closed",
    },
    {
      customer: "zhongli",
      endDate: new Date(1989, 7, 17),
      id: 3,
      jobname: "Tower building",
      location: "China",
      startDate: new Date(2011, 4, 1),
      status: "Ongoing",
    },
    {
      customer: "Jon",
      endDate: new Date(1978, 2, 3),
      id: 4,
      jobname: "Sword making",
      location: "America",
      startDate: new Date(2002, 1, 1),
      status: "Ongoing",
    },
    {
      customer: "Pete",
      endDate: new Date(1992, 1, 1),
      id: 5,
      jobname: "Pizza Topping",
      location: "Italy",
      startDate: new Date(2002, 1, 1),
      status: "Pending",
    },
    {
      customer: "Lisa",
      endDate: new Date(1999, 2, 28),
      id: 6,
      jobname: "Bed Manufactor",
      location: "Spain",
      startDate: new Date(2007, 9, 19),
      status: "Ongoing",
    },
    {
      customer: "Pete",
      endDate: new Date(1997, 10, 10),
      id: 7,
      jobname: "Milkshake",
      location: "Hawaii",
      startDate: new Date(2004, 11, 11),
      status: "Closed",
    },
  ]);

  return (
    <JobContext.Provider value={[jobs, setJobs]}>
      {props.children}
    </JobContext.Provider>
  );
};
