import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CreateEventModal from "@/components/eventinputmodal";
import Link from "next/link";
import EventList from "@/components/eventList";
import axios from "axios";
import { axiosBaseURL } from "..";
import { useRouter } from "next/router";
import Sidebar from "@/components/layout";
const getAccessToken = async (code: string) => {
  try {
    const res = await axios.post("/api/github", { code });
    const { access_token } = await res.data;
    sessionStorage.setItem("token", access_token);
  } catch (err) {
    console.error(err);
  }
};
const Home = () => {
  const router = useRouter();
  const { code } = router.query;

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [user, setUser] = useState({ name: "", desc: "", iconUrl: "" });
  const getUserData = async (token: string) => {
    try {
      const response = await axios.get(`${axiosBaseURL}/api/users`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        const { name, description: desc, iconUrl } = response.data;
        setUser({ name, desc, iconUrl });
      } else {
        // console.error(response.statusText);
        // router.push("/");
      }
    } catch (error) {
      console.error(error);
      router.push("/");
    }
  };

  useEffect(() => {
    if (!code || typeof window == undefined) {
      return;
    }
    getAccessToken(code);
  }, [code]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token !== null) {
      getUserData(token);
    }
  }, []);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCreateEvent = (eventUrl: any) => {
    console.log("新しいイベントが作成されました:", eventUrl);
  };

  return (
    <>
      <>
        <Sidebar />

        <Button
          variant="contained"
          sx={{
            position: "absolute",
            backgroundColor: "#ffffff",
            top: "240px",
            left: "9px",
            color: "#000000",
            fontWeight: "bold",
          }}
          onClick={handleOpenModal}
        >
          +
        </Button>
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
          <EventList />
        </div>
      </>
    </>
  );
};

export default Home;
