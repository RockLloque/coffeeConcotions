
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch('https://cof.cny.sh/iced');
    
    if (!response.ok) {
      console.error(`External API error: ${response.status} ${response.statusText}`);
      return res.status(502).json({ 
        error: "External service unavailable",
        details: `Upstream server responded with ${response.status}`
      });
    }

    const data = await response.json();
    return res.status(200).json(data);
    
  } catch (error) {
    console.error('API handler error:', error);
    return res.status(500).json({ 
      error: "Internal server error",
      message: error instanceof Error ? error.message : "Unknown error occurred"
    });
  }
}
