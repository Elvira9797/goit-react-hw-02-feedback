import styled from '@emotion/styled';

const Button = styled.button`
  background: none;
  border: 1px solid #dddddd;
  font-weight: 500;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export default Button;
