import styled from 'styled-components';

export type ButtonGuideProps = {};

const NormalBtn = styled.button`
  padding: 0.25rem 0.5rem;
  background-color: ${(props) => props.theme.color.primary[500]};
`;

function ButtonGuide(props: ButtonGuideProps) {
  return <NormalBtn>normal</NormalBtn>;
}

export default ButtonGuide;
