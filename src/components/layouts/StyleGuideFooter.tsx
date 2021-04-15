import styled from 'styled-components';

const Footer = styled.footer`
  height: 2rem;
  background: ${(props) => props.theme.color.gray[100]};
  text-align: center;
`;

function StyleGuideFooter({ children }: StyleGuideFooterProps) {
  return <Footer>{children}</Footer>;
}
export type StyleGuideFooterProps = {
  children: React.ReactNode;
};

export default StyleGuideFooter;
