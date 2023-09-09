import { Button } from "@mui/material"
import Link from "next/link"


export default function Enter() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Link href="https://github.com/login/oauth/authorize">

          <Button variant="contained" sx={{ backgroundColor: 'black' }}>GitHubで認証する</Button>
        </Link>
      </div>

    </>
  )
}
