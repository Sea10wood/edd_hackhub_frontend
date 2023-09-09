import { Box, Button } from "@mui/material"
import { getWindowSize } from "../hooks/getWindowsize";
import Image from "next/image";
import HomeBlue from "../../public/Images/HomeBlue.png"

const Home = () => {
  const imageStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', // 中央揃え
  };
  const { height, width } = getWindowSize();
  return (
    <>
      <Box
        sx={{
          width: 100,
          height: height,
          backgroundColor: '#444444',
          position: 'relative',
        }}
      />
      <div style={imageStyle}>

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


