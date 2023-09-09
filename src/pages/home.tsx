import { Box, Button } from "@mui/material"
import { getWindowSize } from "../hooks/getWindowsize";
import Image from "next/image";
import HomeBlue from "../../public/Images/HomeBlue.png"

const Home = () => {
  const { height, width } = getWindowSize();
  return (
    <>
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

    </>

  );
};

export default Home;


