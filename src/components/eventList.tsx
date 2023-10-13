import React, { useState } from "react";
import EventCard from "./eventcard";

type EventData = {
  title: string;
  url: string;
  description: string;
  deadline: string;
  day: string;
};

const EventList: React.FC = () => {
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

  const [newEvent, setNewEvent] = useState<EventData>({
    title: "",
    url: "",
    description: "",
    deadline: "",
    day: "",
  });

  // 新しいイベントを追加するハンドラ
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
        console.log("Event created and sent to the server.");
      } else {
        console.error("Failed to create event.");
      }
    } catch (error) {
      console.error("Error creating event:", error);
    }

    // 新しいイベントを追加
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
    <div>
      {/* 新しいイベントを追加するフォーム */}
      <div>
        <div style={{ marginLeft: "20px" }}>
          <h2>イベント一覧</h2>
        </div>
        {/* <input
                    type="text"
                    placeholder="イベント名"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="HP URL"
                    value={newEvent.url}
                    onChange={(e) => setNewEvent({ ...newEvent, url: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="説明"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                />
                <button onClick={handleAddEvent}>追加</button> */}
      </div>
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};

export default EventList;
