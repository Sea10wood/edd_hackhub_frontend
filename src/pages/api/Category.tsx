// pages/api/Category.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const eventTitle = req.body;

            const baseUrl = process.env.Category_BASE_URL;
            const category = baseUrl
            const azure = await fetch(String(baseUrl),{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "category": eventTitle}), 
            })
            console.log(azure)
            console.log(category)
            res.status(200).json({ category });
        } catch (error) {
            console.error('Error generating category:', error);
            res.status(500).json({ message: 'Error generating category.' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed.' });
    }
};



