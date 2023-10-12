import { axiosBaseURL } from "@/pages";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Sidebar=()=>{
    const router = useRouter();
    const [name, setName] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [iconUrl, setIconUrl] = useState<string>('');
    const [hoveredHome, setHoveredHome] = useState(false);
  const [hoveredRoom, setHoveredRoom] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  useEffect(() => {
    axios.get(`${axiosBaseURL}/api/getUserName`)
      .then((response) => {
        setName(response.data.name);
      })
      .catch((error) => {
        console.error("Error fetching 'name'", error);
      });
  }, []);
  
  useEffect(() => {
    axios.get(`${axiosBaseURL}/api/getIconUrl`)
      .then((response) => {
        setIconUrl(response.data.iconUrl);
      })
      .catch((error) => {
        console.error("Error fetching 'iconUrl'", error);
      });
  }, []);

        const handleMouseEnterHome = () => {
            setHoveredHome(true);
          };
        
          const handleMouseLeaveHome = () => {
            setHoveredHome(false);
          };
        
          const handleMouseEnterRoom = () => {
            setHoveredRoom(true);
          };
        
          const handleMouseLeaveRoom = () => {
            setHoveredRoom(false);
          };

          const handleIconClick = (icon: string) => {
            setSelectedIcon(icon); 
          };
        
      
    

        return (
            <>
                <>
                    <Typography
                        color="#000000"
                        sx={{
                            fontWeight: "bold",
                            position: 'absolute',
                            left: '100px',
                        }}
                        variant="h3"
                    >
                        HackHub
                    </Typography>
                    <Box
                        sx={{
                            width: 80,
                            height: "100vh",
                            backgroundColor: '#444444',
                            position: 'relative',
                        }}
                    />
    
    
                    <div style={{
                        position: 'absolute',
                        top: '40px',
                        left: '40px',
                        transform: 'translate(-50%, -50%)',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                    }}>
                        <Link href='/profile'>
                            <Image
                                src={iconUrl}
                                height={50}
                                width={50}
                                alt={"githubアイコン"}/>
                        </Link>
                    </div>
    
    
                    <div style={{
                        position: 'absolute',
                        top: '120px',
                        left: '40px',
                        transform: 'translate(-50%, -50%)',
                    }}>
                        <Link href='/home'>
                            <div 
                            className="icon-home-container"
                            onMouseEnter={handleMouseEnterHome}
                            onMouseLeave={handleMouseLeaveHome}
                            onClick={() => handleIconClick("home")}
                            >


                        <Image src={hoveredHome ? "/images/homeblue.png": "/images/homewhite.png"}
                            height={50}
                            width={50}
                            alt={"拡声器"}
                            className="icon-home">
                        </Image>
                                </div>
                                </Link>
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: '190px',
                        left: '40px',
                        transform: 'translate(-50%, -50%)',
                    }}>
                        <Link href="/rooms">
                                    <div
                                        className="icon-container"
                                        onMouseEnter={handleMouseEnterRoom}
                                        onMouseLeave={handleMouseLeaveRoom}
                                    >
                                        <Image
                                        src={hoveredRoom ? "/images/roomblue.png" : "/images/room.png"}
                                        height={50}
                                        width={50}
                                        alt={hoveredRoom ? "ルームblue（ホバー時）" : "ルーム白"}
                                        className="icon"
                                        />
                                    </div>
                                    </Link>
                                    </div>
    
              
                </>
    
            </>
            )
            
                
        
          
}
export default Sidebar;