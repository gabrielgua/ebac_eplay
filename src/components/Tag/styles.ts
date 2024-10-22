import styled from "styled-components";
import { colors } from "../../styles";
import { TagProps } from ".";

export const TagContainer = styled.div<TagProps>`
  background-color: ${colors.green};
  max-width: max-content;
  color: ${colors.white};
  font-size: ${(props) => (props.size === "large" ? "16px" : "12px")};
  font-weight: bold;
  padding: ${(props) =>
    props.size === "large" ? ".75rem 1rem" : "0.25rem .75rem"};
  border-radius: 0.75rem;
`;
