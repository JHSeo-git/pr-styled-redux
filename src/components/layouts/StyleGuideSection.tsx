import React from 'react';
import styled from 'styled-components';
import { responsiveWidth } from '../../lib/styles/responsive';
import Heading from '../elements/common/Heading';

const Section = styled.section`
  background: white;
  border-radius: 0.375rem; // 6px;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled(Heading)`
  margin-top: 3rem;
  margin-bottom: 3rem;
  ${responsiveWidth};
`;

function StyleGuideSection({ title, children }: StyleGuideSectionProps) {
  return (
    <Section>
      {title && <SectionTitle scale="h1">{title}</SectionTitle>}
      {children}
    </Section>
  );
}
export type StyleGuideSectionProps = {
  title?: string;
  children: React.ReactNode;
};

export default StyleGuideSection;
