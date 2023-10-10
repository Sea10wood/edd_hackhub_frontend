import { Button, Typography } from "@mui/material"

 export const GitHubLoginButton = () => {

   const githubOAuth = () => {
     console.log('hello')
   }

   return (
     <div
       style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
       onClick={githubOAuth}
     >
        <Typography></Typography>
       <Button variant="contained" sx={{ backgroundColor: 'black' }}>GitHubで認証する</Button>
     </div>
   )
 } 
