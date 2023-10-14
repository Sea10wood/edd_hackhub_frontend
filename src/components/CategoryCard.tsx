import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import Link from "next/link";
import { AiOutlineLink, AiOutlinePlus } from "react-icons/ai";
import { BsFillPeopleFill, BsFillPersonPlusFill } from "react-icons/bs";
import moment from "moment";

type EventData = {
  title: string;
  url: string;
  description: string;
  deadline: string;
  day: string;
};

type EventCardProps = {
  event: EventData;
};

const CategoryCard = ({ event }: EventCardProps) => {
  const initialEvents: EventData[] = [
    {
      title: "EDDハッカソン",
      url: "https://efc.fukuoka.jp/edd2023/",
      description:
        "Engineer Driven Day（EDD）とは、エンジニアフレンドリーシティ福岡(EFC)が、2022年から開催しているハッカソン・コンテストです。ハッカソンは独自のアイディアをもとにアプリやサービスを開発し、競い合うイベントのこと",
      deadline: "2023-09-25T00:00:00",
      day: "2023/9/14-15",
    },
  ];

  return (
    <div style={{ textAlign: "center", width: "80vw" }}>
      <Card
        sx={{ backgroundColor: "#f5f5f5", margin: "auto", textAlign: "left" }}
      >
        <CardContent>
          <Typography
            component="div"
            sx={{ fontWeight: "bold", marginLeft: "1%", fontSize: "4vw" }}
          >
            {event.title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryCard;
