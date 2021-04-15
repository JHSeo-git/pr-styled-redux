import styled from 'styled-components';

const ColorBlock = styled.li<{ $color: string }>`
  width: 10rem;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.75rem;
  background: ${(props) => props.$color};
`;

const ColorKey = styled.p<{ $contrast: boolean }>`
  font-size: 0.8125rem;
  font-weight: bold;
  color: ${(props) => (props.$contrast ? 'white' : 'black')};
`;

const ColorValue = styled.p<{ $contrast: boolean }>`
  font-size: 0.6875rem;
  font-weight: 400;
  color: ${(props) => (props.$contrast ? 'white' : 'black')};
`;

function ColorItem({ colorKey, colorValue, contrast = false }: ColorItemProps) {
  if (!colorKey || !colorValue) return null;
  return (
    <ColorBlock $color={colorValue}>
      <ColorKey $contrast={contrast}>{colorKey}</ColorKey>
      <ColorValue $contrast={contrast}>{colorValue}</ColorValue>
    </ColorBlock>
  );
}
export type ColorItemProps = {
  colorKey?: string;
  colorValue?: string;
  contrast?: boolean;
};

export default ColorItem;
