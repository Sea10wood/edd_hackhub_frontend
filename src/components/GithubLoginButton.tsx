import { Button, Typography } from "@mui/material"

import { useRouter } from "next/router"

export const GitHubLoginButton = () => {

  const router = useRouter()

  const githubOAuth = () => {
    const githubClientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
    router.push(`https://github.com/login/oauth/authorize?client_id=${githubClientId}`)
  }

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
      onClick={githubOAuth}
    >
      <Button variant="contained" sx={{ backgroundColor: 'black' }}>GitHubで認証する</Button>
    </div>
  )
}

