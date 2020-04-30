import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem',
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem',
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem',
  },
};

const SizeStyles = css`
  /*크기  */
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const ColorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${(props) =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: withe;
          }
        `}
    `;
  }}
`;

const fullWidthStyle = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

const StyledButton = styled.button`
  /*공통 스타일  */
  display: inlin-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 기타 만약 버튼끼리 같이있을때 여백을 주기위해서 */
  & + & {
    margin-left: 1rem;
  }

  /* 크기 */
  ${SizeStyles}
  /* 색상 */
  ${ColorStyles}
  /* 가로화면 꽉차게 크기조절 */
  ${fullWidthStyle}


  /* &<-자기자신을 선택  */

`;

// children Button태그 안의 내용
// ...rest 모든 props
function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium',
};

export default Button;
