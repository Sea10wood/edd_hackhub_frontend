import GithubMostLanguage from "@/components/githubMostUsedLanguage";
import GitHubStatsCard from "@/components/githubStatusCard";
import { getWindowSize } from "@/hooks/getWindowsize";
import { Box, Button, Card, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosBaseURL } from ".";
import { useRouter } from "next/router";

const Profile = () => {

    const router = useRouter();
    const { height, width } = getWindowSize();

    const [name, setName] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [iconUrl, setIconUrl] = useState<string>('');

    const getUserData = async (token: string) => {
        try {
            const response = await axios.get(`${axiosBaseURL}/api/users`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
            if (response.status === 200) {
                setName(response.data.name);
                setDesc(response.data.description);
                setIconUrl(response.data.iconUrl);
            } else {
                console.error(response.statusText)
                router.push('/')
            }
        } catch (error) {
            console.error(error)
            router.push('/')
        }
    }

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token !== null) {
            getUserData(token);
        }
    }, []);

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
                HotchPotch
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
                    src={`https://github.com/${name}.png`}
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
                {name}のGitHubプロフィール
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
                <Link href={`https://github.com/${name}`}>
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
                    <GitHubStatsCard name={name} />
                    <GithubMostLanguage name={name} />
                </div>
            </Card>
        </>
    );
};

export default Profile;
