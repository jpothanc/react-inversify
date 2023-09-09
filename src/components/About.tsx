import container from "../services/Container";
import { IDataService } from "../services/DataService";
import { useEffect } from "react";
const About = () => {
  const dataService = container.get<IDataService>("DataService");

  console.log("About");

  useEffect(() => {
    console.log("About :" + dataService.getValue());

    return () => {};
  }, []);
  return <div>{dataService.getValue()}</div>;
};

export default About;
