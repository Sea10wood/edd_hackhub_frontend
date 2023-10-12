import React, { useState } from 'react';
import EventCard from './eventcard';

type EventData = {
    title: string;
    url: string;
    description: string;
};

const EventList: React.FC = () => {
    // イベント一覧の初期データ
    const initialEvents: EventData[] = [
        {
            title: 'EDDハッカソン',
            url: 'https://efc.fukuoka.jp/edd2023/',
            description: 'Engineer Driven Day（EDD）とは、エンジニアフレンドリーシティ福岡(EFC)が、2022年から開催しているハッカソン・コンテストです。ハッカソンは独自のアイディアをもとにアプリやサービスを開発し、競い合うイベントのこと',
        },
    ];

    // イベント一覧のステート
    const [events, setEvents] = useState<EventData[]>(initialEvents);

    // 新しいイベントのフォーム入力値を管理するステート
    const [newEvent, setNewEvent] = useState<EventData>({
        title: '',
        url: '',
        description: '',
    });

    // 新しいイベントを追加するハンドラ
    const handleAddEvent = async () => {
        if (newEvent.title.trim() === '') {
            alert('イベント名を入力してください');
            return;
        }
        
        try {
            const response = await fetch('/api/Category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newEvent.title), // newEventを送信するように修正
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

        // 新しいイベントを追加
        setEvents([...events, newEvent]);

        // 入力フォームをリセット
        setNewEvent({
            title: '',
            url: '',
            description: '',
        });
    };

    return (
        <div>
            {/* 新しいイベントを追加するフォーム */}
            <div>
                <div style={{marginLeft: '20px'}}>
                <h2>イベント一覧</h2>
                </div>
                <input
                    type="text"
                    placeholder="イベント名"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="HP URL"
                    value={newEvent.url}
                    onChange={(e) => setNewEvent({ ...newEvent, url: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="説明"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                />
                <button onClick={handleAddEvent}>追加</button>
            </div>

            {/* イベント一覧 */}
            {events.map((event, index) => (
                <EventCard key={index} event={event} />
            ))}
        </div>
    );
};

export default EventList;
