import React from 'react';
import EventCard from './eventcard'; // EventCardのインポート先を適切に修正する必要があります

const EventList = () => {
    const eventData = {
        title: 'サンプルイベント',
        url: '/sample-event',
        description: 'これはサンプルイベントの説明です。',
    };

    return (
        <div>
            <EventCard event={eventData} />
        </div>
    );
};

export default EventList;
