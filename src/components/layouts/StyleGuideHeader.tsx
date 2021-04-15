import styled from 'styled-components';

const Header = styled.header`
  background: ${(props) => props.theme.color.gray[700]};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.color.gray['white']};
`;

function StyleGuideHeader({ title, children }: StyleGuideHeaderProps) {
  return (
    <Header>
      {title && <Title>{title}</Title>}
      {children}
    </Header>
  );
}

export type StyleGuideHeaderProps = {
  title?: string;
  children?: React.ReactNode;
};

export default StyleGuideHeader;
