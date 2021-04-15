import styled from 'styled-components';

const BodyStrongBold = styled.p`
  font-size: 0.8125rem; //13px;
  font-weight: bold;
  line-height: 1.1875rem; // 19
  letter-spacing: 0.003125rem; // 0.05px;
  color: black;
`;

const BodyStrongRegular = styled(BodyStrongBold)`
  font-weight: regular;
  letter-spacing: 0.00625rem; // 0.1px;
`;

const BodyNormalMedium = styled.p`
  font-size: 0.75rem; //12px;
  font-weight: medium;
  line-height: 1.125rem; // 18
  letter-spacing: 0.00625rem; // 0.1px;
  color: ${(props) => props.theme.color.gray[800]};
`;

const BodyNormalRegular = styled(BodyNormalMedium)`
  font-weight: regular;
`;

const Small = styled.p`
  font-size: 0.6875rem; //11px;
  font-weight: regular;
  line-height: 1.0625rem; // 17
  letter-spacing: 0.003125rem; // 0.05px;
  color: ${(props) => props.theme.color.gray[800]};
`;

const CaptionBold = styled.p``;

function TypoElement({ scale, children, ...rest }: TypoElementProps) {
  if (scale === 'body-strong-bold') {
    return <BodyStrongBold {...rest}>{children}</BodyStrongBold>;
  } else if (scale === 'body-strong-regular') {
    return <BodyStrongRegular {...rest}>{children}</BodyStrongRegular>;
  } else if (scale === 'body-normal-medium') {
    return <BodyNormalMedium {...rest}>{children}</BodyNormalMedium>;
  } else if (scale === 'body-normal-regular') {
    return <BodyNormalRegular {...rest}>{children}</BodyNormalRegular>;
  } else if (scale === 'small') {
    return <Small {...rest}>{children}</Small>;
  }
  return null;
}

type ScaleType =
  | 'body-strong-bold'
  | 'body-strong-regular'
  | 'body-normal-medium'
  | 'body-normal-regular'
  | 'small'
  | 'caption-bold'
  | 'caption-regular'
  | 'button';

export type TypoElementProps = {
  scale: ScaleType;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>;

export default TypoElement;
