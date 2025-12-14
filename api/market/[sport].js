import { SOCCER_DATA, NBA_DATA } from '../../src/PlayerData.js';

export default async function handler(req, res) {
  // CORS 헤더 설정
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { sport } = req.query;

  if (sport === 'soccer') {
    res.json(SOCCER_DATA);
  } else if (sport === 'nba') {
    res.json(NBA_DATA);
  } else {
    res.status(400).json({ error: 'Invalid sport' });
  }
}

