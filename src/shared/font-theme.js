import { css } from 'styled-components';

export const text = (fontSize, color) => css`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: ${color || 'var(--text-main)'};
  font-size: ${fontSize || '16px'};
`;
export const emphasis = (fontSize, color) => css`
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  color: ${color || 'var(--text-main)'};
  font-size: ${fontSize || '16px'};
`;
export const title = (fontSize, color) => css`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: ${color || 'var(--text-main)'};
  font-size: ${fontSize || '16px'};
`;
export const semiTitle = (fontSize, color) => css`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: ${color || 'var(--text-main)'};
  font-size: ${fontSize || '16px'};
`;
export const koreanText = (fontSize, color) => css`
  font-family: noto-sans-cjk-kr, sans-serif;
  font-weight: 300;
  color: ${color || 'var(--text-main)'};
  font-size: ${fontSize || '16px'};
`;
