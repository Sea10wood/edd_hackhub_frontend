import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import Link from "next/link";
import { AiOutlineLink, AiOutlinePlus } from "react-icons/ai";
import { BsFillPeopleFill, BsFillPersonPlusFill } from "react-icons/bs";
import CreateMembenJoinModal from "./CreateMembenJoinModal";

type EventData = {
  title: string;
  url: string;
  description: string;
  deadline: string;
  day: string;
};

type TeamCardProps = {
  event: EventData;
  team: TeamData;
};

type TeamData = {
  name: string;
  details: string;
};
const initialTeam: TeamData[] = [
  {
    name: "HotchPotch",
    details: "Hackathonbotを作成",
  },
];

const TeamMemberCard = ({ event, team }: TeamCardProps) => {
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const handleOpenModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleCloseModal2 = () => {
    setIsModalOpen2(false);
  };

  let messageComponent;

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
            {team.name}
          </Typography>
          <Typography
            component="div"
            sx={{ fontWeight: "bold", marginLeft: "1%", fontSize: "2vw" }}
          >
            {team.details}
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
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
              color="primary"
              sx={{ margin: "5px" }}
              onClick={handleOpenModal2}
              startIcon={<BsFillPeopleFill />}
            >
              チームの参加希望一覧をみる/参加を希望する
            </Button>
            <CreateMembenJoinModal
              open={isModalOpen2}
              onClose={handleCloseModal2}
              onCreate={handleCreateTeam}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamMemberCard;
