import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import Link from "next/link";
import { AiOutlineLink, AiOutlinePlus } from "react-icons/ai";
import { BsFillPeopleFill, BsFillPersonPlusFill } from "react-icons/bs";
import moment from "moment";
import CreateTeamModal from "./teaminputmodal";

type EventData = {
  title: string;
  url: string;
  description: string;
  deadline: string;
  day: string;
};

type EventCardProps = {
  event: EventData;
};

const EventCard = ({ event }: EventCardProps) => {
  const eventDeadline = moment(event.deadline);
  const currentTime = moment().format("YYYY-MM-DDTHH:mm:ss");
  const daysUntilDeadline: number = eventDeadline.diff(currentTime, "days");
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const handleOpenModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleCloseModal1 = () => {
    setIsModalOpen1(false);
  };

  let messageComponent;

  if (eventDeadline.isAfter(currentTime)) {
    messageComponent = (
      <Typography component="div" sx={{ color: "red", fontSize: "1.5vw" }}>
        申し込み締め切り
      </Typography>
    );
  } else {
    messageComponent = (
      <Typography component="div" sx={{ color: "red", fontSize: "1.5vw" }}>
        募集締切日まであと = {daysUntilDeadline}
      </Typography>
    );
  }
  type TeamData = {
    name: string;
    details: string;
  };
  function handleCreateTeam(teamData: TeamData): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Card
        sx={{ backgroundColor: "#f5f5f5", margin: "auto", textAlign: "left" }}
      >
        <CardContent>
          <Typography
            component="div"
            sx={{ fontWeight: "bold", marginLeft: "1%", fontSize: "4vw" }}
          >
            {event.title}
          </Typography>
          <Typography
            component="div"
            sx={{ fontWeight: "bold", marginLeft: "1%", fontSize: "2vw" }}
          >
            ・ 申し込み締め切り：{event.deadline}
          </Typography>
          {messageComponent}
          <Typography
            component="div"
            sx={{ fontWeight: "bold", marginLeft: "1%", fontSize: "2vw" }}
          >
            ・ イベント日程：{event.day}
          </Typography>
          <Typography sx={{ fontSize: "2vw" }}>{event.description}</Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link href={event.url} passHref>
              <Button
                variant="contained"
                color="primary"
                sx={{ margin: "5px" }}
                startIcon={<AiOutlineLink />}
              >
                URLへ
              </Button>
            </Link>
            <Link href={event.url} passHref>
              <Button
                variant="contained"
                color="success"
                sx={{ margin: "5px" }}
                startIcon={<BsFillPersonPlusFill />}
              >
                個人で参加する
              </Button>
            </Link>
            <Button
              variant="contained"
              color="secondary"
              sx={{ margin: "5px" }}
              onClick={handleOpenModal1}
              startIcon={<BsFillPeopleFill />}
            >
              チームを募集する
            </Button>
            <CreateTeamModal
              open={isModalOpen1}
              onClose={handleCloseModal1}
              onCreate={handleCreateTeam}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventCard;
