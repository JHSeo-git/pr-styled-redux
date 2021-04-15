import styled from 'styled-components';
import Heading from '../../components/elements/common/Heading';

const Block = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #313131;

  padding-top: 6rem;
  padding-left: 6rem;
`;

const HeadingTitle = styled(Heading)`
  margin-bottom: 3.25rem; // 52px;
  font-size: 1.875rem; // 30px;
  color: #ffcd4e;
`;

const SubTitle = styled(Heading)`
  color: white;
  font-size: 1rem; // 16px;
`;

const Strong = styled.strong`
  font-size: inherit;
  font-weight: 500;
  font-family: 'Roboto', 'Noto Sans KR', sans-serif;
`;

const Para = styled.p`
  font-size: inherit;
  font-weight: 300;
  font-family: 'Noto Sans KR', sans-serif;
  margin-top: 0.5rem; // 8px;
`;

// TODO: styleguide link list
function Foundation(props: FoundationProps) {
  return (
    <Block>
      <HeadingTitle scale="h1">
        <Strong>Design System</Strong>
        <Para>for Styled System</Para>
        <Para>: : UI Resource</Para>
      </HeadingTitle>
      <SubTitle scale="h2">
        <Para>Ver 0.1</Para>
        <Para>Created by UX</Para>
      </SubTitle>
    </Block>
  );
}

export type FoundationProps = {};

export default Foundation;
