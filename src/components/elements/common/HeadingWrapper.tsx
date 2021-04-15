import styled from 'styled-components';
import Heading from './Heading';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

function HeadingWrapper({ heading, front, end }: HeadingWrapperProps) {
  return (
    <Wrapper>
      {front}
      {heading}
      {end}
    </Wrapper>
  );
}
export type HeadingWrapperProps = {
  heading: typeof Heading;
  front?: React.ReactNode;
  end?: React.ReactNode;
};

export default HeadingWrapper;
