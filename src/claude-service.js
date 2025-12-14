import Anthropic from '@anthropic-ai/sdk';

/**
 * Claude API 서비스
 * Anthropic Claude API와 통신하는 서비스 모듈
 */

class ClaudeService {
  constructor() {
    this.client = null;
    this.initialized = false;
  }

  /**
   * API 클라이언트 초기화
   * @param {string} apiKey - Anthropic API 키
   */
  initialize(apiKey) {
    if (!apiKey) {
      console.error('Claude API 키가 제공되지 않았습니다.');
      return false;
    }

    try {
      this.client = new Anthropic({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true // 클라이언트 사이드 사용 허용 (주의: 프로덕션에서는 백엔드 사용 권장)
      });
      this.initialized = true;
      return true;
    } catch (error) {
      console.error('Claude API 클라이언트 초기화 실패:', error);
      return false;
    }
  }

  /**
   * Claude에게 메시지 전송
   * @param {Array} messages - 대화 히스토리 [{role: 'user'|'assistant', content: string}]
   * @param {Function} onChunk - 스트리밍 응답 콜백 (선택)
   * @returns {Promise<string>} Claude의 응답
   */
  async sendMessage(messages, onChunk = null) {
    if (!this.initialized || !this.client) {
      throw new Error('Claude API 클라이언트가 초기화되지 않았습니다.');
    }

    try {
      if (onChunk) {
        // 스트리밍 모드
        let fullResponse = '';
        const stream = await this.client.messages.create({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 1024,
          messages: messages,
          stream: true,
        });

        for await (const event of stream) {
          if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
            const chunk = event.delta.text;
            fullResponse += chunk;
            onChunk(chunk);
          }
        }

        return fullResponse;
      } else {
        // 일반 모드
        const response = await this.client.messages.create({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 1024,
          messages: messages,
        });

        return response.content[0].text;
      }
    } catch (error) {
      console.error('Claude API 호출 실패:', error);
      throw error;
    }
  }
}

// 싱글톤 인스턴스 생성
const claudeService = new ClaudeService();

export default claudeService;
