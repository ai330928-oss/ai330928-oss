/**
 * API 서비스 모듈
 * 백엔드 API와 통신하는 서비스
 */

// Vercel 배포 시 자동으로 현재 도메인 사용
const getApiBaseUrl = () => {
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  // 프로덕션 환경에서는 상대 경로 사용 (같은 도메인)
  if (import.meta.env.PROD) {
    return '/api';
  }
  // 개발 환경에서는 로컬 서버 사용
  return 'http://localhost:3001/api';
};

const API_BASE_URL = getApiBaseUrl();
const USER_ID = localStorage.getItem('user_id') || `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

// 사용자 ID 저장
if (!localStorage.getItem('user_id')) {
  localStorage.setItem('user_id', USER_ID);
}

class ApiService {
  /**
   * 사용자 저장 데이터 로드
   * @param {string} sport - 'soccer' | 'nba'
   * @returns {Promise<{exists: boolean, money?: number, mySquad?: Array, formation?: string}>}
   */
  async loadSave(sport) {
    try {
      const response = await fetch(`${API_BASE_URL}/save/${USER_ID}/${sport}`);
      if (!response.ok) throw new Error('저장 데이터 로드 실패');
      return await response.json();
    } catch (error) {
      console.error('저장 데이터 로드 오류:', error);
      // 오프라인 모드: localStorage 폴백
      const key = sport === 'soccer' ? 'fc_save_v18' : 'nba_save_v18';
      const saved = localStorage.getItem(key);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          exists: true,
          money: parsed.money,
          mySquad: parsed.mySquad,
          formation: null
        };
      }
      return { exists: false };
    }
  }

  /**
   * 사용자 저장 데이터 저장
   * @param {string} sport - 'soccer' | 'nba'
   * @param {number} money - 보유 금액
   * @param {Array} mySquad - 선수 목록
   * @param {string} formation - 포메이션
   * @returns {Promise<{success: boolean}>}
   */
  async saveGame(sport, money, mySquad, formation = null) {
    try {
      const response = await fetch(`${API_BASE_URL}/save/${USER_ID}/${sport}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ money, mySquad, formation }),
      });

      if (!response.ok) throw new Error('저장 실패');
      const result = await response.json();
      
      // 성공 시 localStorage에도 백업 저장
      const key = sport === 'soccer' ? 'fc_save_v18' : 'nba_save_v18';
      localStorage.setItem(key, JSON.stringify({ money, mySquad }));
      
      return result;
    } catch (error) {
      console.error('저장 오류:', error);
      // 오프라인 모드: localStorage 폴백
      const key = sport === 'soccer' ? 'fc_save_v18' : 'nba_save_v18';
      localStorage.setItem(key, JSON.stringify({ money, mySquad }));
      return { success: true, message: '로컬 저장 완료 (오프라인 모드)' };
    }
  }

  /**
   * 마켓 선수 목록 조회
   * @param {string} sport - 'soccer' | 'nba'
   * @returns {Promise<Array>}
   */
  async getMarketPlayers(sport) {
    try {
      const response = await fetch(`${API_BASE_URL}/market/${sport}`);
      if (!response.ok) throw new Error('마켓 데이터 로드 실패');
      return await response.json();
    } catch (error) {
      console.error('마켓 데이터 로드 오류:', error);
      // 오프라인 모드: 정적 데이터 반환
      const { SOCCER_DATA, NBA_DATA } = await import('./PlayerData.js');
      return sport === 'soccer' ? SOCCER_DATA : NBA_DATA;
    }
  }

  /**
   * 선수 추가 (구매)
   * @param {string} sport - 'soccer' | 'nba'
   * @param {Object} player - 선수 객체
   * @returns {Promise<{success: boolean}>}
   */
  async addPlayer(sport, player) {
    try {
      const response = await fetch(`${API_BASE_URL}/player`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: USER_ID, sport, player }),
      });

      if (!response.ok) throw new Error('선수 추가 실패');
      return await response.json();
    } catch (error) {
      console.error('선수 추가 오류:', error);
      // 오프라인 모드에서는 프론트엔드에서 직접 처리
      return { success: true };
    }
  }

  /**
   * 선수 삭제 (판매)
   * @param {string} uid - 선수 고유 ID
   * @returns {Promise<{success: boolean}>}
   */
  async deletePlayer(uid) {
    try {
      const userId = localStorage.getItem('user_id');
      const sport = localStorage.getItem('current_sport') || 'soccer';
      const response = await fetch(`${API_BASE_URL}/player?uid=${uid}&userId=${userId}&sport=${sport}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('선수 삭제 실패');
      return await response.json();
    } catch (error) {
      console.error('선수 삭제 오류:', error);
      return { success: true };
    }
  }

  /**
   * 선수 업데이트 (강화 등)
   * @param {string} uid - 선수 고유 ID
   * @param {number} level - 새로운 레벨
   * @returns {Promise<{success: boolean}>}
   */
  async updatePlayer(uid, level) {
    try {
      const userId = localStorage.getItem('user_id');
      const sport = localStorage.getItem('current_sport') || 'soccer';
      const response = await fetch(`${API_BASE_URL}/player?uid=${uid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, sport, level }),
      });

      if (!response.ok) throw new Error('선수 업데이트 실패');
      return await response.json();
    } catch (error) {
      console.error('선수 업데이트 오류:', error);
      return { success: true };
    }
  }
}

// 싱글톤 인스턴스
const apiService = new ApiService();

export default apiService;

