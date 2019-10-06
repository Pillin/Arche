import styled from "styled-components";

export const StyledCalculator = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 600px;
    padding: 0px;
  }
`;
