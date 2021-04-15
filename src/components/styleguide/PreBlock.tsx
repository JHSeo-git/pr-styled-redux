import styled from 'styled-components';
import { responsiveWidth } from '../../lib/styles/responsive';
import Heading from '../elements/common/Heading';

const Pre = styled.pre`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: ${(props) => props.theme.color.gray[100]};
`;

const InnerHeading = styled(Heading)`
  ${responsiveWidth}
`;

function PreBlock({ children }: PreBlockProps) {
  return (
    <Pre>
      <InnerHeading scale="h4">{children}</InnerHeading>
    </Pre>
  );
}
export type PreBlockProps = {
  children: React.ReactNode;
};

export default PreBlock;
