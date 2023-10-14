import GithubMostLanguage from "@/components/githubMostUsedLanguage";
import GitHubStatsCard from "@/components/githubStatusCard";
import { Box, Button, Card, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosBaseURL } from ".";
import { useRouter } from "next/router";
import Sidebar from "@/components/layout";

const Profile = (props: { name: string }) => {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [iconUrl, setIconUrl] = useState<string>("");

  const getUserData = async (token: string) => {
    try {
      const response = await axios.get(`${axiosBaseURL}/api/users`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setName(response.data.name);
        setDesc(response.data.description);
        setIconUrl(response.data.iconUrl);
      } else {
        console.error(response.statusText);
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      router.push("/");
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token !== null) {
      // getUserData(token);
    }
  }, []);

  return (
    <>
      <Sidebar />

      <Typography
        color="#000000"
        sx={{
          fontWeight: "bold",
          position: "absolute",
          top: "50px",
          left: "100px",
          fontSize: "2vw",
        }}
      >
        {props.name}のGitHubプロフィール
      </Typography>

      <Card
        sx={{
          backgroundColor: "#f5f5f5",
          margin: "auto",
          textAlign: "center",
          width: "70%",
          height: "80%",
        }}
      >
        <Link href={`https://github.com/${props.name}`}>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              top: "10px",
              right: "15px",
              color: "#ffffff",
              backgroundColor: "#000000",
            }}
          >
            GitHubのプロフィールを見にいく
          </Button>
        </Link>
        <div
          style={{
            position: "absolute",
            top: "150px",
            left: "180px",
          }}
        >
          <GitHubStatsCard name={name} />
          <GithubMostLanguage name={name} />
        </div>
      </Card>
    </>
  );
};

export default Profile;
