import React, { createContext, useContext, ReactNode, useState } from "react";

type EventTitle = {
  title: string;
};

type EventContextType = {
  eventTitles: EventTitle[];
  addEventTitle: (title: string) => void;
};

const EventContext = createContext<EventContextType | undefined>(undefined);
const TeamContext = createContext<EventContextType | undefined>(undefined);
export const EventProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [eventTitles, setEventTitles] = useState<EventTitle[]>([]);

  const addEventTitle = (title: string) => {
    const newEventTitle = { title };
    setEventTitles([...eventTitles, newEventTitle]);
  };

  return (
    <EventContext.Provider value={{ eventTitles, addEventTitle }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error("useEventContext must be used within an EventProvider");
  }
  return context;
};
