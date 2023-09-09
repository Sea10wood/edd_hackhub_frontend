import GithubMostLanguage from "@/components/githubMostUsedLanguage";
import GitHubStatsCard from "@/components/githubStatusCard";
import { getWindowSize } from "@/hooks/getWindowsize";
import { Box, Button, Card, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Profile = () => {
    const user_name = "Sea10wood"; // GitHubのユーザー名をここに指定
    const { height, width } = getWindowSize();
    return (
        <>
            <Typography
                color="#444444"
                sx={{
                    fontWeight: "bold",
                    position: "absolute",
                    left: "7%",
                }}
                variant="h3"
            >
                HackHub
            </Typography>
            <Box
                sx={{
                    width: 80,
                    height: height,
                    backgroundColor: "#444444",
                    position: "relative",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    top: "5%",
                    left: "3%",
                    transform: "translate(-50%, -50%)",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    overflow: "hidden",
                }}
            >
                <Image
                    src={`https://github.com/${user_name}.png`}
                    height={50}
                    width={50}
                    alt={"githubアイコン"}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "20%",
                    left: "3%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Link href="/home">
                    <Image
                        src={"/images/homewhite.png"}
                        height={50}
                        width={50}
                        alt={"拡声器白"}
                    />
                </Link>
            </div>

            <div
                style={{
                    position: "absolute",
                    top: "30%",
                    left: "3%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Link href="/rooms">
                    <Image
                        src={"/images/room.png"}
                        height={50}
                        width={50}
                        alt={"ルーム白"}
                    />
                </Link>
            </div>

            <Typography
                color="#000000"
                sx={{
                    fontWeight: "bold",
                    position: "absolute",
                    top: "8%",
                    left: "8%",
                    width: "150%",
                }}
                variant="h4"
            >
                {user_name}のGitHubプロフィール
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
                <Link href={`https://github.com/${user_name}`}>
                    <Button
                        variant="contained"
                        sx={{
                            position: "absolute",
                            top: "8%",
                            right: "15%",
                            color: "#ffffff",
                            backgroundColor: "#000000"

                        }}
                    >
                        GitHubのプロフィールを見にいく
                    </Button>
                </Link>
                <div
                    style={{
                        position: "absolute",
                        top: "15%",
                        left: "30%",
                    }}
                >
                    <GitHubStatsCard />
                    <GithubMostLanguage />
                </div>
            </Card>
        </>
    );
};

export default Profile;
