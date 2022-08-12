import createEmotion from '@emotion/css/create-instance';
export const {
  flush,
  hydrate,
  cx,
  getRegisteredStyles,
  injectGlobal,
  keyframes,
  css,
  cache,
  sheet,
} = createEmotion({ key: 'css-whatever' });