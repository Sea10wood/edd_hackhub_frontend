import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


import { GitHubLoginButton } from '@/components/GithubLoginButton'
import { Typography } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export const axiosBaseURL = 'http://localhost:8080'

export default function Index() {
  return (
    <>
     
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div style={{marginTop:"5vh"}}>

      <Typography sx={{ fontWeight: "bold",  fontSize: "12vw"}}>Hack Hub</Typography>
      <Typography sx={{ fontWeight: "bold",  fontSize: "5vw" }}>Created by Hotch Potch</Typography>
        </div>
      <div style={{marginTop:"10vh", marginBottom: "10vh"}}>
        <GitHubLoginButton/>
      </div> 
      <div style={{overflow:"hidden"}}>

       <div className="text" style={{fontWeight: "bold", fontSize: "40px",}}>
        {"　　　　　　　　　　　　　　ハッカソン好きの　　　　　　　　　　　　ハッカソン好きによる　　　　　　　　　　　　　ハッカソン好きのための　　　　　　　　　　　　　　　　　　　Hack Hub"}
        </div>
      </div>
      

      </main>

    </>
  )
}
