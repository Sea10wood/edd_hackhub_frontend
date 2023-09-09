import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code
  const githubClientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
  const githubClientSecret = process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET
  const accessTokenUrl = `https://github.com/login/oauth/access_token?code=${code}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
  fetch(accessTokenUrl)
    .then((response) => response.text())
    .then((paramsString) => {
      const params = new URLSearchParams(paramsString)
      const accessToken = params.get('access_token')
      res.status(200).json({ access_token: accessToken })
    })
    .catch((error) => {
      console.error(error)
      res.status(401).json({ message: 'Invalid code' })
    })
}
