import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
} from "@mui/material";
import EventCard from "./eventcard";

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
const initialEvents: EventData[] = [
  {
    title: "EDDハッカソン",
    url: "https://efc.fukuoka.jp/edd2023/",
    description:
      "Engineer Driven Day（EDD）とは、エンジニアフレンドリーシティ福岡(EFC)が、2022年から開催しているハッカソン・コンテストです。ハッカソンは独自のアイディアをもとにアプリやサービスを開発し、競い合うイベントのこと",
    deadline: "2023/8/25",
    day: "2023/9/14",
  },
];

const CreateEventModal: React.FC<CreateEventModalProps> = ({
  open,
  onClose,
  onCreate,
}) => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventURL, setEventURL] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDeadline, setEventDeadline] = useState("");
  const [eventDay, setEventDay] = useState("");
  const [events, setEvents] = useState<EventData[]>(initialEvents);

  // 新しいイベントのフォーム入力値を管理するステート
  const [newEvent, setNewEvent] = useState<EventData>({
    title: "",
    url: "",
    description: "",
    deadline: "",
    day: "",
  });

  const handleCreateEvent = async () => {
    const newEvent = {
      title: eventTitle,
      url: eventURL,
      description: eventDescription,
      deadline: eventDeadline,
      day: eventDay,
    };

    onCreate({
      title: eventTitle,
      url: eventURL,
      description: eventDescription,
      deadline: eventDeadline,
      day: eventDay,
    });
    onClose();
    try {
      const response = await fetch("/api/Category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventTitle }),
      });

      if (response.ok) {
        // リクエストが成功した場合の処理
        console.log("Event created and sent to the server.");
      } else {
        // リクエストが失敗した場合の処理
        console.error("Failed to create event.");
      }
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const handleAddEvent = async () => {
    if (newEvent.title.trim() === "") {
      alert("イベント名を入力してください");
      return;
    }

    try {
      const response = await fetch("/api/Category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent.title),
      });

      if (response.ok) {
        // リクエストが成功した場合の処理
        console.log("Event created and sent to the server.");
      } else {
        // リクエストが失敗した場合の処理
        console.error("Failed to create event.");
      }
    } catch (error) {
      console.error("Error creating event:", error);
    }

    setEvents([...events, newEvent]);

    // 入力フォームをリセット
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

export default CreateEventModal;
