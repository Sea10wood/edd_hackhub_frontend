import { Box, Button, Typography } from "@mui/material"
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { getWindowSize } from "@/hooks/getWindowsize";
import CreateEventModal from "@/components/eventinputmodal";
import Link from "next/link";
import EventList from "@/components/eventList";
import axios from "axios";
import { axiosBaseURL } from "..";
import { useRouter } from "next/router";


const Home = () => {

    const router = useRouter();
    const { height, width } = getWindowSize();
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const [name, setName] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [iconUrl, setIconUrl] = useState<string>('');

    const getUserData = async (token: string) => {
        try {
            const response = await axios.get(`${axiosBaseURL}/api/users`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
            if (response.status === 200) {
                setName(response.data.name);
                setDesc(response.data.description);
                setIconUrl(response.data.iconUrl);
            } else {
                console.error(response.statusText)
                router.push('/')
            }
        } catch (error) {
            console.error(error)
            router.push('/')
        }
    }

    useEffect(() => {
        const token = sessionStorage.getItem('token');
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
                    HotchPotch
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
                    top: '5%',
                    left: '3%',
                    transform: 'translate(-50%, -50%)',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                }}>
                    <Link href='/profile'>
                        <Image 
                            src={`https://github.com/${name}.png`}
                            height={50}
                            width={50}
                            alt={"githubアイコン"}>
                        </Image>
                    </Link>
                </div>


                <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '3%',
                    transform: 'translate(-50%, -50%)',
                }}>

                    <Image src={"/images/homeblue.png"}
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



                <div style={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    right: '10%',
                }}>

                    <EventList />
                </div>
            </>

        </>


    );
};


export default Home;


