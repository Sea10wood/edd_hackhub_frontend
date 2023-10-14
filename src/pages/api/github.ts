import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const code = req.body.code;
  const githubClientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
  const githubClientSecret = process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET;
  const accessTokenUrl = `https://github.com/login/oauth/access_token`;
  // fetch(accessTokenUrl)
  //   .then((response) => response.text())
  //   .then((paramsString) => {
  //     const params = new URLSearchParams(paramsString)
  //     const accessToken = params.get('access_token')
  //     console.log(accessToken)
  //     res.status(200).json({ access_token: accessToken })
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //     res.status(401).json({ message: 'Invalid code' })
  //   })
  try {
    console.log(githubClientId);
    console.log(githubClientSecret);
    const _res = await fetch(accessTokenUrl, {
      method: "POST",
      body: JSON.stringify({
        code,
        client_id: githubClientId,
        client_secret: githubClientSecret,
      }),
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await _res.json();
    if (data.access_token == undefined) {
      return res.status(403).json({ message: "unauthorized" });
    }
    const { access_token } = data;
    res.status(200).json({ access_token });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid code" });
  }
}
