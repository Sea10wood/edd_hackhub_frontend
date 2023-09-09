import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

type CardData = {
    title: string;
    date: string;
    description: string;
};

const EventCard = ({ event }: { event: CardData }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {event.title}
                </Typography>
                <Typography color="textSecondary">
                    {event.date}
                </Typography>
                <Typography variant="body2">
                    {event.description}
                </Typography>
                <Button variant="contained" color="primary">
                    参加する
                </Button>
            </CardContent>
        </Card>
    );
};

export default EventCard;
