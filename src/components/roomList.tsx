import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Box,
} from "@mui/material";
import BotCheckbox from "./checkbox";

export default function RoomList() {
  const user_name = "Sea10wood";
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [teamName, setTeamName] = React.useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateBot = () => {
    closeModal();
  };

  return (
    <>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginRight: "30px",
                }}
              >
                <Image
                  src={`https://github.com/${user_name}.png`}
                  height={50}
                  width={50}
                  alt={"githubアイコン"}
                />
              </div>
              <Typography>{user_name}</Typography>
              <Button
                variant="contained"
                sx={{ marginLeft: "40px", backgroundColor: "#5964F3" }}
                onClick={openModal}
              >
                DiscordでBotを作成する
              </Button>
            </div>
          </ListItemAvatar>
        </ListItem>
      </List>

      {/* モーダル */}
      <Dialog open={isModalOpen} onClose={closeModal}>
        <DialogTitle>DiscodeBotを作成する</DialogTitle>
        <DialogContent>
          チャンネル名は絵文字を入れないでください.
          <TextField
            label="イベント名"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          🔷必要なスレッドにチェックを入れてください。
          <BotCheckbox />
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleCreateBot}
            >
              Discodeチャンネルを作成する
            </Button>
          </Box>
          <Box display="flex" justifyContent="center" sx={{ marginTop: 2 }}>
            <Button variant="outlined" onClick={closeModal}>
              戻る
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
