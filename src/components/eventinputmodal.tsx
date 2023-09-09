import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, Box } from '@mui/material';

type EventData = {
    title: string;
    date: string;
    description: string;
};

type CreateEventModalProps = {
    open: boolean;
    onClose: () => void;
    onCreate: (eventData: EventData) => void;
};

const CreateEventModal: React.FC<CreateEventModalProps> = ({ open, onClose, onCreate }) => {
    const [eventTitle, setEventTitle] = useState('');
    const [eventURL, setEventURL] = useState('');
    const [eventDescription, setEventDescription] = useState('');

    const handleCreateEvent = () => {
        onCreate({
            title: eventTitle,
            date: eventURL,
            description: eventDescription,
        });
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle sx={{ marginBottom: "5%" }}>ハッカソンイベントを追加する</DialogTitle>
            <DialogContent>
                ここに絵文字を含めないようにしてください。
                <TextField
                    label="イベント名"
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: "5%" }}
                />
                <TextField
                    label="HP URL"
                    value={eventURL}
                    onChange={(e) => setEventURL(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: "5%" }}
                />
                <TextField
                    label="イベント詳細"
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: "5%" }}
                />
                <Box display="flex" justifyContent="center">

                    <Button variant="contained" color="primary" onClick={handleCreateEvent} >
                        イベントを作成する
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default CreateEventModal;
