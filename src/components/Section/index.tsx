import { SectionTitle, SectionWrapper } from "./styles";

export type SectionProps = {
  title: string;
  theme?: "black" | "gray";
  children: JSX.Element;
};

const Section = ({ title, theme = "black", children }: SectionProps) => (
  <SectionWrapper theme={theme}>
    <div className="container">
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  </SectionWrapper>
);
export default Section;
