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
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      onClick={githubOAuth}
    >
      <Button variant="contained" sx={{ backgroundColor: 'black' }}>Login with GitHub</Button>
    </div>
  )
}

