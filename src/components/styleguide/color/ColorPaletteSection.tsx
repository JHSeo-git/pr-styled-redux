import styled from 'styled-components';
import media from '../../../lib/styles/media';
import { responsiveWidth } from '../../../lib/styles/responsive';
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

function ColorList({ title, items }: ColorListProps) {
  return (
    <PaletteSection>
      <PaletteSubject scale="h2">{title}</PaletteSubject>
      <PaletteGrid>
        {items.map(({ key, value }, i) => (
          <ColorGridItem
            key={i}
            colorKey={key}
            colorValue={value}
            contrast={i >= items.length - 5}
          />
        ))}
      </PaletteGrid>
    </PaletteSection>
  );
}

type KV = {
  key: string;
  value?: string;
};

export type ColorListProps = {
  title: string;
  items: KV[];
};

export default ColorList;
