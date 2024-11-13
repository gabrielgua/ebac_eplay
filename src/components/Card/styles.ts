import styled from "styled-components";
import { colors } from "../../styles";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${colors.gray};
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;

  h2 {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.white};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 14px;
    font-weight: normal;
    line-height: 22px;
  }
`;
