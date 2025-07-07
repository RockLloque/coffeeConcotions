



import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  const response = await fetch('https://cof.cny.sh/iced');
  if (!response.ok) {
    return res.status(405).json({ error: "Could not fetch data from endpoint https://cof.cny.sh/hot" })
  }
  const data = await response.json();

  return res.status(200).json(data)
}
