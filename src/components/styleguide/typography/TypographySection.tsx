import StyleGuideSection from '../../layouts/StyleGuideSection';
import PreBlock from '../PreBlock';

export type TypographySectionProps = {};

function TypographySection(props: TypographySectionProps) {
  return (
    <StyleGuideSection title="Typography">
      <PreBlock>
        국문과 영문 혹은 숫자와의 혼용 시 Noto Sans를 사용합니다.
      </PreBlock>
    </StyleGuideSection>
  );
}

export default TypographySection;
