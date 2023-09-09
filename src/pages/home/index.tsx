import { Box, Button, Typography } from "@mui/material"
import Image from "next/image";
import React, { useState } from 'react';
import { getWindowSize } from "@/hooks/getWindowsize";
import CreateEventModal from "@/components/eventinputmodal";
import EventCard from "@/components/eventcard";
import Link from "next/link";
import EventList from "@/components/eventList";


const Home = () => {
    const { height, width } = getWindowSize();
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleCreateEvent = (eventUrl: any) => {
        console.log('新しいイベントが作成されました:', eventUrl);
    };

    return (
        <>
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
                    top: '20%',
                    left: '3%',
                    transform: 'translate(-50%, -50%)',
                }}>
                    <Image src={"/images/HomeBlue.png"}
                        height={50}
                        width={50}
                        alt={"拡声器ブルー"}>
                    </Image>
                </div>
                <div style={{
                    position: 'absolute',
                    top: '30%',
                    left: '3%',
                    transform: 'translate(-50%, -50%)',
                }}>
                    <Link href='/rooms'>


                        <Image src={"/images/room.png"}
                            height={50}
                            width={50}
                            alt={"ルーム白"}>
                        </Image>
                    </Link>
                </div>

                <>

                    <Button
                        variant="contained" sx={{
                            position: 'absolute',
                            backgroundColor: '#A3F9FF', top: '4%',
                            right: '10%', color: '#000000',
                            fontWeight: "bold"
                        }} onClick={handleOpenModal}
                    >+ イベントを追加する</Button>
                    <CreateEventModal
                        open={modalOpen}
                        onClose={handleCloseModal}
                        onCreate={handleCreateEvent}
                    />
                </>


            </>
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '30%',
            }}>

                <EventList />
            </div>
        </>


    );
};


export default Home;


