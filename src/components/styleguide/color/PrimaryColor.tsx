import React from 'react';
import styled from 'styled-components';
import media from '../../../lib/styles/media';
import { responsiveWidth } from '../../../lib/styles/responsive';
import { SinglexTheme } from '../../../lib/styles/SinglexTheme';
import Heading from '../../elements/common/Heading';
import ColorGridItem from './ColorGridItem';

const PaletteSection = styled.section`
  padding-top: 3rem; // 48px;
  padding-bottom: 3rem; // 48px;

  border-top: 0.0625rem solid ${(props) => props.theme.color.gray[200]}; // 1px;
  border-bottom: 0.0625rem solid ${(props) => props.theme.color.gray[200]}; // 1px;
  & + & {
    border-top: none;
  }
`;

const PaletteSubject = styled(Heading)`
  margin-bottom: 1.5rem;
  ${responsiveWidth};
`;

const PaletteGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  ${media.small} {
    grid-template-columns: repeat(1, 1fr);
  }
  ${responsiveWidth};
`;

function PrimaryColor(props: PrimaryColorProps) {
  const primary = Object.entries(
    SinglexTheme.color.primary,
  ).map(([key, value]) => ({ key, value }));
  const secondary = Object.entries(SinglexTheme.color.secondary);
  return (
    <>
      {primary && (
        <PaletteSection>
          <PaletteSubject scale="h2">Primary Color</PaletteSubject>
          <PaletteGrid>
            {primary.map(({ key, value }, i) => (
              <ColorGridItem
                key={i}
                colorKey={key}
                colorValue={value}
                contrast={i >= primary.length - 5}
              />
            ))}
          </PaletteGrid>
        </PaletteSection>
      )}
      {secondary && (
        <PaletteSection>
          <PaletteSubject scale="h2">Secondary Color</PaletteSubject>
          <PaletteGrid>
            {secondary.map(([key, value], i) => (
              <ColorGridItem
                key={i}
                colorKey={key}
                colorValue={value}
                contrast={i >= secondary.length - 5}
              />
            ))}
          </PaletteGrid>
        </PaletteSection>
      )}
    </>
  );
}

export type PrimaryColorProps = {};

export default PrimaryColor;
