import { Box, Button, Typography } from "@mui/material"
import Image from "next/image";
import React, { useState } from 'react';
import CreateEventModal from "@/components/eventinputmodal";
import Link from "next/link";
import Sidebar from "@/components/layout";
import { useRouter } from "next/router";


const Room = () => {
    const router = useRouter();
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
    const eventData = {
        title: "イベントのタイトル",
        description: "イベントの説明文",
        url: "/event/1",
    };
    return (
        <>
            <>
               <Sidebar/>


            </>


        </>


    );
};


export default Room;


