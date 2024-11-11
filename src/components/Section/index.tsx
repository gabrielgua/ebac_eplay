import { SectionTitle, SectionWrapper } from "./styles";

export type SectionProps = {
  id?: string;
  title: string;
  theme?: "black" | "gray";
  children: JSX.Element;
};

const Section = ({ title, theme = "black", children, id }: SectionProps) => (
  <SectionWrapper id={id} theme={theme}>
    <div className="container">
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  </SectionWrapper>
);
export default Section;
