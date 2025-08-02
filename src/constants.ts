import type { BubbleProps } from './features/bubble';

export const defaultBotProps: BubbleProps = {
  chatflowid: '',
  apiHost: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://studio.growtheffect.co',
  onRequest: undefined,
  chatflowConfig: undefined,
  theme: undefined,
  observersConfig: undefined,
};
