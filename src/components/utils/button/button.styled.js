import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.primaryBorderColor};
  box-shadow: inset 0 1px 3px ${({ theme }) => theme.primaryBoxShadow};
  border-radius: 4px;
  padding: 12px 20px 12px 20px;

  &:hover {
    background: ${({ theme }) => theme.primaryButtonHover};
  }
  & .error {
    border: 1px solid ${({ theme }) => theme.ErrorBorderColor};
  }
`;
