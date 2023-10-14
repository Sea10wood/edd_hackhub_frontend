import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/layout";
import { useRouter } from "next/router";
import CategoryCard from "@/components/CategoryCard";
import { useEventContext } from "@/contexts/EventContext";
import TeamMemberCard from "@/components/teamMemberCard";
import { title } from "process";
import TeamMemberModal from "@/components/CreateMembenJoinModal";

type EventData = {
  title: string;
  url: string;
  description: string;
  deadline: string;
  day: string;
};
type TeamData = {
  teamName: string;
  details: string;
};
type CreateEventModalProps = {
  open: boolean;
  onClose: () => void;
  onCreate: (eventData: EventData) => void;
};

const Room = () => {
  const router = useRouter();
  const { addEventTitle } = useEventContext();
  const initialEvents: EventData[] = [
    {
      title: "EDDハッカソン",
      url: "",
      description: "",
      deadline: "",
      day: "",
    },
  ];
  const initialTeam: TeamData[] = [
    {
      teamName: "HotchPotch",
      details: "Hackathonbotを作成",
    },
  ];

  const [events, setEvents] = useState<EventData[]>(initialEvents);

  const [eventTitle, setEventTitle] = useState(initialEvents);

  const handleCreateEvent = async (eventData: EventData) => {
    addEventTitle(eventData.title);
    setEvents([...events, eventData]);
    try {
      const response = await fetch("/api/Category", {
        method: "GET",
      });

      if (response.ok) {
        console.log("Event created and sent to the server4.");
      } else {
        console.error("Failed to create event.");
      }
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <>
      <Sidebar />
      <div style={{ marginTop: "100px", marginLeft: "140px" }}>
        {eventTitle.map((event, index) => (
          <CategoryCard key={index} event={event} />
        ))}
        <TeamMemberCard
          event={{
            title: "",
            url: "",
            description: "",
            deadline: "",
            day: "",
          }}
          team={{
            name: "HotchPotch",
            details: "",
          }}
        />
      </div>
    </>
  );
};

export default Room;
