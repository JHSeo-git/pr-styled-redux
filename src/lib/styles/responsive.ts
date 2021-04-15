import { css } from 'styled-components';
import media from './media';

export const responsiveWidth = css`
  margin-left: auto;
  margin-right: auto;
  width: 55rem;
  ${media.large} {
    width: 39rem;
  }
  ${media.custom(650)} {
    margin-left: 1rem;
    margin-right: 1rem;
    width: 100%;
  }
`;
