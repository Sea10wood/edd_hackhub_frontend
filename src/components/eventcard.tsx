import React from 'react';
import { Card, CardContent, Typography, Button, Paper } from '@mui/material';
import Link from 'next/link';


type EventData = {
    title: string;
    url: string;
    description: string;
};

type EventCardProps = {
    event: EventData;
};

const EventCard = ({ event }: EventCardProps) => {
    return (
        <div style={{ textAlign: "center" }}>
            <Card sx={{ backgroundColor: "#f5f5f5", margin: "auto", textAlign: "center" }}>
                <CardContent>
                    <Typography variant="h2" component="div" sx={{ fontWeight: "bold" }}>
                        {event.title}
                    </Typography>
                    {/* <Typography color="textSecondary">
        {event.url}
    </Typography> */}
                    <Typography variant="h5">
                        {event.description}
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Link href={event.url} passHref>
                            <Button variant="contained" color="primary" sx={{ margin: "5px" }}>
                                + HPへ
                            </Button>
                        </Link>
                        <Button variant="contained" color="success" sx={{ margin: "5px" }}>
                            + 参加する
                        </Button>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
};

export default EventCard;
