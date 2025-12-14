// 간단한 인메모리 저장소 (실제로는 Vercel KV나 Postgres 사용 권장)
const storage = new Map();

export default async function handler(req, res) {
  // CORS 헤더 설정
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { userId, sport } = req.query;

  if (req.method === 'GET') {
    // 저장 데이터 로드
    const key = `${userId}_${sport}`;
    const saved = storage.get(key);
    
    if (!saved) {
      return res.json({ exists: false });
    }

    res.json({
      exists: true,
      money: saved.money,
      mySquad: saved.mySquad || [],
      formation: saved.formation
    });
  } else if (req.method === 'POST') {
    // 저장 데이터 저장
    const { money, mySquad, formation } = req.body;
    const key = `${userId}_${sport}`;
    
    storage.set(key, {
      money,
      mySquad: mySquad || [],
      formation: formation || null,
      updatedAt: new Date().toISOString()
    });

    res.json({ success: true, message: '저장 완료' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

