import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, Box } from '@mui/material';


type EventData = {
    title: string;
    url: string;
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
    const [events, setEvents] = useState<EventData[]>([]);

    const handleCreateEvent = async () => {
        const newEvent = {
            title: eventTitle,
            url: eventURL,
            description: eventDescription,
        };
    

        onCreate({
            title: eventTitle,
            url: eventURL,
            description: eventDescription,
        });
        onClose();
        try {
            const response = await fetch('/api/Category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ eventTitle }),
            });

            if (response.ok) {
                // リクエストが成功した場合の処理
                console.log('Event created and sent to the server.');
            } else {
                // リクエストが失敗した場合の処理
                console.error('Failed to create event.');
            }
        } catch (error) {
            console.error('Error creating event:', error);
        }
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
