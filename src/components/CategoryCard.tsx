import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import Link from "next/link";
import TeamMemberCard from "./teamMemberCard";

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
