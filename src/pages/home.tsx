import { Box, Button, Typography } from "@mui/material"
import { getWindowSize } from "../hooks/getWindowsize";
import Image from "next/image";
import HomeBlue from "../../public/Images/HomeBlue.png"
import room from "../../public/Images/room.png"

const Home = () => {
  const { height, width } = getWindowSize();
  return (
    <>
      <Typography
        color="#444444"
        sx={{
          fontWeight: "bold",
          position: 'absolute',
          left: '7%',
        }}
        variant="h3"
        fontWeight=""
      >
        HackHub
      </Typography>
      <Box
        sx={{
          width: 80,
          height: height,
          backgroundColor: '#444444',
          position: 'relative',
        }}
      />

      <div style={{
        position: 'absolute',
        top: '30%',
        left: '3%',
        transform: 'translate(-50%, -50%)',
      }}>
        <Image src={HomeBlue}
          height={50}
          width={50}
          alt={"拡声器ブルー"}>
        </Image>
      </div>
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '3%',
        transform: 'translate(-50%, -50%)',
      }}>

        <Image src={room}
          height={50}
          width={50}
          alt={"ルーム白"}>
        </Image>
      </div>

    </>

  );
};

export default Home;


