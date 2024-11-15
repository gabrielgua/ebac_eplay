import styled from "styled-components";
import { ButtonContainer } from "../../components/Button/styles";
import { SpinnerWrapper } from "../../components/Spinner/styles";
import { colors } from "../../styles";

export const CheckoutWrapper = styled.form`
  position: relative;
  margin-block: 4rem;

  > ${ButtonContainer} {
    margin-top: 2rem;
  }
`;

export const ContentRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  flex-wrap: wrap;
`;

type ContentInputGroupProps = {
  $maxwidth?: string;
};

export const ContentInputGroup = styled.div<ContentInputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.$maxwidth || "auto"};

  @media (max-width: 768px) {
    max-width: none;
    flex-grow: 1;
  }

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

  small {
    color: red;
  }
`;

export const LoadingCheckout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;

  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;
