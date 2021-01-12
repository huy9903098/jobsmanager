import { createContext, useState } from "react";
export const JobContext = createContext();

export const JobProvider = (props) => {
  const [jobs, setJobs] = useState([
    {
      customer: "Wang",
      endDate: new Date(1992, 1, 1),
      id: "1a",
      jobname: "Cupcake sugar",
      location: "Hawaii",
      startDate: new Date(2002, 1, 1),
      status: "Ongoing",
      info: "Clicked text to eidt",
      tasks: [
        {
          id: "1",
          name: "task 1",
          createdMessage: {
            id: "1",
            message: "Remember to buy milk",
          },
          dueDate: new Date(2021, 4, 11),
          assignedMessage: [
            {
              id: "2",
              message: "The milk got it",
            },
            {
              id: "3",
              message: "cow milk is best",
            },
            {
              id: "4",
              message: "milk is expired",
            },
          ],
        },
        {
          id: "2",
          name: "task 2",
          dueDate: new Date(2022, 2, 19),
          createdMessage: {
            id: "5",
            message: "Remember to buy book",
          },
          assignedMessage: [
            {
              id: "6",
              message: "book is knowledge",
            },
            {
              id: "7",
              message: "Code book are best",
            },
          ],
        },
      ],
    },
    {
      customer: "Jon",
      endDate: new Date(1995, 1, 11),
      id: "2a",
      jobname: "Cheese rolling",
      location: "America",
      startDate: new Date(2002, 5, 7),
      status: "Closed",
      info: "Clicked text to eidt",
      tasks: {},
    },
    {
      customer: "zhongli",
      endDate: new Date(1989, 7, 17),
      id: "3b",
      jobname: "Tower building",
      location: "China",
      startDate: new Date(2011, 4, 1),
      status: "Ongoing",
      info: "Clicked text to eidt",
      tasks: {},
    },
    {
      customer: "Jon",
      endDate: new Date(1978, 2, 3),
      id: "4",
      jobname: "Sword making",
      location: "America",
      startDate: new Date(2002, 1, 1),
      status: "Ongoing",
      info: "Clicked text to eidt",
      tasks: {},
    },
    {
      customer: "Pete",
      endDate: new Date(1992, 1, 1),
      id: "5",
      jobname: "Pizza Topping",
      location: "Italy",
      startDate: new Date(2002, 1, 1),
      status: "Pending",
      info: "Clicked text to eidt",
      tasks: {},
    },
    {
      customer: "Lisa",
      endDate: new Date(1999, 2, 28),
      id: "6",
      jobname: "Bed Manufactor",
      location: "Spain",
      startDate: new Date(2007, 9, 19),
      status: "Ongoing",
      info: "Clicked text to eidt",
      tasks: {},
    },
    {
      customer: "Pete",
      endDate: new Date(1997, 10, 10),
      id: "7",
      jobname: "Milkshake",
      location: "Hawaii",
      startDate: new Date(2004, 11, 11),
      status: "Closed",
      info: "Clicked text to eidt",
      tasks: {},
    },
  ]);

  return (
    <JobContext.Provider value={[jobs, setJobs]}>
      {props.children}
    </JobContext.Provider>
  );
};
