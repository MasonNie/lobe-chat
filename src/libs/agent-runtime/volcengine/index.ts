import { ModelProvider } from '../types';
import { LobeOpenAICompatibleFactory } from '../utils/openaiCompatibleFactory';

export const LobeVolcengineAI = LobeOpenAICompatibleFactory({
  baseURL: 'https://ark.cn-beijing.volces.com/api/v3/bots',
  debug: {
    chatCompletion: () => process.env.DEBUG_DOUBAO_CHAT_COMPLETION === '1',
  },
  provider: ModelProvider.Volcengine,
});
