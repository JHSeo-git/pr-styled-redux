import styled from 'styled-components';

const Layout = styled.div`
  height: 100%;
`;

function StyleGuideLayout({ children }: StyleGuideLayoutProps) {
  return <Layout>{children}</Layout>;
}

export type StyleGuideLayoutProps = {
  children: React.ReactNode;
};

export default StyleGuideLayout;
