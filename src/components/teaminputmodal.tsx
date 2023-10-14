import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
} from "@mui/material";

type EventData = {
  title: string;
  url: string;
  description: string;
  deadline: string;
  day: string;
};
type TeamData = {
  name: string;
  details: string;
};

type CreateTeamModalProps = {
  open: boolean;
  onClose: () => void;
  onCreate: (teamData: TeamData) => void;
};
const initialTeam: TeamData[] = [
  {
    name: "HotchPotch",
    details: "Hackathonbotを作成",
  },
];

const CreateTeamModal: React.FC<CreateTeamModalProps> = ({
  open,
  onClose,
  onCreate,
}) => {
  const [teamName, setTeamName] = useState("");
  const [teamDetail, setTeamDetail] = useState("");
  const [team, setTeam] = useState<TeamData[]>(initialTeam);

  const [newTeam, setNewTeam] = useState<TeamData>({
    name: "",
    details: "",
  });

  const handleCreateTeam = async () => {
    const newTeam = {
      name: teamName,
      details: teamDetail,
    };

    onCreate({
      name: teamName,
      details: teamDetail,
    });
    onClose();
    try {
      const response = await fetch("/api/Category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ teamName }),
      });

      if (response.ok) {
        console.log("team created and sent to the server.");
      } else {
        console.error("Failed to create team.");
      }
    } catch (error) {
      console.error("Error creating team:", error);
    }
  };

  const handleAddTeam = async () => {
    if (newTeam.name.trim() === "") {
      alert("チーム名を入力してください");
      return;
    }

    try {
      const response = await fetch("/api/Category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTeam.name),
      });

      if (response.ok) {
        console.log("Team created and sent to the server.");
      } else {
        console.error("Failed to create Team.");
      }
    } catch (error) {
      console.error("Error creating Team:", error);
    }

    setTeam([...team, newTeam]);

    // 入力フォームをリセット
    setNewTeam({
      name: "",
      details: "",
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ marginBottom: "5%" }}>チームを募集する</DialogTitle>
      <DialogContent>
        ここに絵文字を含めないようにしてください。
        <TextField
          type="text"
          placeholder="チーム名"
          value={newTeam.name}
          onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
          fullWidth
          sx={{ marginBottom: "5%" }}
        />
        <TextField
          type="text"
          placeholder="詳細を追加できます"
          value={newTeam.details}
          onChange={(e) => setNewTeam({ ...newTeam, details: e.target.value })}
          fullWidth
          sx={{ marginBottom: "5%" }}
        />
        <Box display="flex" justifyContent="center">
          <Button variant="contained" color="primary" onClick={handleAddTeam}>
            チームメンバーを募集する
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTeamModal;
