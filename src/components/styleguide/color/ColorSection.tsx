import { ColorSpread, ContentSpread, StatusSpread } from 'styled-components';
import { SinglexTheme } from '../../../lib/styles/SinglexTheme';
import StyleGuideSection from '../../layouts/StyleGuideSection';
import ColorPalette from './ColorPalette';

function spreadToArray(spread: ColorSpread | ContentSpread | StatusSpread) {
  return Object.entries<string | undefined>(spread).map(([key, value]) => ({
    key,
    value,
  }));
}

function ColorSection(props: ColorSectionProps) {
  const primary = spreadToArray(SinglexTheme.color.primary);
  const secondary = spreadToArray(SinglexTheme.color.secondary);
  const gray = spreadToArray(SinglexTheme.color.gray);
  const status = spreadToArray(SinglexTheme.color.status);
  const contentNormal = spreadToArray(SinglexTheme.color.normal);
  const contentStrong = spreadToArray(SinglexTheme.color.strong);
  return (
    <StyleGuideSection title="Color Palette">
      <ColorPalette title="Primary Color" items={primary} />
      <ColorPalette title="Secondary Color" items={secondary} />
      <ColorPalette title="Gray Color" items={gray} />
      <ColorPalette title="Status Color" items={status} />
      <ColorPalette title="Content Normal Color" items={contentNormal} />
      <ColorPalette title="Content Strong Color" items={contentStrong} />
    </StyleGuideSection>
  );
}
export type ColorSectionProps = {};

export default ColorSection;
