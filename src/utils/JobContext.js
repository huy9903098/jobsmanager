import { createContext, useState } from "react";
export const JobContext = createContext();

export const JobProvider = () => {
  const [jobs, setJobs] = useState([]);
};
