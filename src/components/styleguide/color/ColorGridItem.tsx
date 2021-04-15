import styled from 'styled-components';
import Heading from '../../elements/common/Heading';

const ItemWrapper = styled.div`
  height: 4rem; // 64px;
  display: flex;
  align-items: center;
  border-radius: 0.375rem;
  border: 0.0625rem solid ${(props) => props.theme.color.gray[200]};
`;

const ColorBlock = styled.div<{ $color: string }>`
  height: 100%;
  max-width: 10rem; // 160px;
  flex: 1;
  border-radius: 0.375rem;
  background-color: ${(props) => props.$color};
`;

const ColorInfo = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const ColorValue = styled(Heading)`
  padding: 0.25rem 0.375rem;
  background-color: ${(props) => props.theme.color.gray[100]};
  border-radius: 0.25rem;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
`;

function ColorGridItem({
  colorKey,
  colorValue,
  contrast = false,
}: ColorGridItemProps) {
  if (!colorKey || !colorValue) return null;
  return (
    <ItemWrapper>
      <ColorBlock $color={colorValue} />
      <ColorInfo>
        <Heading scale="h4">{colorKey}</Heading>
        <ColorValue scale="h5">{colorValue}</ColorValue>
      </ColorInfo>
    </ItemWrapper>
  );
}
export type ColorGridItemProps = {
  colorKey?: string;
  colorValue?: string;
  contrast?: boolean;
};

export default ColorGridItem;
