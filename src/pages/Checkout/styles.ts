import styled from "styled-components";
import { colors } from "../../styles";
import { ButtonContainer } from "../../components/Button/styles";

export const CheckoutWrapper = styled.div`
  margin-block: 4rem;

  > ${ButtonContainer} {
    margin-top: 2rem;
  }
`;

export const ContentRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  /* flex-wrap: wrap; */
`;

type ContentInputGroupProps = {
  maxWidth?: string;
};

export const ContentInputGroup = styled.div<ContentInputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || "auto"};

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 0.5rem;
  }

  input,
  select {
    width: 100%;
    background-color: ${colors.white};
    /* height: 32px; */
    border-radius: 0.25rem;
    padding: 0.5rem;
    border: none;
  }
`;
