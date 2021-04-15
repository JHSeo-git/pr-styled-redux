import { ColorSpread, ContentSpread, StatusSpread } from 'styled-components';
import { SinglexTheme } from '../../../lib/styles/SinglexTheme';
import StyleGuideSection from '../../layouts/StyleGuideSection';
import ColorPaletteSection from './ColorPaletteSection';

function spreadToArray(spread: ColorSpread | ContentSpread | StatusSpread) {
  return Object.entries<string | undefined>(spread).map(([key, value]) => ({
    key,
    value,
  }));
}

function ColorPalette(props: ColorPaletteProps) {
  const primary = spreadToArray(SinglexTheme.color.primary);
  const secondary = spreadToArray(SinglexTheme.color.secondary);
  const gray = spreadToArray(SinglexTheme.color.gray);
  const status = spreadToArray(SinglexTheme.color.status);
  const contentNormal = spreadToArray(SinglexTheme.color.normal);
  const contentStrong = spreadToArray(SinglexTheme.color.strong);
  return (
    <StyleGuideSection title="Color Palette">
      <ColorPaletteSection title="Primary Color" items={primary} />
      <ColorPaletteSection title="Secondary Color" items={secondary} />
      <ColorPaletteSection title="Gray Color" items={gray} />
      <ColorPaletteSection title="Status Color" items={status} />
      <ColorPaletteSection title="Content Normal Color" items={contentNormal} />
      <ColorPaletteSection title="Content Strong Color" items={contentStrong} />
    </StyleGuideSection>
  );
}
export type ColorPaletteProps = {};

export default ColorPalette;
