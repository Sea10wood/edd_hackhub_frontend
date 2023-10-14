import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/layout";
import { useRouter } from "next/router";
import CategoryCard from "@/components/CategoryCard";
import { useEventContext } from "@/contexts/EventContext";

type EventData = {
  title: string;
  url: string;
  description: string;
  deadline: string;
  day: string;
};
const Room = () => {
  const router = useRouter();
  const { eventTitles } = useEventContext();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const initialEvents: EventData[] = [
    {
      title: "EDDハッカソン",
      url: "",
      description: "",
      deadline: "",
      day: "",
    },
  ];

  const [eventTitle, setEventTitle] = useState(initialEvents);

  const handleCreateEvent = (eventUrl: any) => {
    console.log("新しいイベントが作成されました:", eventTitle);
  };

  return (
    <>
      <Sidebar />
      <div style={{ marginTop: "100px", marginLeft: "140px" }}>
        {eventTitle.map((event, index) => (
          <CategoryCard key={index} event={event} />
        ))}
      </div>
    </>
  );
};

export default Room;
