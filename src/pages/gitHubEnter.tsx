import { Button } from "@mui/material"


export default function Home() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Button variant="contained" sx={{ backgroundColor: 'black' }}>GitHubで認証する</Button>
      </div>

    </>
  )
}
