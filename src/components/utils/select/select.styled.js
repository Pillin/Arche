import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 100%;
  margin: 8px 0;
  border: 1px solid ${({ theme }) => theme.primaryBorderColor};
  box-shadow: inset 0 1px 3px ${({ theme }) => theme.primaryBoxShadow};
  border-radius: 4px;
  padding: 12px 20px 12px 20px;
  background-color: white;
  & > option {
    padding: 12px 20px 12px 20px;
    width: 100%;
    margin: 8px 0;
    :disabled {
      color: gray;
    }
  }
  & .error {
    border: 1px solid ${({ theme }) => theme.ErrorBorderColor};
  }
`;
