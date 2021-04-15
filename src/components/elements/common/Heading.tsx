import styled from 'styled-components';

const Heading1 = styled.h1`
  font-size: 1.5rem; // 24px;
  line-height: 2.0625rem; // 33px;
  letter-spacing: -0.025rem; // -0.4px
  font-weight: bold;
`;
const Heading2 = styled.h2`
  font-size: 1.125rem; // 18px;
  line-height: 1.5625rem; // 25px;
  letter-spacing: -0.0125rem; // 0.2px;
  font-weight: bold;
`;
const Heading3 = styled.h3`
  font-size: 1rem; // 16px;
  line-height: 1.375rem; // 22px;
  letter-spacing: -0.0125rem;
  font-weight: bold;
`;
const Heading4 = styled.h4`
  font-size: 0.9375rem; // 15px;
  line-height: 1.375rem; // 22px;
  letter-spacing: -0.00625rem; // -1px;
  font-weight: bold;
`;
const Heading5 = styled.h5`
  font-size: 0.875rem; // 14px;
  line-height: 1.25rem; // 20px;
  letter-spacing: 0.003125rem; // 0.05px;
  font-weight: medium;
`;
const Heading6 = styled.h6`
  font-size: 0.8125rem; // 13px;
  line-height: 1.1875rem; // 19px;
  letter-spacing: 0.003125rem; // 0.05px;
  font-weight: medium;
`;

function Heading({ scale, children, ...rest }: HeadingProps) {
  if (scale === 'h1') {
    return <Heading1 {...rest}>{children}</Heading1>;
  } else if (scale === 'h2') {
    return <Heading2 {...rest}>{children}</Heading2>;
  } else if (scale === 'h3') {
    return <Heading3 {...rest}>{children}</Heading3>;
  } else if (scale === 'h4') {
    return <Heading4 {...rest}>{children}</Heading4>;
  } else if (scale === 'h5') {
    return <Heading5 {...rest}>{children}</Heading5>;
  } else if (scale === 'h6') {
    return <Heading6 {...rest}>{children}</Heading6>;
  } else {
    return null;
  }
}

type ScaleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingProps = {
  scale: ScaleType;
} & React.HTMLAttributes<HTMLHeadingElement>;

export default Heading;
