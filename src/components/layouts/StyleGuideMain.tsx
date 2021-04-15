import styled from 'styled-components';

const Main = styled.main`
  min-height: 100%;
`;

function StyleGuideMain({ children }: StyleGuideMainProps) {
  return <Main>{children}</Main>;
}
export type StyleGuideMainProps = {
  children: React.ReactNode;
};

export default StyleGuideMain;
