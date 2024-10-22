import { TagContainer } from "./styles";

export type TagProps = {
  size?: "small" | "large";
  children: string;
};

const Tag = ({ children, size = "small" }: TagProps) => (
  <TagContainer size={size}>{children}</TagContainer>
);

export default Tag;
