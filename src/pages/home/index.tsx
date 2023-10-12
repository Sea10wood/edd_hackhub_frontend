import { Box, Button, Typography } from "@mui/material"
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import CreateEventModal from "@/components/eventinputmodal";
import Link from "next/link";
import EventList from "@/components/eventList";
import axios from "axios";
import { axiosBaseURL } from "..";
import { useRouter } from "next/router";
import Sidebar from "@/components/layout";


const Home = () => {

    const router = useRouter();
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
        const getAccessToken =async (code:string)=>{
            try{
                const client_id = process.env["NEXT_PUBLIC_GITHUB_CLIENT_ID"]
                const client_secret = process.env["NEXT_PUBLIC_GITHUB_CLIENT_SECRET"]
                const res = await axios.post("https://github.com/login/oauth/access_token",{code,client_id,client_secret},{headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",}})
                console.log(res)
            }catch(err){
                console.error(err)
            }
        }
        const {code} = router.query
        console.log(router.query)
        getAccessToken("5bd085978625fae82600")
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
                <Sidebar/>

                    <Button
                        variant="contained" sx={{
                            position: 'absolute',
                            backgroundColor: '#A3F9FF', top: '4%',
                            right: '40px', color: '#000000',
                            fontWeight: "bold"
                        }} onClick={handleOpenModal}
                    >+ イベントを追加する</Button>
                    <CreateEventModal
                        open={modalOpen}
                        onClose={handleCloseModal}
                        onCreate={handleCreateEvent}
                    />
            



                <div style={{
                    position: 'absolute',
                    top: '100px',
                    left: '120px',
                    right: '30px'
                    
                }}>

                    <EventList />
                </div>
            </>

        </>


    );
};


export default Home;


