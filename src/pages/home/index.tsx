import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
} from "@mui/material";
import Link from "next/link";
import Sidebar from "@/components/layout";
import { FcPlus } from "react-icons/fc";
import EventCard from "@/components/eventcard";

type EventData = {
  title: string;
  url: string;
  description: string;
  deadline: string;
  day: string;
};

type CreateEventModalProps = {
  open: boolean;
  onClose: () => void;
  onCreate: (eventData: EventData) => void;
};

const Home = () => {
  const initialEvents: EventData[] = [
    {
      title: "EDDハッカソン",
      url: "https://efc.fukuoka.jp/edd2023/",
      description:
        "Engineer Driven Day（EDD）とは、エンジニアフレンドリーシティ福岡(EFC)が、2022年から開催しているハッカソン・コンテストです。ハッカソンは独自のアイディアをもとにアプリやサービスを開発し、競い合うイベントのこと",
      deadline: "2023-09-25T00:00:00",
      day: "2023/9/14-15",
    },
  ];

  const [events, setEvents] = useState<EventData[]>(initialEvents);

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCreateEvent = async (eventData: EventData) => {
    setEvents([...events, eventData]);
    handleCloseModal();
    try {
      const response = await fetch("/api/Category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        console.log("Event created and sent to the server.");
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

      <Button
        sx={{
          position: "fixed",
          top: "240px",
          left: "13px",
        }}
        startIcon={<FcPlus size={45} />}
        onClick={handleOpenModal}
      ></Button>
      <CreateEventModal
        open={modalOpen}
        onClose={handleCloseModal}
        onCreate={handleCreateEvent}
      />

      <div
        style={{
          position: "absolute",
          top: "100px",
          left: "120px",
          right: "30px",
        }}
      >
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </>
  );
};

const CreateEventModal: React.FC<CreateEventModalProps> = ({
  open,
  onClose,
  onCreate,
}) => {
  const [newEvent, setNewEvent] = useState<EventData>({
    title: "",
    url: "",
    description: "",
    deadline: "",
    day: "",
  });

  const handleAddEvent = () => {
    const eventData = {
      title: newEvent.title,
      url: newEvent.url,
      description: newEvent.description,
      deadline: newEvent.deadline,
      day: newEvent.day,
    };

    if (!eventData.title) {
      alert("イベント名を入力してください");
      return;
    }

    onCreate(eventData); // イベントを作成
    setNewEvent({
      title: "",
      url: "",
      description: "",
      deadline: "",
      day: "",
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ marginBottom: "5%" }}>
        ハッカソンイベントを追加する
      </DialogTitle>
      <DialogContent>
        ここに絵文字を含めないようにしてください。
        <TextField
          type="text"
          placeholder="イベント名"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          fullWidth
          sx={{ marginBottom: "5%" }}
        />
        <TextField
          type="text"
          placeholder="HP URL"
          value={newEvent.url}
          onChange={(e) => setNewEvent({ ...newEvent, url: e.target.value })}
          fullWidth
          sx={{ marginBottom: "5%" }}
        />
        <TextField
          type="text"
          placeholder="説明"
          value={newEvent.description}
          onChange={(e) =>
            setNewEvent({ ...newEvent, description: e.target.value })
          }
          fullWidth
          sx={{ marginBottom: "5%" }}
        />
        <TextField
          type="text"
          placeholder="募集締切日（YYYY-MM-DDTHH:mm:ss）"
          value={newEvent.deadline}
          onChange={(e) =>
            setNewEvent({ ...newEvent, deadline: e.target.value })
          }
          fullWidth
          sx={{ marginBottom: "5%" }}
        />
        <TextField
          type="text"
          placeholder="イベント日時"
          value={newEvent.day}
          onChange={(e) => setNewEvent({ ...newEvent, day: e.target.value })}
          fullWidth
          sx={{ marginBottom: "5%" }}
        />
        <Box display="flex" justifyContent="center">
          <Button variant="contained" color="primary" onClick={handleAddEvent}>
            イベントを作成する
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Home;
