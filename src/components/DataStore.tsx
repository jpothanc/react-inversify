import container from "../services/Container";
import { IDataService } from "../services/DataService";
import { IEventManager, EventData } from "../services/EventManager";

import { useEffect, useState } from "react";

export const DataStore = () => {
  const dataService = container.get<IDataService>("DataService");
  const eventManager = container.get<IEventManager>("EventManager");

  const [data, setData] = useState(0);

  console.log("DataStore");

  useEffect(() => {
    setData(dataService.getValue());

    // Subscribe to events
    eventManager.subscribeToEvent((data) => {
      console.log(`Received event: ${data.type} - ${data.data}`);
    });
    // eventManager.

    return () => {};
  }, [data]);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          dataService.setValue(parseInt(e.target.value));
          setData(dataService.getValue());

          const data: EventData = {
            type: "Mouse",
            data: 10,
          };

          eventManager.emitEvent(data);
        }}
        value={data}
      ></input>
      <div>{dataService.getValue()}</div>
    </div>
  );
};

export default DataStore;
